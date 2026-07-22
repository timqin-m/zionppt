// AI 自动构建回放 — 本项目 hackathon-live-demo 的真实 Zion Plugin 构建过程动画回放
// 左栏 Codex 式 chat：用户指令气泡 → 工具调用步骤条目 → AI 收尾回复
// 右栏 Zion Cloud Console：数据表 / Agent（真实 prompt 打字机）/ 竖排行为流
// 纯 CSS/React 状态机驱动，无动画库；进入视口自动播放，离开重置，可手动重放
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

// 14 个阶段的时间表（ms）：奇数阶段=步骤条目出现（执行中），偶数阶段=该条目 ✓ + 右侧元素物化
const SCHEDULE = [
  500, 1400, // S1 ADD_TABLES 餐食记录 → meal_record 卡片
  2500, 3600, // S2 ADD_ZAI_CONFIGS → Agent 卡片
  4700, 5800, // S3 配置 Agent → 输入 chip / prompt 打字 / RAG 连线 / JSON 骨架
  7500, 8500, // S4 ADD_ACTION_FLOWS → 行为流卡片
  9300, 10200, // S5 节点连线 → 节点胶囊 + SVG 连线
  11300, 12100, // S6 配置匿名权限
  12900, 14100, // S7 SYNC_BACKEND → 已上线徽章 + AI 回复气泡 + 底部提示
];

const USER_INSTRUCTION =
  '用 Zion Plugin 帮我搭一个 AI 饮食助手后端：一张餐食记录表、一个卡路里分析 Agent（Gemini 3.5 Flash、结构化 JSON 输出）、一个『分析餐食并入库』行为流，配好权限并上线。';

const STEPS = [
  'ADD_TABLES 餐食记录',
  'ADD_ZAI_CONFIGS 卡路里分析官 (Gemini 3.5 Flash)',
  '配置 Agent 输入/Prompt/RAG/结构化输出',
  'ADD_ACTION_FLOWS 分析餐食并入库',
  '节点连线 + 数据绑定',
  '配置匿名权限',
  'SYNC_BACKEND → 已上线',
];

const AI_REPLY =
  '✅ 后端已全部配置完成并上线：1 张表、1 个 Agent、1 个行为流，GraphQL API 就绪——0 行后端代码。';

const SYSTEM_PROMPT =
  '你是一位专业又幽默的营养师『卡路里分析官』。用户会给你一段对一餐食物的描述；你的任务：1) 拆出每种食物并估算卡路里（kcal）；2) 汇总总卡路里；3) 给出一句不超过40字、轻松幽默的饮食或运动建议。必须严格按照结构化输出格式返回。若用户附上餐食照片，以照片为主、文字为辅。';
const PROMPT_TYPE_MS = 1500; // 全部打完 ≤1.5s

const MEAL_FIELDS = [
  ['food_name', 'TEXT'],
  ['calories', 'DECIMAL'],
  ['meal_type', 'TEXT'],
  ['advice', 'TEXT'],
  ['image', 'IMAGE'],
];
const JSON_LINES = ['{', '  "total_calories": number,', '  "advice": string,', '  "foods": [...]', '}'];
const FLOW_NODES = ['Input', '🤖 Run AI', '⬇ Insert DB', 'Output'];

export default function BuildReplaySlide() {
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

  // Agent 真实 system prompt 打字机（S3 完成后开始，≤1.5s 打完）
  const promptStarted = phase >= 6;
  useEffect(() => {
    if (!promptStarted) {
      setPromptLen(0);
      return undefined;
    }
    const t0 = Date.now();
    const timer = setInterval(() => {
      const n = Math.min(
        SYSTEM_PROMPT.length,
        Math.ceil(((Date.now() - t0) / PROMPT_TYPE_MS) * SYSTEM_PROMPT.length)
      );
      setPromptLen(n);
      if (n >= SYSTEM_PROMPT.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [promptStarted]);

  const stepState = (i) => {
    if (phase >= 2 * i + 2) return 'done';
    if (phase >= 2 * i + 1) return 'active';
    return 'hidden';
  };

  return (
    <section className="slide" id="build-replay" data-accent="spark" ref={sectionRef}>
      <div className="signature">✦ @functorz.com</div>
      <div className="slide-head" style={{ marginBottom: '12px' }}>
        <div className="kicker">
          <span className="pill accent">BEHIND THE SCENES</span>
          <span>ZION PLUGIN BUILD REPLAY</span>
        </div>
      </div>
      <h2 style={{ fontSize: '30px', marginBottom: '4px' }}>
        这个后端，是 <span className="accent">AI 用 Zion Plugin 自动搭的</span>
      </h2>
      <div className="meta" style={{ marginBottom: '14px', fontSize: '12.5px' }}>
        本演示项目 hackathon-live-demo 的真实构建过程回放 · 0 行后端代码
      </div>

      <div className="replay-grid">
        {/* 左：Codex 式 chat */}
        <div className="replay-chat">
          <div className="replay-chat-head">AI IDE · zion-plugin</div>

          <div className="replay-msg-user">
            <div className="replay-bubble-user">{USER_INSTRUCTION}</div>
            <div className="replay-avatar-user">你</div>
          </div>

          <div className="replay-steps">
            {STEPS.map((name, i) => {
              const st = stepState(i);
              if (st === 'hidden') return null;
              return (
                <div key={i} className={`replay-step ${st}`}>
                  <span className="replay-step-icon" />
                  <span className="replay-step-name">{name}</span>
                </div>
              );
            })}
          </div>

          {phase >= 14 && (
            <div className="replay-msg-ai">
              <div className="replay-avatar-ai">✦</div>
              <div className="replay-bubble-ai">{AI_REPLY}</div>
            </div>
          )}
        </div>

        {/* 右：Zion Cloud Console */}
        <div className="replay-console">
          <div className="replay-console-head">
            <span className="replay-console-title">Zion Cloud Console · hackathon-live-demo</span>
            <span className={`replay-live-badge${phase >= 14 ? ' on' : ''}`}>
              <span className="live-dot" />
              已上线 · GraphQL API ready
            </span>
          </div>

          <div className="replay-mid">
            {/* 数据表列 */}
            <div className="replay-tables">
              <div className={`replay-table replay-pop${phase >= 2 ? ' on' : ''}`}>
                <div className="replay-table-name">餐食记录 <span>meal_record</span></div>
                {MEAL_FIELDS.map(([name, type], i) => (
                  <div key={name} className="replay-field" style={{ animationDelay: `${200 + i * 120}ms` }}>
                    <span>{name}</span><span className="replay-field-type">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RAG 挂载连线 */}
            <div className={`replay-rag${phase >= 6 ? ' on' : ''}`}>
              <div className="replay-rag-line" />
              <div className="replay-rag-label">RAG 挂载</div>
            </div>

            {/* Agent 卡片 */}
            <div className={`replay-agent replay-pop${phase >= 4 ? ' on' : ''}`}>
              <div className="replay-agent-head">
                <span className="replay-agent-name"> 卡路里分析官</span>
                <span className="replay-agent-model" style={{ animationDelay: '300ms' }}>Gemini 3.5 Flash</span>
              </div>
              <div className="replay-agent-chips">
                {['meal_description', 'meal_image'].map((c, i) => (
                  <span key={c} className="replay-chip" style={{ animationDelay: `${500 + i * 150}ms` }}>{c}</span>
                ))}
              </div>
              {promptStarted && (
                <div className="replay-prompt">
                  {SYSTEM_PROMPT.slice(0, promptLen)}
                  {promptLen < SYSTEM_PROMPT.length && <span className="replay-cursor replay-cursor-dark" />}
                </div>
              )}
              {promptStarted && (
                <div className="replay-prompt-user">这是我这一餐吃的：{'{meal_description}'}</div>
              )}
              <div className={`replay-json${phase >= 6 ? ' on' : ''}`}>
                {JSON_LINES.map((l, i) => (
                  <div key={i} className="replay-json-line" style={{ animationDelay: `${1700 + i * 140}ms` }}>{l}</div>
                ))}
              </div>
            </div>

            {/* 行为流卡片（竖排） */}
            <div className={`replay-flow replay-pop${phase >= 8 ? ' on' : ''}`}>
              <div className="replay-flow-name">⚡ 行为流 · 分析餐食并入库</div>
              <div className={`replay-flow-nodes${phase >= 10 ? ' on' : ''}`}>
                {FLOW_NODES.map((n, i) => (
                  <Fragment key={n}>
                    {i > 0 && (
                      <svg className="replay-flow-link" width="8" height="22" style={{ animationDelay: `${350 + i * 180}ms` }}>
                        <line x1="4" y1="1" x2="4" y2="21" />
                      </svg>
                    )}
                    <span className="replay-flow-node" style={{ animationDelay: `${i * 180}ms` }}>{n}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className={`replay-next${phase >= 14 ? ' on' : ''}`}>➔ 下一页：现场用它</div>
        </div>
      </div>

      <button type="button" className="replay-btn" onClick={start}>▶ 重新播放</button>
    </section>
  );
}
