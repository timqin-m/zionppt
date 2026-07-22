// s22 三类典型开发场景：终端指令风格卡片，错峰入场 + 光标闪烁
import { useSlideShown } from './PerkEffects.jsx';

const SCENARIOS = [
  {
    icon: '🗂',
    num: '01',
    title: 'CRUD 数据交互',
    c: 'var(--m-blue)',
    cl: 'var(--m-blue-light)',
    cd: 'var(--m-blue-dark)',
    prompt: '做一个餐食历史记录列表，支持按卡路里从高到低排序，并实现食物名称的模糊搜索。',
    chips: ['Schema 自动映射', '精确 GraphQL 交互'],
  },
  {
    icon: '🤖',
    num: '02',
    title: 'AI Agent 智能体接入',
    c: 'var(--m-lav)',
    cl: 'var(--m-lav-light)',
    cd: 'var(--m-lav-dark)',
    prompt:
      '做一个 AI 减脂顾问聊天悬浮窗，支持上传餐食照片，自动挂载他的历史饮食数据库作为 RAG，并强制 AI 输出卡路里、食物、运动建议的结构化 JSON 格式。',
    chips: ['RAG 数据库挂载', '流式结构化 JSON'],
  },
  {
    icon: '⚡',
    num: '03',
    title: '触发后端行为工作流',
    c: 'var(--m-flam)',
    cl: 'var(--m-flam-light)',
    cd: 'var(--m-flam-dark)',
    prompt:
      '配置一个「健康周报生成」行为流：自动提取用户本周餐食日志，调用大模型生成营养评估报告，并自动触发海报合成，生成可供一键社交分享的卡片链接。',
    chips: ['Actionflow 自动编排', '一键在线部署接口'],
  },
];

export function ScenarioCards() {
  const [ref, shown] = useSlideShown();
  return (
    <div className={`scn-grid${shown ? ' on' : ''}`} ref={ref}>
      {SCENARIOS.map((s, i) => (
        <div
          key={s.num}
          className="scn-card"
          style={{ '--c': s.c, '--cl': s.cl, '--cd': s.cd, animationDelay: `${i * 0.14}s` }}
        >
          <div className="scn-head">
            <span className="scn-icon">{s.icon}</span>
            <div className="scn-head-text">
              <div className="scn-title">{s.title}</div>
              <div className="scn-sub">SCENARIO {s.num}</div>
            </div>
            <span className="scn-num">{s.num}</span>
          </div>
          <div className="scn-term">
            <div className="scn-term-bar">
              <i />
              <i />
              <i />
              <span>prompt.txt</span>
            </div>
            <div className="scn-term-body">
              <span className="scn-prompt-sign">❯</span>
              {s.prompt}
              <span className="scn-cursor" />
            </div>
          </div>
          <div className="scn-result">
            <span className="scn-arrow">➜</span>
            <span className="scn-result-label">AI 自动完成</span>
            <div className="scn-chips">
              {s.chips.map((chip) => (
                <span key={chip} className="scn-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
