// Vibe-nocoding 交互演示回放 — 仿 plugin 演示（BuildReplaySlide）的循环状态机
// 左栏 Vibe 对话：自然语言指令打字机 → AI 步骤条目 → 收尾回复
// 中栏 Zion 画布编辑器：左侧菜单（数据模型/行为流/AI）→ 右侧依次物化 数据库设计 / 行为流节点配置 / Agent 配置
// 右栏 375 宽移动端 iPhone 机身：页面逐步长成 → 下单行为流 → 已上线 toast
// 纯 CSS/React 状态机驱动，无动画库；进入视口自动播放，离开重置，可手动重放
import { useCallback, useEffect, useRef, useState } from 'react';

// 14 个阶段的时间表（ms）：奇数阶段=步骤条目出现（执行中），偶数阶段=该条目 ✓ + 右侧元素物化
const SCHEDULE = [
  500, 2400, // S1 用户指令打字机 → 步骤① 创建数据表 → 数据模型面板物化
  3200, 4200, // S2 步骤② 配置行为流 → 行为流面板物化（菜单切换）
  5000, 6000, // S3 步骤③ 配置 AI Agent → Agent 面板物化（菜单切换）
  6800, 7800, // S4 步骤④ 生成页面区块 → 手机 nav/banner/商品卡物化
  8600, 9600, // S5 步骤⑤ 绑定数据 → 手机下单栏物化
  10400, 11400, // S6 步骤⑥ 一键上线 → 已上线徽章 + toast
  12200, 13600, // S7 AI 收尾回复
];

const USER_PROMPT = '帮我用 Zion 画布搭一个「拾光咖啡」点单小程序：建一张 menu_items 数据表；配一个「提交订单」行为流（点单→写库→通知）；再配一个咖啡推荐 Agent；页面要顶部导航、主视觉 Banner、三张商品卡片和底部下单按钮！';
const PROMPT_TYPE_MS = 2200; // 指令全部打完 ≤2.2s

const STEPS = [
  '创建数据表 · menu_items',
  '配置行为流 · 提交订单',
  '配置 AI Agent · 咖啡推荐',
  '生成页面区块 · 导航/Banner/商品卡',
  '绑定数据 · 页面联调',
  '一键上线 · 小程序预览',
];

const AI_REPLY =
  '数据模型、行为流、AI Agent、页面区块全部配好，也已绑定联调——0 行代码。画布上任何一块随时可点、可改、可换。';

const TABLE_FIELDS = [
  ['name', 'TEXT'],
  ['price', 'DECIMAL'],
  ['image', 'IMAGE'],
];

const CARDS = [
  ['🧋', '燕麦拿铁', '¥18'],
  ['✨', '冷萃黑咖', '¥15'],
  ['🥐', '芝士可颂', '¥22'],
];

const FLOW_NODES = ['🛒 点击下单', '⚙ 运行 AI', '💾 写入订单', '🔔 飞书通知'];

export default function VibeNocodingReplaySlide() {
  const sectionRef = useRef(null);
  const timersRef = useRef([]);
  const playingRef = useRef(false);
  const visibleRef = useRef(false);
  const [phase, setPhase] = useState(0);
  const [promptLen, setPromptLen] = useState(0);

  const stop = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    playingRef.current = false;
  }, []);

  const start = useCallback(() => {
    stop();
    setPhase(0);
    playingRef.current = true;
    timersRef.current = SCHEDULE.map((t, i) => setTimeout(() => setPhase(i + 1), t));
    // 动画总时间后停顿 3.5s，再循环播放
    const loopTimer = setTimeout(() => {
      if (playingRef.current && visibleRef.current) {
        start();
      }
    }, SCHEDULE[SCHEDULE.length - 1] + 3500);
    timersRef.current.push(loopTimer);
  }, [stop]);

  // 进入视口自动播放 / 离开重置；演讲模式下跟随 .active class
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const sync = () => {
      const present = document.body.classList.contains('present');
      const shouldPlay = present ? el.classList.contains('active') : visibleRef.current;
      if (shouldPlay && !playingRef.current) start();
      else if (!shouldPlay && playingRef.current) {
        stop();
        setPhase(0);
      }
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === el) visibleRef.current = e.isIntersecting && e.intersectionRatio > 0.5;
        });
        sync();
      },
      { threshold: [0.5] }
    );
    io.observe(el);
    const mo = new MutationObserver(sync);
    mo.observe(el, { attributes: true, attributeFilter: ['class'] });
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => {
      io.disconnect();
      mo.disconnect();
      stop();
    };
  }, [start, stop]);

  // 用户指令打字机（S1 开始，≤2.2s 打完）
  const promptStarted = phase >= 1;
  useEffect(() => {
    if (!promptStarted) {
      setPromptLen(0);
      return undefined;
    }
    const t0 = Date.now();
    const timer = setInterval(() => {
      const n = Math.min(
        USER_PROMPT.length,
        Math.ceil(((Date.now() - t0) / PROMPT_TYPE_MS) * USER_PROMPT.length)
      );
      setPromptLen(n);
      if (n >= USER_PROMPT.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [promptStarted]);

  const stepState = (i) => {
    if (phase >= 2 * i + 2) return 'done';
    if (phase >= 2 * i + 1) return 'active';
    return 'hidden';
  };

  return (
    <section className="slide vibe-nocoding-how" id="vibe_nocoding_how" data-accent="core" ref={sectionRef}>
      <div className="vibe-nocoding-how-body">
        <div className="vibe-nocoding-how-copy">
          <h2>
            通过自然语言，在 Zion 画布上<br />完成页面和业务逻辑的<span className="accent">可视化搭建</span>
          </h2>
          <p>一句话，自动生成数据模型、行为流、AI 与页面——左搭右看，直接出小程序</p>
        </div>

        <div className="vrc-grid">
          {/* 左：AI IDE 对话 */}
          <div className="vrc-chat">
            <div className="vrc-chat-head">
              <span className="vrc-dot" /><span className="vrc-dot" /><span className="vrc-dot" />
              <b>AI IDE · zion-plugin</b>
            </div>
            {promptStarted && (
              <div className="vrc-msg-user">
                <div className="vrc-bubble-user">
                  {USER_PROMPT.slice(0, promptLen)}
                  {promptLen < USER_PROMPT.length && <span className="vrc-cursor" />}
                </div>
                <span className="vrc-avatar">你</span>
              </div>
            )}
            <div className="vrc-steps">
              {STEPS.map((name, i) => {
                const st = stepState(i);
                if (st === 'hidden') return null;
                return (
                  <div key={i} className={`vrc-step ${st}`}>
                    <span className="vrc-step-icon" />
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
            {phase >= 14 && (
              <div className="vrc-msg-ai">
                <span className="vrc-avatar vrc-avatar--ai">✦</span>
                <div className="vrc-bubble-ai">{AI_REPLY}</div>
              </div>
            )}
          </div>

          {/* 中：Zion 画布编辑器 */}
          <div className="canvas-mock vrc-canvas">
            <div className="canvas-mock-bar">
              <span className="canvas-dot" />
              <span className="canvas-dot" />
              <span className="canvas-dot" />
              <em>Zion 画布 · 拾光咖啡点单页</em>
              <span className={`vrc-live${phase >= 12 ? ' on' : ''}`}>
                <i />
                已上线 · 点击预览
              </span>
            </div>
            <div className="canvas-mock-main">
              {/* 左侧菜单：数据模型 / 行为流 / AI */}
              <div className="zcaf-side">
                <div className={`zcaf-menu${phase >= 2 ? ' on' : ''}${phase >= 2 && phase < 4 ? ' active' : ''}`}>
                  <span className="zcaf-menu-ic">◧</span>数据模型
                </div>
                <div className={`zcaf-menu${phase >= 4 ? ' on' : ''}${phase >= 4 && phase < 6 ? ' active' : ''}`}>
                  <span className="zcaf-menu-ic">⛓</span>行为流
                </div>
                <div className={`zcaf-menu${phase >= 6 ? ' on' : ''}${phase >= 6 ? ' active' : ''}`}>
                  <span className="zcaf-menu-ic">✦</span>AI
                </div>
                <div className="zcaf-side-sep" />
                <div className="zcaf-menu zcaf-menu--ghost"><span className="zcaf-menu-ic">▦</span>页面</div>
              </div>

              {/* 主编辑区：三个面板按阶段逐个接管 */}
              <div className="canvas-mock-stage zcaf-stage">
                {/* 面板① 数据模型：数据库设计 */}
                <div className={`zcaf-panel${phase >= 2 && phase < 4 ? ' on' : ''}`}>
                  <div className="zcaf-panel-head">数据模型 · 数据库设计</div>
                  <div className="zcaf-table">
                    <div className="zcaf-table-name">
                      menu_items <em>点单商品表</em>
                    </div>
                    {TABLE_FIELDS.map(([f, t]) => (
                      <div key={f} className="zcaf-table-field">
                        <b>{f}</b>
                        <span className="zcaf-table-type">{t}</span>
                        <span className="zcaf-table-key">主键·索引</span>
                      </div>
                    ))}
                  </div>
                  <div className="zcaf-flow-note">字段即接口 · 保存后自动生成 GraphQL</div>
                </div>

                {/* 面板② 行为流：可视化节点配置 */}
                <div className={`zcaf-panel${phase >= 4 && phase < 6 ? ' on' : ''}`}>
                  <div className="zcaf-panel-head">行为流 · 提交订单</div>
                  <div className="zcaf-flow">
                    {FLOW_NODES.map((n, i) => (
                      <div key={n} className="zcaf-flow-node" style={{ animationDelay: `${250 + i * 200}ms` }}>
                        <span className="zcaf-flow-dot">{n.slice(0, 1)}</span>
                        <span>{n.slice(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="zcaf-flow-note">拖拽节点连线 · 配置保存即生效</div>
                </div>

                {/* 面板③ AI：Agent 配置 */}
                <div className={`zcaf-panel${phase >= 6 ? ' on' : ''}`}>
                  <div className="zcaf-panel-head">AI Agent · 咖啡推荐官</div>
                  <div className="zcaf-agent">
                    <div className="zcaf-agent-row">
                      <b>模型</b><span className="zcaf-chip">Gemini 3.5 Flash</span>
                    </div>
                    <div className="zcaf-agent-row">
                      <b>输入</b><span className="zcaf-chip">menu_items · 点单明细</span>
                    </div>
                    <div className="zcaf-agent-row">
                      <b>输出</b><span className="zcaf-chip">份量建议 · 咖啡搭配</span>
                    </div>
                    <p className="zcaf-agent-prompt">Prompt：你是咖啡师，根据点单给出搭配与热量建议，幽默、不超过40字。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右：移动端 375 预览 */}
          <div className="vrc-phone">
            <div className="vrc-phone-frame">
              <span className="vrc-phone-notch" />
              <div className="vrc-phone-screen">
                <div className="vrc-phone-status">
                  <span className="vrc-phone-time">9:41</span>
                  <span className="vrc-phone-icons"><i /><i /><i /></span>
                </div>

                <div className={`vrc-app-nav vrc-block${phase >= 8 ? ' on' : ''}`}>
                  <span className="vrc-app-logo">☕</span>
                  <b>拾光咖啡</b>
                  <span className="vrc-app-nav-btn">整杯·点单</span>
                </div>

                <div className={`vrc-app-banner vrc-block${phase >= 8 ? ' on' : ''}`}>
                  <b>一杯咖啡的时间</b>
                  <span>主视觉 · 自动生成</span>
                </div>

                <div className={`vrc-app-list vrc-block${phase >= 8 ? ' on' : ''}`}>
                  {CARDS.map(([ic, name, price]) => (
                    <div key={name} className="vrc-app-item">
                      <span className="vrc-app-thumb">{ic}</span>
                      <span className="vrc-app-info">
                        <b>{name}</b>
                        <em>中杯 · 冰/热可选</em>
                      </span>
                      <span className="vrc-app-price">{price}</span>
                      <span className="vrc-app-add">+</span>
                    </div>
                  ))}
                </div>

                <div className={`vrc-app-foot vrc-block${phase >= 10 ? ' on' : ''}`}>
                  <span className="vrc-app-total">合计 <b>¥55</b></span>
                  <button type="button" className="vrc-app-btn">去下单 · 写入订单</button>
                </div>

                <div className={`vrc-app-toast vrc-block${phase >= 12 ? ' on' : ''}`}>
                  <span>✓</span> 订单已写入 menu_items · 推送成功
                </div>

                <span className="vrc-phone-home" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="replay-btn" onClick={start}>▶ 重新播放</button>
    </section>
  );
}
