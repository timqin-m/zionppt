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
  '用 Zion Plugin 帮我搭一个 AI 饮食助手后端：一张餐食记录表、一个卡路里分析 Agent（Gemini 3.5 Flash、结构化 JSON 输出）、一个『分析餐食并入库』行为流（含飞书通知 API），配好权限并上线。';

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
  '后端已全部配置完成并上线：1 张表、1 个 Agent、1 个行为流，GraphQL API 就绪——0 行后端代码。';

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
const JSON_LINES = [
  '{',
  '  "food_name": string,',
  '  "calories": number,',
  '  "meal_type": string,',
  '  "advice": string',
  '}',
];
const FLOW_NODES = ['输入', '⊛ 运行 AI', '↓ 写入数据库', '⊳ 飞书通知 API', '输出'];

export default function BuildReplaySlide() {
  const sectionRef = useRef(null);
  const timersRef = useRef([]);
  const playingRef = useRef(false);
  const visibleRef = useRef(false);
  const agentScrollRef = useRef(null);
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
    // 在动画总时间后加上 3 秒停顿，然后循环播放
    const loopTimer = setTimeout(() => {
      if (playingRef.current && visibleRef.current) {
        start();
      }
    }, SCHEDULE[SCHEDULE.length - 1] + 3000);
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

  // 打字 / JSON 展开时自动滚到底，保证 food_name 等字段可见
  useEffect(() => {
    const el = agentScrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [promptLen, phase]);

  const stepState = (i) => {
    if (phase >= 2 * i + 2) return 'done';
    if (phase >= 2 * i + 1) return 'active';
    return 'hidden';
  };

  return (
    <section className="slide" id="build-replay" data-accent="spark" ref={sectionRef}>

      {/* 飞书通知弹窗（行为流出现/触发时右上角弹出） */}
      <div className={`feishu-toast${phase >= 10 ? ' show' : ''}`}>
        <div className="feishu-toast-icon">
          <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88.7 32.5C80.2 19.3 62.7 15.3 49.5 23.8C36.3 32.3 32.3 49.8 40.8 63L191.6 298.5C198.8 309.7 211.2 316.5 224.6 316.5H448C465.7 316.5 480 302.2 480 284.5C480 277.2 477.5 270.2 473 264.5L88.7 32.5Z" fill="#00D6B9"/>
            <path d="M423.3 479.5C431.8 492.7 449.3 496.7 462.5 488.2C475.7 479.7 479.7 462.2 471.2 449L320.4 213.5C313.2 202.3 300.8 195.5 287.4 195.5H64C46.3 195.5 32 209.8 32 227.5C32 234.8 34.5 241.8 39 247.5L423.3 479.5Z" fill="#0052D9"/>
            <path d="M125.7 101.5C117.2 88.3 99.7 84.3 86.5 92.8C73.3 101.3 69.3 118.8 77.8 132L228.6 367.5C235.8 378.7 248.2 385.5 261.6 385.5H485.3C498 385.5 508.8 376.1 510.6 363.5C512.4 350.9 504.6 339.2 492.3 336.1L125.7 101.5Z" fill="#3370FF"/>
          </svg>
        </div>
        <div className="feishu-toast-content">
          <div className="feishu-toast-header">
            <span className="feishu-toast-app">飞书机器人</span>
            <span className="feishu-toast-time">刚刚</span>
          </div>
          <div className="feishu-toast-title">有新的分析记录出现！</div>
          <div className="feishu-toast-body">用户提交了「一碗螺蛳粉加炸蛋加冰可乐」，已自动完成 AI 分析并入库。</div>
        </div>
      </div>

      <h2 style={{ fontSize: '34px', marginBottom: '16px' }}>
        如果使用了 <span className="accent">Zion Plugin</span>，跟 AI 如何交流呢？
      </h2>

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
                <div className="replay-agent-scroll" ref={agentScrollRef}>
                  <div className="replay-prompt">
                    {SYSTEM_PROMPT.slice(0, promptLen)}
                    {promptLen < SYSTEM_PROMPT.length && <span className="replay-cursor replay-cursor-dark" />}
                  </div>
                  <div className="replay-prompt-user">这是我这一餐吃的：{'{meal_description}'}</div>
                  <div className={`replay-json${phase >= 6 ? ' on' : ''}`}>
                    {JSON_LINES.map((l, i) => (
                      <div key={i} className="replay-json-line" style={{ animationDelay: `${1700 + i * 140}ms` }}>{l}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 行为流卡片（竖排） */}
            <div className={`replay-flow replay-pop${phase >= 8 ? ' on' : ''}`}>
              <div className="replay-flow-name"><svg style={{display:"inline",verticalAlign:"middle",marginRight:"4px"}} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> 行为流 · 分析餐食并入库</div>
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
