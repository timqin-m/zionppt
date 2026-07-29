// LIVE DEMO 幻灯片 — 直连 Zion BaaS 真实后端，无 mock
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  fetchMeals,
  fetchLatestMeal,
  deleteMeal,
  createAnalysisTask,
  imageSuffixFor,
  fileMd5Hex,
  md5HexToBase64,
  getImagePresignedUrl,
  putImageToPresignedUrl,
  usePolling,
  useSubscription,
} from './zion.js';

/* ---------- 通用小组件 ---------- */

const ICONS = {
  browser: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="3"/><path d="M2 9h20"/><circle cx="6" cy="6" r=".5" fill="currentColor"/><circle cx="9" cy="6" r=".5" fill="currentColor"/></svg>,
  graphql: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8 22 16 12 22 2 16 2 8"/><path d="M12 2v20"/><path d="M2 8l10 6 10-6"/></svg>,
  flow: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  gemini: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8l2.8-2.8M17 7l2.8-2.8"/></svg>,
  pg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>,
  done: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  check: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  bolt: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  spinner: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a10 10 0 0 1 10 10"/></svg>,
  x: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  refresh: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.5 15.5A9 9 0 1 1 21 8l2 2"/></svg>,
  error: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>,
};

function LiveBadge() {
  return (
    <div className="live-badge">
      <span className="live-dot" />
      现场 · 真实后端 · 非 Mock
    </div>
  );
}

function ErrorBar({ error, onRetry }) {
  if (!error) return null;
  return (
    <div className="demo-error">
      <span>{ICONS.error} {error}</span>
      {onRetry && (
        <button type="button" onClick={onRetry}>
          重试
        </button>
      )}
    </div>
  );
}

function fmtTime(d) {
  if (!d) return '--:--:--';
  const p = (n) => String(n).padStart(2, '0');
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const MEAL_SUBSCRIPTION = `subscription { meal_record(limit: 20) { id food_name calories meal_type advice created_at } }`;

/* ---------- 行为流流水线可视化 ---------- */

const PIPE_NODES = [
  { key: 'browser', icon: 'browser', label: '浏览器' },
  { key: 'graphql', icon: 'graphql', label: 'GraphQL' },
  { key: 'flow', icon: 'flow', label: 'Zion 行为流' },
  { key: 'gemini', icon: 'gemini', label: 'GPT 5.6 Luna' },
  { key: 'pg', icon: 'pg', label: 'PostgreSQL' },
  { key: 'done', icon: 'done', label: '完成' },
];

const UPLOAD_SUBSTEPS = { md5: '计算 MD5…', presign: '申请上传凭证…', upload: '上传图片…' };

/**
 * 由执行阶段推导每个节点状态：pending / active / done / fail
 * 阶段：idle → md5 → presign → upload → creating → polling → completed（error/timeout 兜底）
 */
function nodeState(key, stage, failNode) {
  if ((stage === 'error' || stage === 'timeout') && key === failNode) return 'fail';
  const order = ['idle', 'md5', 'presign', 'upload', 'creating', 'polling', 'completed'];
  const idx = order.indexOf(stage === 'error' || stage === 'timeout' ? 'idle' : stage);
  switch (key) {
    case 'browser':
      if (idx >= order.indexOf('creating')) return 'done';
      if (idx >= order.indexOf('md5')) return 'active';
      return 'pending';
    case 'graphql':
      if (idx >= order.indexOf('polling')) return 'done';
      if (stage === 'creating') return 'active';
      return 'pending';
    case 'flow':
      if (idx >= order.indexOf('polling')) return 'done';
      return 'pending';
    case 'gemini':
      if (stage === 'completed') return 'done';
      if (stage === 'polling') return 'active pulse';
      return 'pending';
    case 'pg':
      if (stage === 'completed') return 'done flash';
      return 'pending';
    case 'done':
      if (stage === 'completed') return 'done success';
      return 'pending';
    default:
      return 'pending';
  }
}

function Pipeline({ stage, failNode, elapsed, hasImage }) {
  return (
    <div className="pipe">
      {PIPE_NODES.map((n, i) => {
        const state = nodeState(n.key, stage, failNode);
        const leftDone = i > 0 && nodeState(PIPE_NODES[i - 1].key, stage, failNode).startsWith('done');
        return (
          <div key={n.key} className="pipe-seg">
            {i > 0 && <div className={`pipe-link${leftDone ? ' active' : ''}`} />}
            <div className="pipe-node-wrap">
              <div className={`pipe-node ${state}`}>
                <span className="pipe-icon">{state.startsWith('done') && n.key !== 'done' ? ICONS.check : ICONS[n.icon]}</span>
              </div>
              <div className="pipe-label">{n.label}</div>
              {n.key === 'browser' && UPLOAD_SUBSTEPS[stage] && (
                <div className="pipe-sub">{UPLOAD_SUBSTEPS[stage]}</div>
              )}
              {n.key === 'browser' && hasImage && stage === 'creating' && (
                <div className="pipe-sub">图片已上传 {ICONS.check}</div>
              )}
              {n.key === 'gemini' && stage === 'polling' && (
                <div className="pipe-sub">已等待 {elapsed}s</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- DEMO-1：AI 卡路里分析 + 行为流 + 多模态图片 ---------- */

const QUICK_CHIPS = [
  '一碗螺蛳粉加炸蛋加冰可乐',
  '双层芝士牛肉汉堡配薯条',
  '轻食鸡胸沙拉配无糖酸奶',
];
const MEAL_TYPES = ['早餐', '午餐', '晚餐', '加餐'];

function failNodeForStage(stage) {
  if (stage === 'md5' || stage === 'presign' || stage === 'upload') return 'browser';
  if (stage === 'creating') return 'graphql';
  return 'gemini';
}

export function DemoSlide1({ active }) {
  const [text, setText] = useState('');
  const [mealType, setMealType] = useState('晚餐');
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const runIdRef = useRef(0);
  // 状态机：idle → md5 → presign → upload → creating → polling → completed / error / timeout
  const [task, setTask] = useState({ stage: 'idle', taskId: null, submitted: '', result: null, error: null, failNode: null });
  const [elapsed, setElapsed] = useState(0);
  const [highlightId, setHighlightId] = useState(null);

  const meals = usePolling(() => fetchMeals(20), 3000);
  // WS 仅作增强：收到数据帧就提前触发一次 HTTP 刷新，仅在当前幻灯片处于 active 时建立/维持连接
  useSubscription(MEAL_SUBSCRIPTION, () => meals.refresh(), active);

  // 本地图片预览 URL（换图/移除时回收）
  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);
  useEffect(() => () => { if (previewUrl) URL.revokeObjectURL(previewUrl); }, [previewUrl]);

  // 轮询期间（Gemini 节点）秒数计时
  useEffect(() => {
    if (task.stage !== 'polling') return;
    const started = Date.now();
    const timer = setInterval(() => setElapsed(Math.floor((Date.now() - started) / 1000)), 500);
    return () => clearInterval(timer);
  }, [task.stage]);

  const busy = ['md5', 'presign', 'upload', 'creating', 'polling'].includes(task.stage);
  const canSubmit = !busy && (text.trim().length > 0 || file);

  const runFlow = async () => {
    const submitted = text.trim();
    if (!submitted && !file) return;
    if (busy) return;
    const runId = ++runIdRef.current;
    const alive = () => runIdRef.current === runId;
    let stage = file ? 'md5' : 'creating';
    const setStage = (s, extra = {}) => {
      stage = s;
      if (alive()) setTask((t) => ({ ...t, stage: s, ...extra }));
    };
    setElapsed(0);
    setTask({ stage, taskId: null, submitted, result: null, error: null, failNode: null });
    try {
      let imageId = null;
      if (file) {
        setStage('md5');
        const md5b64 = md5HexToBase64(await fileMd5Hex(file));
        setStage('presign');
        const pre = await getImagePresignedUrl(md5b64, imageSuffixFor(file));
        setStage('upload');
        await putImageToPresignedUrl(pre.uploadUrl, pre.uploadHeaders, file);
        imageId = pre.imageId;
      }
      setStage('creating');
      const taskId = await createAnalysisTask(submitted, mealType, imageId);
      setStage('polling', { taskId });
      // 每 2.5s 轮询最新一行，created_at 比任务开始时间更新即完成；最多 60s
      const started = Date.now();
      const taskStartedAt = new Date().toISOString();
      while (alive() && Date.now() - started <= 60000) {
        await sleep(2500);
        const latest = await fetchLatestMeal().catch(() => null);
        if (latest && latest.created_at && latest.created_at > taskStartedAt) {
          setStage('completed', { result: latest });
          setHighlightId(latest.id);
          meals.refresh();
          return;
        }
      }
      if (alive()) {
        setTask((t) => ({
          ...t,
          stage: 'timeout',
          failNode: 'gemini',
          error: '等待超过 60 秒，行为流可能仍在运行，请手动刷新右侧表格确认',
        }));
      }
    } catch (e) {
      if (alive()) {
        setTask((t) => ({ ...t, stage: 'error', error: e.message || String(e), failNode: failNodeForStage(stage) }));
      }
    }
  };

  const resetTask = () => setTask({ stage: 'idle', taskId: null, submitted: '', result: null, error: null, failNode: null });

  const onDelete = async (id) => {
    try {
      await deleteMeal(id);
      meals.refresh();
    } catch (e) {
      alert(`删除失败：${e.message || e}`);
    }
  };

  const rows = meals.data || [];

  return (
    <section className="slide" id="demo1" data-accent="hack">
      <div className="signature">✦ @functorz.com</div>
      <LiveBadge />
      <div className="slide-head" style={{ marginBottom: '8px' }}>
        <div className="kicker">
          <span className="pill accent">现场演示</span>
          <span>AI Agent · 行为流 · 数据库</span>
        </div>
      </div>
      <h2 style={{ fontSize: '26px', marginBottom: '10px' }}>
        现场实机演示：AI Agent + 行为流 + 数据库，<span className="accent">全是真的</span>
      </h2>

      <div className="grid-2" style={{ flex: 1, minHeight: 0, gap: '20px' }}>
        {/* 左：行为流调用面板 */}
        <div className="card demo-panel">
          <div className="label"><span className="dot" />云端行为流：分析餐食并入库</div>
          <textarea
            className="demo-input"
            rows={2}
            placeholder="描述你刚吃的一餐，例如：一碗螺蛳粉加炸蛋加冰可乐（留空则看图分析）"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="demo-row">
            <select className="demo-input demo-select" value={mealType} onChange={(e) => setMealType(e.target.value)}>
              {MEAL_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <div className="demo-chips">
              {QUICK_CHIPS.map((c) => (
                <button key={c} type="button" className="demo-chip" onClick={() => setText(c)}>
                  {c.length > 8 ? c.slice(0, 8) + '…' : c}
                </button>
              ))}
            </div>
          </div>

          {/* 图片选择：缩略预览 + 文件名 + 移除 */}
          <div className="demo-row">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <button type="button" className="demo-img-btn" onClick={() => fileInputRef.current?.click()}>
               {file ? '更换图片' : '添加餐食图片'}
            </button>
            {file && previewUrl && (
              <div className="demo-img-preview">
                <img src={previewUrl} alt={file.name} />
                <span className="demo-img-name">{file.name}</span>
                <button
                  type="button"
                  className="demo-img-del"
                  onClick={() => {
                    setFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = '';
                  }}
                >
                  {ICONS.x}
                </button>
              </div>
            )}
          </div>

          <button type="button" className="btn-link demo-run" disabled={!canSubmit} onClick={runFlow}>
            {busy ? <><span className="demo-run-icon spin">{ICONS.spinner}</span> 行为流执行中…</> : <><span className="demo-run-icon">{ICONS.bolt}</span> 调用云端行为流</>}
          </button>

          {/* 流水线动画：idle 时作为静态架构图展示 */}
          <Pipeline stage={task.stage} failNode={task.failNode} elapsed={elapsed} hasImage={!!file} />

          {/* 完成结果 / 错误兜底 */}
          {task.stage === 'completed' && task.result && (
            <div className="demo-status demo-status-completed">
              <div className="demo-result">
                {task.result.image?.url && <img className="demo-thumb" src={task.result.image.url} alt="" />}
                <div className="demo-result-cal">
                  <span className="num-hero">{Math.round(Number(task.result.calories) || 0)}</span>
                  <span className="unit">kcal</span>
                </div>
                <div>
                  <div className="strong">{task.result.food_name}</div>
                  <div className="demo-advice">AI 建议：{task.result.advice}</div>
                </div>
              </div>
            </div>
          )}
          {(task.stage === 'error' || task.stage === 'timeout') && (
            <div className={`demo-status demo-status-${task.stage}`}>
              <span className="demo-status-err">
                {ICONS.error} {task.stage === 'timeout' ? '超时' : '调用失败'}：{task.error}
                <button type="button" onClick={resetTask}>重试</button>
              </span>
            </div>
          )}
        </div>

        {/* 右：meal_record 实时数据 */}
        <div className="card demo-panel">
          <div className="label" style={{ justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span className="dot" />meal_record 表 · 实时数据
            </span>
            <span className="demo-refresh">
              最后刷新 {fmtTime(meals.lastUpdated)}
              <button type="button" onClick={meals.refresh}>{ICONS.refresh} 刷新</button>
            </span>
          </div>
          <ErrorBar error={meals.error} onRetry={meals.refresh} />
          <div className="demo-cards-wrap">
            {rows.length === 0 && (
              <div className="demo-cards-empty">
                {meals.loading ? '加载中…' : '暂无数据'}
              </div>
            )}
            {rows.map((r) => (
              <div key={r.id} className={`demo-meal-card${r.id === highlightId ? ' card-new' : ''}`}>
                <div className="demo-meal-card-top">
                  {r.image?.url
                    ? <img className="demo-meal-card-img" src={r.image.url} alt={r.food_name} />
                    : <div className="demo-meal-card-img demo-meal-card-img--placeholder"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18l-1.5 13a2 2 0 0 1-2 1.8H6.5a2 2 0 0 1-2-1.8L3 6z"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M12 10v6"/><path d="M9 13h6"/></svg></div>}
                  <div className="demo-meal-card-info">
                    <div className="demo-meal-card-name">{r.food_name}</div>
                    <div className="demo-meal-card-meta">
                      <span className="demo-meal-card-type">{r.meal_type}</span>
                      <span className="demo-meal-card-cal">{Math.round(Number(r.calories) || 0)} kcal</span>
                    </div>
                  </div>
                  <button type="button" className="demo-del" onClick={() => onDelete(r.id)}>{ICONS.x}</button>
                </div>
                {r.advice && <div className="demo-meal-card-advice">{r.advice}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
