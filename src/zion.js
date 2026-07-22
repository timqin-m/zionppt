// Zion BaaS 真实后端封装 — 无任何 mock，所有数据直达云端 PostgreSQL
import { useCallback, useEffect, useRef, useState } from 'react';

export const GRAPHQL_URL = 'https://zion-app.functorz.com/zero/PO76RBe90gY/api/graphql-v2';
export const WS_URL = 'wss://zion-app.functorz.com/zero/PO76RBe90gY/api/graphql-subscription';
export const ACTION_FLOW_ID = 'd0e3e3bf-14ad-4e6c-a406-db4611f6ee87';

/** 匿名角色已授权，浏览器直接 POST，无需任何鉴权头 */
export async function gql(query, variables) {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(variables ? { query, variables } : { query }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (json.errors && json.errors.length) {
    throw new Error(json.errors[0].message || 'GraphQL 错误');
  }
  return json.data;
}

// ---------- 查询 / 变更 ----------

export function fetchMeals(limit = 20) {
  return gql(
    `query ($limit: Int!) { meal_record(order_by: { id: desc }, limit: $limit) { id food_name calories meal_type advice created_at image { id url } } }`,
    { limit }
  ).then((d) => d.meal_record);
}

export function fetchLatestMeal() {
  return fetchMeals(1).then((rows) => rows[0] || null);
}

export function deleteMeal(id) {
  return gql(`mutation ($id: bigint!) { delete_meal_record_by_pk(id: $id) { id } }`, { id });
}

/** 触发云端 AI 行为流（异步），返回 taskId（Long）；imageId 可选（先走两步上传拿到） */
export function createAnalysisTask(mealDescription, mealType, imageId) {
  const args = { meal_description: mealDescription, meal_type: mealType };
  if (imageId != null) args.meal_image = imageId;
  return gql(
    `mutation ($args: Json!) { fz_create_action_flow_task(actionFlowId: "${ACTION_FLOW_ID}", args: $args) }`,
    { args }
  ).then((d) => d.fz_create_action_flow_task);
}

// ---------- 图片两步上传 ----------

const IMAGE_SUFFIX_BY_MIME = {
  'image/jpeg': 'JPEG',
  'image/jpg': 'JPEG',
  'image/png': 'PNG',
  'image/webp': 'WEBP',
  'image/gif': 'GIF',
};

export function imageSuffixFor(file) {
  const suffix = IMAGE_SUFFIX_BY_MIME[file.type];
  if (!suffix) throw new Error(`不支持的图片类型：${file.type || '未知'}（仅 JPEG/PNG/WEBP/GIF）`);
  return suffix;
}

/** 原始 128-bit MD5 → hex（浏览器无原生 MD5，用 spark-md5） */
export async function fileMd5Hex(file) {
  const { default: SparkMD5 } = await import('spark-md5');
  const buf = await file.arrayBuffer();
  return SparkMD5.ArrayBuffer.hash(buf);
}

/** MD5 hex → Base64（预签名 URL 要求的格式） */
export function md5HexToBase64(hex) {
  return btoa(hex.match(/\w{2}/g).map((h) => String.fromCharCode(parseInt(h, 16))).join(''));
}

/** 第一步：拿预签名上传凭证 */
export function getImagePresignedUrl(imgMd5Base64, imageSuffix) {
  return gql(
    `mutation { imagePresignedUrl(imgMd5Base64: "${imgMd5Base64}", imageSuffix: ${imageSuffix}, acl: PUBLIC_READ) { imageId uploadUrl uploadHeaders } }`
  ).then((d) => d.imagePresignedUrl);
}

/**
 * 第二步：PUT 原始字节到 uploadUrl。
 * uploadHeaders 必须原样带全（Content-MD5、Date、x-oss-object-acl…），否则 OSS 签名不匹配。
 */
export async function putImageToPresignedUrl(uploadUrl, uploadHeaders, file) {
  const res = await fetch(uploadUrl, { method: 'PUT', headers: uploadHeaders, body: file });
  if (!res.ok) throw new Error(`图片上传失败：HTTP ${res.status}`);
}

// ---------- Hooks ----------

/**
 * HTTP 轮询基线。所有实时数据都以它为可靠来源。
 * 返回 { data, error, loading, lastUpdated, refresh }
 * error 时保留旧 data，绝不白屏。
 */
export function usePolling(fetcher, intervalMs, deps = []) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  const refresh = useCallback(async () => {
    try {
      const result = await fetcherRef.current();
      setData(result);
      setError(null);
      setLastUpdated(new Date());
      return result;
    } catch (e) {
      setError(e.message || String(e));
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    const tick = async () => {
      if (!alive) return;
      await refresh();
    };
    tick();
    const timer = setInterval(tick, intervalMs);
    return () => {
      alive = false;
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, refresh, ...deps]);

  return { data, error, loading, lastUpdated, refresh };
}

/**
 * WebSocket 订阅增强（legacy subscriptions-transport-ws，子协议 "graphql-ws"）。
 * 已知：偶发不稳定（ack 后无数据帧），所以只作为「提前刷新」的触发器，
 * 数据可靠性完全交给 usePolling。
 * 注意：订阅查询里不要写 order_by（会静默收不到数据），排序在前端做。
 */
export function useSubscription(subscriptionQuery, onEvent, enabled = true) {
  const onEventRef = useRef(onEvent);
  onEventRef.current = onEvent;

  useEffect(() => {
    if (!enabled) return;
    let ws = null;
    let closed = false;
    let retryTimer = null;

    const connect = () => {
      if (closed) return;
      try {
        ws = new WebSocket(WS_URL, 'graphql-ws');
      } catch {
        retryTimer = setTimeout(connect, 5000);
        return;
      }
      ws.onopen = () => {
        ws.send(JSON.stringify({ type: 'connection_init', payload: {} }));
      };
      ws.onmessage = (evt) => {
        let msg;
        try {
          msg = JSON.parse(evt.data);
        } catch {
          return;
        }
        if (msg.type === 'connection_ack') {
          ws.send(JSON.stringify({ id: '1', type: 'start', payload: { query: subscriptionQuery } }));
        } else if (msg.type === 'data') {
          onEventRef.current(msg.payload);
        }
      };
      ws.onclose = () => {
        if (!closed) retryTimer = setTimeout(connect, 5000);
      };
      ws.onerror = () => {
        try { ws.close(); } catch { /* ignore */ }
      };
    };

    connect();
    return () => {
      closed = true;
      if (retryTimer) clearTimeout(retryTimer);
      if (ws) {
        try { ws.close(); } catch { /* ignore */ }
      }
    };
  }, [subscriptionQuery, enabled]);
}
