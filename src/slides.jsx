// Auto-generated from zion-baas-hackathon-guide-slides.html — 幻灯片 markup 1:1 移植，勿手改
import { useState, useEffect, useRef } from 'react';
import { ScenarioCards } from './ScenarioCards.jsx';

export function Slide_s01() {
  return (
<section className="slide cover no-pad" id="s01" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="grid-bg"></div>
    <div className="corner-mark"></div>
    <div className="corner-mark-bl"></div>
    <div className="cover-body">
      <div className="cover-tag">
        <span className="badge">Zion BaaS</span>
        <span>Zion Plugin 极速开发指南</span>
      </div>
      <div>
        <h1><span className="accent">Zion Plugin</span></h1>
        <div className="cover-sub" style={{ fontSize: '32px', fontWeight: '600', color: '#fff', marginTop: '16px' }}>
          从今天开始 让 AI 搭建出可视化的产品后端
        </div>
      </div>
      <div className="cover-foot" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
        <div>
          <div style={{"fontSize":"18px","color":"#fff","fontWeight":"500","marginBottom":"6px"}}>Zion 开发者生态 覃貌Tim</div>
          <div className="meta" style={{"color":"rgba(255,255,255,.55)"}}>Powered by functorz.com</div>
        </div>
        <a 
          href="https://zion.howtone.cn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="qr-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            textDecoration: 'none',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '12px 18px',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            marginLeft: 'auto'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', textAlign: 'left' }}>
            <span style={{ 
              color: 'var(--accent)', 
              fontSize: '11px', 
              fontWeight: '700', 
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'rgba(21, 152, 255, 0.1)',
              padding: '2px 6px',
              borderRadius: '4px'
            }}>
              在线演示
            </span>
            <div style={{ fontSize: '15px', color: '#fff', fontWeight: '600' }}>
              Zion 演示站点
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-mono)' }}>
              zion.howtone.cn
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  );
}

export function Slide_s01_about({ active }) {
  const [counts, setCounts] = useState({ users: 0, projects: 0, endUsers: 0 });
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!active) {
      setCounts({ users: 0, projects: 0, endUsers: 0 });
      animatedRef.current = false;
      return undefined;
    }

    if (animatedRef.current) return undefined;
    animatedRef.current = true;

    const startTime = Date.now();
    const duration = 1600; // 1.6 秒完成滚动

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        users: Math.floor(ease * 30),
        projects: Math.floor(ease * 8000),
        endUsers: Math.floor(ease * 1000),
      });

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className={`slide ${active ? 'active-slide' : ''}`} id="s01_about" data-accent="core" style={{ padding: '60px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className="signature">✦ @functorz.com</div>
      
      <div className="slide-head" style={{ marginBottom: '0' }}>
        <div className="kicker">
          <span className="pill accent">关于 Zion</span>
        </div>
      </div>

      <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '46px', fontWeight: '800', color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: '16px' }}>
          在过去的 6 年里，我们只死磕了一件事
        </div>

        <h1 className="about-title-anim" style={{ fontSize: '46px', fontWeight: '800', lineHeight: '1.3', letterSpacing: '-0.01em', marginBottom: '44px', color: 'var(--ink)' }}>
          让没有技术背景的创业者，通过 Zion 可视化编辑器<br />
          <span className="accent">自主开发并交付微信小程序、Web 应用</span>
        </h1>

        {/* 动态大数字面板 */}
        <div className="grid-3 about-stats-grid" style={{ width: '100%', gap: '28px' }}>
          <div className="stat-card stat-card-1">
            <div className="stat-label">注册用户</div>
            <div className="num-hero stat-num">
              {counts.users}<span className="stat-unit">w+</span>
            </div>
            <div className="stat-desc">注册用户</div>
          </div>

          <div className="stat-card stat-card-2">
            <div className="stat-label">上线项目</div>
            <div className="num-hero stat-num">
              {counts.projects}<span className="stat-unit">+</span>
            </div>
            <div className="stat-desc">真实上线项目</div>
          </div>

          <div className="stat-card stat-card-3">
            <div className="stat-label">终端用户</div>
            <div className="num-hero stat-num">
              {counts.endUsers}<span className="stat-unit">w+</span>
            </div>
            <div className="stat-desc">用户的用户</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Slide_s01_vibe() {
  return (
    <section className="slide" id="s01_vibe" data-accent="spark">
      <div className="signature">✦ @functorz.com</div>
      <div className="slide-head" style={{ marginBottom: '20px' }}>
        <div className="kicker">
          <span className="pill accent">时代变迁</span>
          <span style={{ textTransform: 'none', letterSpacing: '0.06em' }}>Vibe Coding 的兴起</span>
        </div>
      </div>
      <h2 style={{ fontSize: '34px', fontWeight: '700', marginBottom: '8px', lineHeight: '1.3' }}>
        进入 Vibe Coding 时代：<span className="accent">没有技术背景，也能写出「前端」</span>
      </h2>
      <p className="muted" style={{ fontSize: '17px', marginBottom: '20px' }}>
        靠 AI 很快就能做出能打开的页面——有人以为纯 HTML 就是前端，localStorage 就当有了数据库；但真正的数据库、接口、鉴权、Agent 与复杂业务逻辑，对看不懂的人仍是黑盒。
      </p>

      <div className="vibe-flow">
        <div className="vibe-node">
          <div className="vibe-node-tag">已经发生</div>
          <div className="vibe-node-title">AI 写「前端」</div>
          <div className="vibe-illus vibe-illus-ui" aria-hidden="true">
            <div className="vibe-bubble">
              <span /><span /><span />
            </div>
            <div className="vibe-flow-mini">→</div>
            <div className="vibe-eye">
              <i />
            </div>
            <div className="vibe-flow-mini">→</div>
            <div className="vibe-page">
              <div className="vibe-page-bar"><b /><b /><b /></div>
              <div className="vibe-page-hero" />
              <div className="vibe-page-rows"><i /><i /><i /></div>
            </div>
          </div>
          <div className="vibe-node-meta">Cursor · Codex · 自然语言出页面</div>
          <div className="vibe-node-status ok">纯 HTML 也常当「前端做完了」</div>
        </div>

        <div className="vibe-arrow" aria-hidden="true">
          <span className="vibe-arrow-line" />
          <span className="vibe-arrow-break">黑盒</span>
          <span className="vibe-arrow-line" />
        </div>

        <div className="vibe-node muted-node">
          <div className="vibe-node-tag warn">看不懂</div>
          <div className="vibe-node-title">后端</div>
          <div className="vibe-illus vibe-illus-code" aria-hidden="true">
            <div className="vibe-code">
              <div><span className="kw">function</span> auth<span className="fn">()</span> {'{'} … {'}'}</div>
              <div><span className="kw">function</span> query<span className="fn">()</span> {'{'} … {'}'}</div>
              <div><span className="kw">function</span> agent<span className="fn">()</span> {'{'} … {'}'}</div>
              <div><span className="kw">function</span> logic<span className="fn">()</span> {'{'} … {'}'}</div>
            </div>
          </div>
          <div className="vibe-node-meta">数据库 · 接口 · 鉴权 · Agent · 复杂业务逻辑</div>
          <div className="vibe-node-status bad">对非技术是黑盒</div>
        </div>
      </div>
    </section>
  );
}

export function Slide_s04() {
  return (
<section className="slide" id="s04" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">痛点</span><span>后端黑盒会带来什么</span></div>
    </div>
    <h2 style={{ fontSize: '32px', marginBottom: '10px', lineHeight: 1.25 }}>
      被 Vibe Coding <span className="accent">后端黑盒</span> 绊住的用户，往往会遇到……
    </h2>
    <p className="muted" style={{ fontSize: '16px', marginBottom: '28px' }}>
      看不见、看不懂的后端，并不是「多写几行就能解决」——迭代、记忆和成本都会一起失控。
    </p>

    <div className="vibe-pain-grid">
      <div className="vibe-pain-card">
        <div className="vibe-pain-num">01</div>
        <h3>迭代时不敢改</h3>
        <p>想加一个小需求，却担心动到看不见的 <code>function</code>，把原来能跑的逻辑改崩。</p>
        <div className="vibe-pain-foot">越改越小心，产品迭代被拖慢</div>
      </div>
      <div className="vibe-pain-card">
        <div className="vibe-pain-num">02</div>
        <h3>自己忘了写过什么</h3>
        <p>堆了一堆接口、鉴权、Agent 与业务逻辑，过几天已经记不清每个 function 在干什么。</p>
        <div className="vibe-pain-foot">维护靠猜，排查靠运气</div>
      </div>
      <div className="vibe-pain-card">
        <div className="vibe-pain-num">03</div>
        <h3>后端开发 Token 狂烧</h3>
        <p>在黑盒里反复让 AI 猜配置、猜联调、猜报错，大量 Token 耗在「看不见的后端」上。</p>
        <div className="vibe-pain-foot">前端省下来的，后端又烧回去</div>
      </div>
    </div>
  </section>
  );
}

export function Slide_s01_intro() {
  return (
<section className="slide" id="s01_intro" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">转折</span><span>Zion Plugin 登场</span></div>
    </div>

    <div className="intro-hero">
      <div className="intro-brand">Zion Plugin</div>
      <h2 className="intro-title">
        上述棘手的问题，现在都可以<span className="accent">迎刃而解</span>
      </h2>
      <p className="intro-sub">
        把 Zion 可视化后端，直接塞进 Cursor 等 AI 编程助手。
      </p>

      <div className="intro-flow" aria-hidden="true">
        <div className="intro-step">
          <div className="intro-step-label">你的 AI IDE</div>
          <div className="intro-step-title">Cursor · Codex</div>
        </div>
        <div className="intro-plus">+</div>
        <div className="intro-step accent-step">
          <div className="intro-step-label">开发套件</div>
          <div className="intro-step-title">Zion Plugin</div>
        </div>
        <div className="intro-plus">→</div>
        <div className="intro-step result-step">
          <div className="intro-step-label">结果</div>
          <div className="intro-step-title">后端看得见 · 真接口联调</div>
        </div>
      </div>
    </div>
  </section>
  );
}

export function Slide_s01_agenda() {
  return (
<section className="slide" id="s01_agenda" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">目录</span><span>分享大纲</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"10px"}}>分享大纲</h2>
    <p className="muted" style={{"fontSize":"16px","marginBottom":"20px"}}>本指南将通过以下 3 个部分，带你彻底掌握 Zion Plugin 与 AI Coding Agent 结对开发的全自动极速流程：</p>
    
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"20px 32px","flex":"1","alignContent":"center"}}>
      <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
        <div className="num" style={{"fontSize":"32px","color":"var(--accent)","fontWeight":"800","lineHeight":"1"}}>01</div>
        <div>
          <div style={{"fontSize":"18px","fontWeight":"bold","color":"var(--ink)","marginBottom":"4px"}}>先看例子与核心优势</div>
          <div style={{"fontSize":"13px","color":"var(--muted)","lineHeight":"1.4"}}>来看看使用 Zion Plugin 交付的真实全栈案例，以及其可视化配置后端的独特优势。</div>
        </div>
      </div>
      <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
        <div className="num" style={{"fontSize":"32px","color":"var(--accent)","fontWeight":"800","lineHeight":"1"}}>02</div>
        <div>
          <div style={{"fontSize":"18px","fontWeight":"bold","color":"var(--ink)","marginBottom":"4px"}}>安装套件与准备工作</div>
          <div style={{"fontSize":"13px","color":"var(--muted)","lineHeight":"1.4"}}>AI 辅助工具（Cursor、Codex、Workbuddy）的一键 Plugin 镜像集成与授权。</div>
        </div>
      </div>
      <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
        <div className="num" style={{"fontSize":"32px","color":"var(--accent)","fontWeight":"800","lineHeight":"1"}}>03</div>
        <div>
          <div style={{"fontSize":"18px","fontWeight":"bold","color":"var(--ink)","marginBottom":"4px"}}>AI 结对全自动全栈搭建</div>
          <div style={{"fontSize":"13px","color":"var(--muted)","lineHeight":"1.4"}}>空白文件夹启动，首发指令驱动 AI 全自动在云端配置后端并完成前端代码联调。</div>
        </div>
      </div>
    </div>
  </section>
  );
}

export function Slide_s02() {
  return (
<section className="slide divider-slide no-pad" id="s02" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="divider-num"><div className="big">01</div></div>
    <div className="divider-body">
      <div className="divider-en">第一部分</div>
      <div className="divider-zh"><strong>先看例子</strong></div>
      <div className="divider-tagline">来看看使用 Zion Plugin 交付的真实商用小程序与 Web 全栈案例</div>
    </div>
  </section>
  );
}

export function Slide_s10_2() {
  return (
<section className="slide" id="s10_2" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">1.1</span><span>案例展示（1/3）</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion Plugin</span> 案例展示</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.3fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"center","width":"100%"}}>
      {/*  Left Info  */}
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"space-between","alignItems":"flex-start","height":"320px"}}>
        <div style={{"display":"flex","flexDirection":"column","alignItems":"flex-start"}}>
          <span className="tag solid" style={{"background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>Web 站点</span>
          <h3 style={{"fontSize":"36px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"20px","lineHeight":"1.2"}}>howtone.cn 内容营销工具</h3>
          <p style={{"fontSize":"16px","color":"rgba(0,0,0,0.75)","lineHeight":"1.7","margin":"0"}}>一款基于 AI Agent、采用 Cursor + Zion Plugin 开发套件结对开发的智能内容营销平台。展现了 AI 辅助开发在 Web 端与 Zion 关系型数据库、云端 AI 智能体一键全自动连通联调的真实成果。</p>
        </div>
        {/*  QR Code in Bottom Left  */}
        <div style={{"display":"flex","flexDirection":"column","alignItems":"center","marginTop":"16px"}}>
          <img src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/AFs6zX-b2FLG8nq5YtMnCA%3D%3D.png" style={{"width":"120px","height":"120px","objectFit":"contain","borderRadius":"8px","boxShadow":"0 4px 16px rgba(0,0,0,0.06)","background":"var(--white)","border":"1px solid rgba(0,0,0,0.04)","marginBottom":"8px"}} />
          <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--accent-deep)","textAlign":"center","width":"120px","lineHeight":"1.4"}}>扫码体验网站</div>
        </div>
      </div>
      {/*  Right Visual  */}
      <div style={{"display":"flex","justifyContent":"flex-end","width":"100%"}}>
        <img src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/ulvROZHQKNjS4SAgw1ClyA%3D%3D.png" style={{"width":"540px","height":"360px","objectFit":"cover","borderRadius":"12px","boxShadow":"0 16px 48px rgba(0,0,0,0.12)","background":"var(--white)","border":"1px solid rgba(0,0,0,0.06)"}} />
      </div>
    </div>
  </section>
  );
}

export function Slide_s10_3() {
  return (
<section className="slide" id="s10_3" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">1.2</span><span>案例展示（2/3）</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion Plugin</span> 案例展示</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.3fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"center","width":"100%"}}>
      {/*  Left Info  */}
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"space-between","alignItems":"flex-start","height":"320px"}}>
        <div style={{"display":"flex","flexDirection":"column","alignItems":"flex-start"}}>
          <span className="tag solid" style={{"alignSelf":"flex-start","background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>AI 智能小程序 & H5</span>
          <h3 style={{"fontSize":"36px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"20px","lineHeight":"1.2"}}>「小笼AI」· 万物皆可造</h3>
          <p style={{"fontSize":"16px","color":"rgba(0,0,0,0.75)","lineHeight":"1.7","margin":"0"}}>基于 Zion 全托管后端构建的多模态智能体小程序与 H5。前端采用微信原生框架，后端业务与 AI 模型对话、数据沉淀和流式打字效果完全依托 Zion 一站式配置实现。</p>
        </div>
        {/*  QR Code in Bottom Left  */}
        <div style={{"display":"flex","flexDirection":"column","alignItems":"center","marginTop":"16px"}}>
          <img src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/yc51Sn_UoKVT7i72ogp-Fw%3D%3D.png" style={{"width":"120px","height":"120px","objectFit":"contain","borderRadius":"8px","boxShadow":"0 4px 16px rgba(0,0,0,0.06)","background":"var(--white)","border":"1px solid rgba(0,0,0,0.04)","marginBottom":"8px"}} />
          <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--accent-deep)","textAlign":"center","width":"120px","lineHeight":"1.4"}}>扫码体验小程序</div>
        </div>
      </div>
      {/*  Right Visual  */}
      <div style={{"display":"flex","justifyContent":"flex-end","width":"100%"}}>
        <img src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/_0V-xut0OsrfWPSXYc5c6A%3D%3D.jpeg" style={{"width":"540px","height":"360px","objectFit":"cover","borderRadius":"12px","boxShadow":"0 16px 48px rgba(0,0,0,0.12)","background":"var(--white)","border":"1px solid rgba(0,0,0,0.06)"}} />
      </div>
    </div>
  </section>
  );
}

export function Slide_s10_4() {
  return (
<section className="slide" id="s10_4" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">1.3</span><span>案例展示（3/3）</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion Plugin</span> 案例展示</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.3fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"center","width":"100%"}}>
      {/*  Left Info  */}
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"space-between","alignItems":"flex-start","height":"320px"}}>
        <div style={{"display":"flex","flexDirection":"column","alignItems":"flex-start"}}>
          <span className="tag solid" style={{"background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>微信小程序</span>
          <h3 style={{"fontSize":"36px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"20px","lineHeight":"1.2"}}>「HAIFOSS」肤质测评小程序</h3>
          <p style={{"fontSize":"16px","color":"rgba(0,0,0,0.75)","lineHeight":"1.7","margin":"0"}}>基于 Zion 全托管后端实现的肤质测评微信小程序。将多维交互测试、用户测评数据沉淀与个性化推荐逻辑交由 Zion Plugin 自动化托管运行。</p>
        </div>
        {/*  QR Code in Bottom Left  */}
        <div style={{"display":"flex","flexDirection":"column","alignItems":"center","marginTop":"16px"}}>
          <img src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/7E2ypeQ1rIeyzMWxfmgPhg%3D%3D.png" style={{"width":"120px","height":"120px","objectFit":"contain","borderRadius":"8px","boxShadow":"0 4px 16px rgba(0,0,0,0.06)","background":"var(--white)","border":"1px solid rgba(0,0,0,0.04)","marginBottom":"8px"}} />
          <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--accent-deep)","textAlign":"center","width":"120px","lineHeight":"1.4"}}>扫码体验小程序</div>
        </div>
      </div>
      {/*  Right Visual  */}
      <div style={{"display":"flex","justifyContent":"flex-end","width":"100%"}}>
        <img src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/LeJt3hD3RW36gonQ3BSJ4g%3D%3D.png" style={{"width":"540px","height":"360px","objectFit":"cover","borderRadius":"12px","boxShadow":"0 16px 48px rgba(0,0,0,0.12)","background":"var(--white)","border":"1px solid rgba(0,0,0,0.06)"}} />
      </div>
    </div>
  </section>
  );
}

export function Slide_s11() {
  return (
<section className="slide" id="s11" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">1.3</span><span>核心能力</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"6px"}}>Zion Plugin (开发套件) <span className="accent">的核心优势</span></h2>
    <p className="muted" style={{"fontSize":"15px","marginBottom":"8px"}}>在编辑器中用自然语言直接驱动 Zion 自动配置可视化云端后端，实现真数据前后端全自动联调：</p>
    
    <svg viewBox="0 0 1000 340" className="architecture-map" style={{"width":"100%","height":"auto","flex":"1"}}>
      {/*  Gradients & Filters  */}
      <defs>
        <linearGradient id="grad-blue-lav" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1598FF" />
          <stop offset="100%" stopColor="#5C4DF4" />
        </linearGradient>
        <linearGradient id="grad-neon-pink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF799C" />
          <stop offset="100%" stopColor="#D63C68" />
        </linearGradient>
        <linearGradient id="grad-dark-panel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#161b22" />
          <stop offset="100%" stopColor="#0d1117" />
        </linearGradient>
        <linearGradient id="grad-light-panel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fafafa" />
        </linearGradient>
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="rgba(0,0,0,0.06)" />
        </filter>
      </defs>
      
      {/*  ================= Left Side: IDE / Terminal Theme =================  */}
      <g filter="url(#soft-shadow)">
        <rect x="10" y="25" width="310" height="260" rx="12" fill="url(#grad-dark-panel)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        {/*  IDE Header / Title Bar  */}
        <path d="M 10 37 A 12 12 0 0 1 22 25 L 308 25 A 12 12 0 0 1 320 37 L 320 62 L 10 62 Z" fill="#0d1117" />
        {/*  Window Controls (Mac Style)  */}
        <circle cx="28" cy="43" r="5" fill="#ff5f56" />
        <circle cx="42" cy="43" r="5" fill="#ffbd2e" />
        <circle cx="56" cy="43" r="5" fill="#27c93f" />
        {/*  Tab Label  */}
        <rect x="75" y="33" width="130" height="22" rx="4" fill="#161b22" />
        <text x="140" y="48" fill="#c9d1d9" fontSize="10.5" fontFamily="var(--font-mono)" textAnchor="middle">diet_assistant.prompt</text>
        
        {/*  IDE Prompt Lines / Chat Bubble  */}
        <rect x="22" y="75" width="286" height="150" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {/*  Console Text  */}
        <text x="34" y="96" fill="#8b949e" fontSize="11" fontFamily="var(--font-mono)">$ zion install plugin --all</text>
        <text x="34" y="116" fill="#58a6ff" fontSize="11.5" fontFamily="var(--font-mono)" fontWeight="bold">&gt; Natural Language Prompt:</text>
        
        {/*  User Prompts  */}
        <text x="40" y="138" fill="#aff5b4" fontSize="11" fontWeight="bold">“开发饮食助手，前端用 React”</text>
        <text x="40" y="158" fill="#aff5b4" fontSize="11" fontWeight="bold">“自动建数据库表、配置 AI Agent”</text>
        <text x="40" y="178" fill="#aff5b4" fontSize="11" fontWeight="bold">“配置下单行为流，并一键联调”</text>
        
        {/*  Execution Output  */}
        <rect x="34" y="193" width="262" height="24" rx="4" fill="rgba(46,164,79,0.1)" stroke="rgba(46,164,79,0.2)" strokeWidth="1" />
        <circle cx="45" cy="205" r="3.5" fill="#2ea44f" />
        <text x="56" y="209" fill="#3fb950" fontSize="11" fontFamily="var(--font-mono)" fontWeight="bold">Zion Plugin: Auto Backend Sync [OK]</text>
        
        {/*  Footer Info  */}
        <text x="165" y="248" fill="#8b949e" fontSize="11" fontWeight="bold" textAnchor="middle">工具：Cursor / Codex / Workbuddy</text>
      </g>

      {/*  ================= Middle Connection: Glowing Pipeline =================  */}
      <path d="M 320 155 L 435 155" stroke="url(#grad-blue-lav)" strokeWidth="3" strokeDasharray="6,4" />
      <circle cx="377" cy="155" r="4" fill="#5C4DF4" filter="url(#neon-glow)" />
      {/*  Pipeline Label  */}
      <g filter="url(#soft-shadow)">
        <rect x="332" y="112" width="90" height="26" rx="13" fill="#5C4DF4" />
        <text x="377" y="128" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Zion Plugin</text>
      </g>
      <text x="377" y="180" fill="#5C4DF4" fontSize="10.5" fontWeight="bold" textAnchor="middle">MCP 实时双向驱动</text>
      <path d="M 435 155 L 426 149 M 435 155 L 426 161" stroke="#5C4DF4" strokeWidth="2.5" strokeLinecap="round" />

      {/*  ================= Right Side: Zion Cloud Console (Futuristic Dashboard) =================  */}
      <g filter="url(#soft-shadow)">
        <rect x="435" y="10" width="555" height="290" rx="12" fill="url(#grad-soft)" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" />
        {/*  Dashboard Top Header Bar  */}
        <path d="M 435 22 A 12 12 0 0 1 447 10 L 978 10 A 12 12 0 0 1 990 22 L 990 52 L 435 52 Z" fill="#0C2A6D" />
        <text x="712" y="35" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">Zion Cloud Console (云端全托管后端)</text>
        {/*  Connected Status Tag  */}
        <rect x="918" y="24" width="56" height="18" rx="9" fill="rgba(39,201,63,0.12)" />
        <circle cx="928" cy="33" r="2.5" fill="#27c93f" />
        <text x="936" y="36.5" fill="#27c93f" fontSize="10.5" fontWeight="bold">已连接</text>

        {/*  Container Grid  */}
        {/*  DB Card  */}
        <g>
          <rect x="455" y="68" width="162" height="212" rx="10" fill="#ffffff" stroke="rgba(21,152,255,0.12)" strokeWidth="1.5" />
          <rect x="455" y="68" width="162" height="34" rx="10" fill="rgba(21,152,255,0.04)" />
          <path d="M 455 78 A 10 10 0 0 1 465 68 L 607 68 A 10 10 0 0 1 617 78 L 617 102 L 455 102 Z" fill="rgba(21,152,255,0.04)" />
          <ellipse cx="476" cy="85" rx="5" ry="2" fill="none" stroke="#1598FF" strokeWidth="1.5" />
          <path d="M 471 85 L 471 93 A 5 2 0 0 0 481 93 L 481 85" fill="none" stroke="#1598FF" strokeWidth="1.5" />
          <text x="548" y="89" fill="#1598FF" fontSize="12.5" fontWeight="bold" textAnchor="middle">可视化数据库</text>
          
          {/*  DB Schema Micro-Visuals  */}
          <rect x="465" y="108" width="62" height="52" rx="4" fill="#fafafa" stroke="#1598FF" strokeWidth="0.8" />
          <rect x="465" y="108" width="62" height="14" fill="rgba(21,152,255,0.1)" />
          <text x="496" y="118" fill="#0C2A6D" fontSize="8.5" textAnchor="middle" fontWeight="bold">用户表 (User)</text>
          <text x="470" y="133" fill="#555" fontSize="8" fontFamily="var(--font-mono)">id (PK)</text>
          <text x="470" y="146" fill="#777" fontSize="8">姓名 (name)</text>

          <rect x="543" y="138" width="64" height="64" rx="4" fill="#fafafa" stroke="#1598FF" strokeWidth="0.8" />
          <rect x="543" y="138" width="64" height="14" fill="rgba(21,152,255,0.1)" />
          <text x="575" y="148" fill="#0C2A6D" fontSize="8.5" textAnchor="middle" fontWeight="bold">餐食表 (Post)</text>
          <text x="548" y="163" fill="#999" fontSize="8" fontFamily="var(--font-mono)">user_id (FK)</text>
          <text x="548" y="176" fill="#777" fontSize="8">卡路里</text>
          <text x="548" y="189" fill="#777" fontSize="8">图片地址</text>

          {/*  Relation bezier link  */}
          <path d="M 548 162 C 532 162, 538 132, 527 132" fill="none" stroke="#5C4DF4" strokeWidth="1.2" strokeDasharray="2,1.5" />
          <circle cx="538" cy="147" r="1.8" fill="#5C4DF4" />

          <text x="536" y="222" fill="#333" fontSize="11.5" fontWeight="bold" textAnchor="middle">表关系可视化连线</text>
          <text x="536" y="240" fill="#777" fontSize="10.5" textAnchor="middle">PostgreSQL 自动物理映射</text>
          
          <rect x="475" y="252" width="122" height="18" rx="4" fill="rgba(21,152,255,0.06)" />
          <text x="536" y="265" fill="#1598FF" fontSize="10.5" fontWeight="bold" textAnchor="middle">数据表自动同步</text>
        </g>

        {/*  Flow Card  */}
        <g>
          <rect x="632" y="68" width="162" height="212" rx="10" fill="#ffffff" stroke="rgba(92,77,244,0.12)" strokeWidth="1.5" />
          <rect x="632" y="68" width="162" height="34" rx="10" fill="rgba(92,77,244,0.04)" />
          <path d="M 632 78 A 10 10 0 0 1 642 68 L 784 68 A 10 10 0 0 1 794 78 L 794 102 L 632 102 Z" fill="rgba(92,77,244,0.04)" />
          <rect x="646" y="79" width="8" height="8" rx="2" fill="none" stroke="#5C4DF4" strokeWidth="1.5" />
          <line x1="654" y1="83" x2="660" y2="83" stroke="#5C4DF4" strokeWidth="1.5" />
          <text x="713" y="89" fill="#5C4DF4" fontSize="12.5" fontWeight="bold" textAnchor="middle">可视化行为流</text>
          
          {/*  Flowchart node visual  */}
          <rect x="655" y="110" width="116" height="22" rx="11" fill="#ffffff" stroke="#5C4DF4" strokeWidth="1" />
          <text x="713" y="124" fill="#5C4DF4" fontSize="9.5" fontWeight="bold" textAnchor="middle">● 下单事件 (Event)</text>
          
          <path d="M 713 132 L 713 144" stroke="#5C4DF4" strokeWidth="1.2" strokeDasharray="2,1.5" />
          
          <rect x="655" y="144" width="116" height="22" rx="11" fill="#ffffff" stroke="#1598FF" strokeWidth="1" />
          <text x="713" y="158" fill="#1598FF" fontSize="9.5" fontWeight="bold" textAnchor="middle">↓ 扣减库存 (DB)</text>
          
          <path d="M 713 166 L 713 178" stroke="#FF799C" strokeWidth="1.2" strokeDasharray="2,1.5" />
          
          <rect x="655" y="178" width="116" height="22" rx="11" fill="#ffffff" stroke="#FF799C" strokeWidth="1" />
          <text x="713" y="192" fill="#FF799C" fontSize="9.5" fontWeight="bold" textAnchor="middle">⊛ AI 智能分析 (Agent)</text>

          <text x="713" y="222" fill="#333" fontSize="11.5" fontWeight="bold" textAnchor="middle">积木式流程编排</text>
          <text x="713" y="240" fill="#777" fontSize="10.5" textAnchor="middle">同步回滚/工作流免代码</text>
          
          <rect x="652" y="252" width="122" height="18" rx="4" fill="rgba(92,77,244,0.06)" />
          <text x="713" y="265" fill="#5C4DF4" fontSize="10.5" fontWeight="bold" textAnchor="middle">业务逻辑已连通</text>
        </g>

        {/*  Agent Card  */}
        <g>
          <rect x="809" y="68" width="162" height="212" rx="10" fill="#ffffff" stroke="rgba(255,121,156,0.12)" strokeWidth="1.5" />
          <rect x="809" y="68" width="162" height="34" rx="10" fill="rgba(255,121,156,0.04)" />
          <path d="M 809 78 A 10 10 0 0 1 819 68 L 961 68 A 10 10 0 0 1 971 78 L 971 102 L 809 102 Z" fill="rgba(255,121,156,0.04)" />
          <rect x="822" y="78" width="10" height="8" rx="2.5" fill="none" stroke="#FF799C" strokeWidth="1.5" />
          <circle cx="825" cy="82" r="0.8" fill="#FF799C" />
          <circle cx="829" cy="82" r="0.8" fill="#FF799C" />
          <text x="902" y="89" fill="#FF799C" fontSize="12.5" fontWeight="bold" textAnchor="middle">一站式 AI Agent</text>
          
          {/*  Terminal / Chat micro-UI  */}
          <rect x="819" y="108" width="142" height="94" rx="5" fill="#0d1117" stroke="rgba(255,121,156,0.15)" strokeWidth="0.8" />
          
          {/*  Model Selection List UI (Simulating high-end dropdown)  */}
          <rect x="825" y="116" width="130" height="15" rx="3" fill="#161b22" stroke="rgba(255,121,156,0.3)" strokeWidth="0.6" />
          <text x="831" y="126" fill="#FF799C" fontSize="7.5" fontWeight="bold" fontFamily="var(--font-mono)">选择大模型: DeepSeek V4 ▾</text>
          
          {/*  Mock Dropdown List Items  */}
          <rect x="825" y="133" width="130" height="60" rx="3" fill="#161b22" stroke="rgba(255,121,156,0.4)" strokeWidth="0.8" />
          
          {/*  Item 1: DeepSeek (Checked)  */}
          <rect x="827" y="136" width="126" height="12" rx="2" fill="rgba(255,121,156,0.15)" />
          <text x="832" y="145" fill="#FF799C" fontSize="7" fontWeight="bold" fontFamily="var(--font-mono)">✓ DeepSeek V4 (深度思考)</text>
          
          {/*  Item 2: Gemini  */}
          <text x="832" y="160" fill="#8b949e" fontSize="7" fontWeight="bold" fontFamily="var(--font-mono)">  Gemini 3.5 Flash (流式思考)</text>
          <line x1="829" y1="165" x2="951" y2="165" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          
          {/*  Item 3: GPT  */}
          <text x="832" y="175" fill="#8b949e" fontSize="7" fontWeight="bold" fontFamily="var(--font-mono)">  GPT-5.6 (多模态推理)</text>
          <line x1="829" y1="180" x2="951" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

          {/*  Item 4: 更多模型  */}
          <text x="832" y="190" fill="#8b949e" fontSize="7" fontWeight="bold" fontFamily="var(--font-mono)">  DeepSeek / 通义 / 更多</text>

          <text x="890" y="222" fill="#333" fontSize="11.5" fontWeight="bold" textAnchor="middle">思考流与结构化输出</text>
          <text x="890" y="240" fill="#777" fontSize="10.5" textAnchor="middle">一站秒切 DeepSeek / Gemini</text>
          
          <rect x="829" y="252" width="122" height="18" rx="4" fill="rgba(255,121,156,0.06)" />
          <text x="890" y="265" fill="#FF799C" fontSize="10.5" fontWeight="bold" textAnchor="middle">大模型自由切换</text>
        </g>
      </g>
    </svg>
  </section>
  );
}

export function Slide_s03() {
  return (
<section className="slide" id="s03" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">1.3</span><span>流程总览</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}>用 AI 开发全栈项目，其实只要 3 步</h2>
    <p className="muted" style={{"fontSize":"16px","marginBottom":"28px"}}>你只需负责想好产品创意（Idea），剩下的代码编写和云端后端配置，交由 AI 助手结对高效完成即可：</p>
    
    <div style={{"display":"flex","gap":"40px","flex":"1","alignItems":"stretch","position":"relative","marginTop":"20px"}}>
      {/*  Step 1  */}
      <div style={{"flex":"1","display":"flex","flexDirection":"column","borderTop":"2px solid var(--accent)","paddingTop":"20px","position":"relative"}}>
        <div style={{"fontFamily":"var(--font-num)","fontSize":"72px","fontWeight":"700","color":"var(--accent)","lineHeight":"1","marginBottom":"12px","opacity":"0.95"}}>01</div>
        <div style={{"fontSize":"20px","fontWeight":"bold","color":"var(--ink)","marginBottom":"10px"}}>初始化与授权</div>
        <p style={{"fontSize":"14px","color":"rgba(0,0,0,0.7)","lineHeight":"1.65","margin":"0"}}>新建一个空白文件夹，在 AI 编辑器中添加 Zion Plugin（开发套件）并登录授权以获取账户控制权限。</p>
        <span style={{"position":"absolute","right":"-24px","top":"14px","fontSize":"24px","color":"var(--hairline)","fontWeight":"300"}}>➔</span>
      </div>
      {/*  Step 2  */}
      <div style={{"flex":"1","display":"flex","flexDirection":"column","borderTop":"2px solid var(--accent)","paddingTop":"20px","position":"relative"}}>
        <div style={{"fontFamily":"var(--font-num)","fontSize":"72px","fontWeight":"700","color":"var(--accent)","lineHeight":"1","marginBottom":"12px","opacity":"0.95"}}>02</div>
        <div style={{"fontSize":"20px","fontWeight":"bold","color":"var(--ink)","marginBottom":"10px"}}>描述产品需求</div>
        <p style={{"fontSize":"14px","color":"rgba(0,0,0,0.7)","lineHeight":"1.65","margin":"0"}}>在聊天框用自然语言直接向 AI 描述你的开发需求和期望的 UI 视觉风格，说明前端使用代码开发、BaaS 使用 Zion。</p>
        <span style={{"position":"absolute","right":"-24px","top":"14px","fontSize":"24px","color":"var(--hairline)","fontWeight":"300"}}>➔</span>
      </div>
      {/*  Step 3  */}
      <div style={{"flex":"1","display":"flex","flexDirection":"column","borderTop":"2px solid var(--accent)","paddingTop":"20px"}}>
        <div style={{"fontFamily":"var(--font-num)","fontSize":"72px","fontWeight":"700","color":"var(--accent)","lineHeight":"1","marginBottom":"12px","opacity":"0.95"}}>03</div>
        <div style={{"fontSize":"20px","fontWeight":"bold","color":"var(--ink)","marginBottom":"10px"}}>自动全栈交付</div>
        <p style={{"fontSize":"14px","color":"rgba(0,0,0,0.7)","lineHeight":"1.65","margin":"0"}}>AI 将在云端自动配置好 Zion 关系型数据库、AI 智能体等后端逻辑，并生成对应前端交互代码。授权成功后，点击个人中心即可看到后端项目已被全自动配置完毕！</p>
      </div>
    </div>
  </section>
  );
}

export function Slide_s03_alt() {
  return (
    <section className="slide" id="s03_alt" data-accent="core">
      <div className="signature">✦ @functorz.com</div>
      <div className="slide-head" style={{ marginBottom: '16px' }}>
        <div className="kicker">
          <span className="pill accent">另一条路</span>
          <span>Zion AI Copilot</span>
        </div>
      </div>
      <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '10px', lineHeight: 1.3 }}>
        不想让 Coding Agent 配后端？<span className="accent">也可以</span>
      </h2>
      <p className="muted" style={{ fontSize: '17px', marginBottom: '40px', maxWidth: '920px' }}>
        直接用 Zion AI Copilot 在可视化控制台里完成后端配置，再用 Vibe Coding 专心写前端。
      </p>

      <div className="copilot-paths">
        <div className="copilot-path">
          <div className="copilot-path-label">路径 A · 全交给 Agent</div>
          <div className="copilot-path-flow">
            <span>Coding Agent</span>
            <i>+</i>
            <span>Zion Plugin</span>
            <i>→</i>
            <span>后端 + 前端一起出</span>
          </div>
        </div>
        <div className="copilot-path featured">
          <div className="copilot-path-label">路径 B · 前后端分工</div>
          <div className="copilot-path-flow">
            <span className="hi">Zion AI Copilot</span>
            <i>→</i>
            <span>可视化后端配好</span>
            <i>→</i>
            <span className="hi">Vibe Coding 写前端</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Slide_s03_compat() {
  return (
<section className="slide" id="s03_compat" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">生态</span><span>兼容主流智能体</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"10px"}}>兼容主流 <span className="accent">Coding Agent</span></h2>
    <p className="muted" style={{"fontSize":"16px","marginBottom":"24px"}}>支持在以下主流 AI 编辑器/编程助手里直接添加 Zion Plugin 插件，开展高度精准、无缝的前后端全托管 Vibe Coding：</p>
    
    <div style={{"display":"grid","gridTemplateColumns":"repeat(5,1fr)","gap":"16px","flex":"1","alignContent":"center"}}>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","border":"1px solid rgba(21,152,255,0.15)"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Cursor</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Codex</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"20px","fontWeight":"bold","color":"var(--ink)"}}>Workbuddy</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Kimi Code</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Qoder</div>
      </div>
      {/*  Row 2  */}
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Opencode</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Zcode</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Codebuddy</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","background":"var(--white)","border":"1px dashed var(--hairline)"}}>
        <div style={{"fontSize":"20px","fontWeight":"500","color":"var(--muted)"}}>More...</div>
      </div>
    </div>
  </section>
  );
}

export function Slide_s05() {
  return (
<section className="slide" id="s05" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">1.2</span><span>AI 智能体方案</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion 能给你的</span>：一站式 AI 智能体托管</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.15fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"stretch","marginTop":"20px","width":"100%"}}>
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"flex-start"}}>
        <span className="tag solid" style={{"background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>拒绝到处找 Key</span>
        <h3 style={{"fontSize":"28px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"14px","lineHeight":"1.2"}}>免去自备与配置 API Key</h3>
        <p style={{"fontSize":"14.5px","color":"rgba(0,0,0,0.75)","lineHeight":"1.65","margin":"0"}}>对接 Gemini、GPT、DeepSeek 等模型时，往往要到处注册账号、配置 API Key；演示现场还可能因额度或网络当场翻车。<br /><br />Zion Plugin 在云端一站式接入主流模型，下拉即可切换，不用自己到处找 Key、配 SDK。</p>
      </div>
      <div className="card tinted" style={{"padding":"28px 26px","borderRadius":"12px","display":"flex","flexDirection":"column","justifyContent":"center","borderLeft":"5px solid var(--accent)","borderTop":"0","borderBottom":"0","borderRight":"0","gap":"16px"}}>
        <div style={{"fontWeight":"bold","fontSize":"18px","color":"var(--accent-deep)"}}>云端模型 · 一键切换</div>
        <div style={{"display":"flex","flexWrap":"wrap","gap":"10px"}}>
          {['Gemini', 'GPT', 'DeepSeek', '通义千问', '更多…'].map((m) => (
            <span key={m} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent-deep)',
              background: 'rgba(92,77,244,.08)',
              border: '1px solid rgba(92,77,244,.16)',
              padding: '8px 12px',
              borderRadius: '4px',
            }}>{m}</span>
          ))}
        </div>
        <div style={{"fontSize":"13.5px","color":"var(--muted)","lineHeight":"1.6","borderTop":"1px dashed rgba(0,0,0,0.1)","paddingTop":"14px"}}>
          Agent 配置页直接选模型 · 无需自备 Key · 真接口联调可用
        </div>
      </div>
    </div>
  </section>
  );
}

export function Slide_s05_2() {
  return (
<section className="slide" id="s05_2" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">1.3</span><span>免运维部署</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion 能给你的</span>：免服务器运维与部署</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.15fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"center","width":"100%"}}>
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"flex-start"}}>
        <span className="tag solid" style={{"background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>全托管 Serverless</span>
        <h3 style={{"fontSize":"28px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"14px","lineHeight":"1.2"}}>真正的零运维托管</h3>
        <p style={{"fontSize":"14.5px","color":"rgba(0,0,0,0.75)","lineHeight":"1.65","margin":"0"}}>不用自己装 Docker、租服务器、搭数据库。后端在云端全托管跑起来，接口直接可用，精力留给产品本身。</p>
      </div>
      <div style={{"display":"flex","flexDirection":"column","gap":"14px","justifyContent":"center"}}>
        {[
          ['不用自己运维', '服务器 · 数据库 · 存储 · CDN'],
          ['接口自动就绪', '配置完即可联调，前后端打通'],
          ['专注做产品', '少折腾部署，多打磨体验'],
        ].map(([title, desc]) => (
          <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--accent-deep)' }}>{title}</div>
            <div style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.5 }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export function Slide_s12() {
  return (
<section className="slide divider-slide no-pad" id="s12" data-accent="hack">
    <div className="signature">✦ @functorz.com</div>
    <div className="divider-num"><div className="big">02</div></div>
    <div className="divider-body">
      <div className="divider-en">第二部分</div>
      <div className="divider-zh"><strong>准备工作</strong>与<br />安装 Zion Plugin</div>
      <div className="divider-tagline">零终端配置，一揽子开发套件集成，秒级开启 AI 结对编程</div>
    </div>
  </section>
  );
}

export function Slide_s13() {
  return (
<section className="slide" id="s13" data-accent="hack">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">2.1</span><span>准备工作</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"10px"}}>极速开始的 <span className="accent">3 项准备</span></h2>
    <div style={{"flex":"1","display":"flex","flexDirection":"column","justifyContent":"center","marginTop":"20px","maxWidth":"1120px"}}>
      <ul style={{"listStyle":"none","padding":"0","display":"grid","gap":"24px","fontSize":"22px","lineHeight":"1.7","color":"rgba(0,0,0,0.85)"}}>
        <li style={{"display":"flex","alignItems":"center","gap":"16px"}}>
          <span style={{"background":"var(--accent)","color":"var(--white)","width":"36px","height":"36px","borderRadius":"50%","display":"inline-flex","alignItems":"center","justifyContent":"center","fontWeight":"800","fontSize":"16px","flexShrink":"0"}}>1</span> 
          <span>注册 <strong>Zion 账户</strong>（<a href="https://zion.functorz.com" target="_blank" style={{"color":"var(--accent-deep)","textDecoration":"underline"}}>zion.functorz.com</a>，可随时点击左上 Logo 退出新手引导）</span>
        </li>
        <li style={{"display":"flex","alignItems":"center","gap":"16px"}}>
          <span style={{"background":"var(--accent)","color":"var(--white)","width":"36px","height":"36px","borderRadius":"50%","display":"inline-flex","alignItems":"center","justifyContent":"center","fontWeight":"800","fontSize":"16px","flexShrink":"0"}}>2</span> 
          <span>复制并安装 <strong>Zion Plugin</strong>（可通过下列镜像/地址）：</span>
        </li>
        <li style={{"display":"flex","alignItems":"flex-start","gap":"8px","paddingLeft":"52px","fontSize":"18px","color":"var(--muted)"}}>
          <span>• 国内镜像：<code style={{"background":"rgba(0,0,0,0.05)","padding":"4px 10px","borderRadius":"4px","fontFamily":"var(--font-mono)"}}>https://gitee.com/functorz/zion-nocode-plugin</code></span>
        </li>
        <li style={{"display":"flex","alignItems":"flex-start","gap":"8px","paddingLeft":"52px","fontSize":"18px","color":"var(--muted)"}}>
          <span>• 全球地址：<code style={{"background":"rgba(0,0,0,0.05)","padding":"4px 10px","borderRadius":"4px","fontFamily":"var(--font-mono)"}}>https://github.com/functorz-tech/zion-nocode-plugin</code></span>
        </li>
        <li style={{"display":"flex","alignItems":"center","gap":"16px"}}>
          <span style={{"background":"var(--accent)","color":"var(--white)","width":"36px","height":"36px","borderRadius":"50%","display":"inline-flex","alignItems":"center","justifyContent":"center","fontWeight":"800","fontSize":"16px","flexShrink":"0"}}>3</span> 
          <span><strong>开始你的软件开发！</strong>（支持 Cursor、Codex、Workbuddy 等主流工具）</span>
        </li>
      </ul>
    </div>
  </section>
  );
}

export function Slide_s16() {
  return (
<section className="slide" id="s16" data-accent="hack">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">2.2</span><span>安装插件</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"10px"}}>Zion Plugin (开发套件) <span className="accent">安装与更新</span></h2>
    <div style={{"flex":"1","display":"flex","flexDirection":"column","justifyContent":"center","marginTop":"20px","maxWidth":"1120px"}}>
      <p style={{"fontSize":"18px","fontWeight":"bold","color":"var(--black)","marginBottom":"12px"}}>
        在常用 AI 编程编辑器中极速安装与更新：
      </p>
      <div style={{"display":"grid","gap":"20px","fontSize":"18px","color":"rgba(0,0,0,0.85)","lineHeight":"1.7"}}>
        <div style={{"background":"rgba(21,152,255,0.04)","borderLeft":"4px solid var(--accent)","padding":"16px 24px","borderRadius":"0 8px 8px 0"}}>
          <svg style={{display:"inline",verticalAlign:"middle",marginRight:"4px"}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24"/></svg> <strong>1. 有 Plugin / 插件市场的工具（如 Cursor, Workbuddy）：</strong><br />
          直接在插件市场中搜索 <strong>「Zion Plugin」</strong> 一键添加，或直接复制粘贴 Plugin 镜像/Git 仓库地址进行快捷安装。
        </div>
        <div style={{"background":"rgba(92,77,244,0.04)","borderLeft":"4px solid var(--m-lav)","padding":"16px 24px","borderRadius":"0 8px 8px 0"}}>
          <svg style={{display:"inline",verticalAlign:"middle",marginRight:"4px"}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> <strong>2. 纯对话式 / 命令行工具（如 Codex, Kimi）：</strong><br />
          无需打开任何面板，直接在对话框中发送自然语言命令进行安装：<br />
          <code style={{"fontFamily":"var(--font-mono)","fontSize":"14px","background":"rgba(0,0,0,0.06)","padding":"4px 8px","borderRadius":"4px","display":"inline-block","marginTop":"6px","color":"var(--black)","fontWeight":"bold"}}>“安装 Zion Plugin，Git 地址是 https://github.com/functorz-tech/zion-nocode-plugin”</code>
        </div>
      </div>
    </div>
  </section>
  );
}

export function Slide_s20() {
  return (
<section className="slide divider-slide no-pad" id="s20" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="divider-num"><div className="big">03</div></div>
    <div className="divider-body">
      <div className="divider-en">第三部分</div>
      <div className="divider-zh">让 <span className="accent">AI 编写</span> 前端代码<br />与接口调用</div>
      <div className="divider-tagline">首发 Prompt 极简启动，三类典型场景极速迭代</div>
    </div>
  </section>
  );
}

export function Slide_s21() {
  return (
<section className="slide" id="s21" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">3.1</span><span>首发指令</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"12px"}}>首发 <span className="accent">全栈启动指令</span>（Prompt 模板）</h2>
    <div style={{"marginTop":"10px","display":"flex","flexDirection":"column","gap":"18px","flex":"1","justifyContent":"center"}}>
      <p style={{"fontSize":"19px","color":"rgba(0,0,0,0.85)","lineHeight":"1.5","margin":"0"}}>
        新建空白文件夹并登录 Zion Plugin 授权后，直接向 AI 聊天框发送以下这段<b>全量全栈启动</b>指令：
      </p>
      <pre className="code" style={{"fontSize":"16px","lineHeight":"1.6","margin":"0","padding":"24px 28px","whiteSpace":"pre-wrap","wordBreak":"break-all"}}>通过 Zion Plugin，开发一个 AI饮食助手网站，前端使用 React 框架，通过 Vite 构建前端项目，BaaS 使用 Zion，所有接口真实可用，设计风格选择 wabi-sabi 风格，在 Zion 平台创建一个新项目。
我的需求是：用户需要通过用户名和密码注册登录后进入网站内，支持用户上传餐食图片并调用 AI Agent 分析餐食卡路里并输出结果，用户可以保存结果至历史记录内，并支持修改、删除历史记录。

开发策略：
1. 请先在 Zion 平台自动创建新项目，通过 Zion Plugin 全自动配置好底层的数据库表结构、外键关联、AI Agent 智能体等全部后端资源。
2. 待后端配置任务完全结清、接口全部真实打通后，再全自动编写、生成前端 React 页面并进行无缝联调。</pre>
      <div style={{"fontSize":"17px","color":"var(--accent-deep)","fontWeight":"bold","display":"flex","alignItems":"center","gap":"10px","background":"rgba(21,152,255,0.05)","borderLeft":"4px solid var(--accent)","padding":"12px 18px","borderRadius":"0 6px 6px 0","lineHeight":"1.5"}}>
        <span><svg style={{display:"inline",verticalAlign:"middle",marginRight:"4px"}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg> 避坑提示：</span> 从实际运行来看，AI 编程助手容易在该步骤中偷懒（瞎编假数据模拟接口）。所以必须强制命令它分步开发：先走完 Zion 所有的后端自动化配置，再开发前端 UI 联调！
      </div>
    </div>
  </section>
  );
}

export function Slide_s22() {
  return (
<section className="slide" id="s22" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">3.2</span><span>典型场景</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"12px"}}>三类 <span className="accent">典型开发场景</span> 极速指令</h2>
    
    <ScenarioCards />
  </section>
  );
}

export function Slide_s22_more() {
  const lanes = [
    [
      '接入支付宝支付',
      '接入微信支付',
      '写支付回调',
      '配置 Webhook',
      '短信 / 邮件通知',
    ],
    [
      '数据库触发器',
      '定时任务 Cron',
      '查看服务端 Logs',
      '自助定位 Debug',
      '飞书 / 钉钉推送',
    ],
    [
      'RBAC 角色权限',
      'ABAC 精细权限',
      '接口访问控制',
      '行级数据权限',
      'OSS 文件上传',
    ],
  ];

  return (
    <section className="slide" id="s22_more" data-accent="spark">
      <div className="signature">✦ @functorz.com</div>
      <div className="slide-head" style={{ marginBottom: '12px' }}>
        <div className="kicker">
          <span className="pill accent">不止于此</span>
          <span>更多能力</span>
        </div>
      </div>
      <h2 style={{ fontSize: '34px', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>
        远不止这三类场景 —— <span className="accent">这些也能交给 AI</span>
      </h2>
      <p className="muted" style={{ fontSize: '16px', marginBottom: '28px' }}>
        支付、回调、触发器、定时任务、日志排查、权限……在 Zion Plugin 里照样能配。
      </p>

      <div className="danmaku" aria-hidden="true">
        {lanes.map((lane, i) => (
          <div key={i} className={`danmaku-lane lane-${i}`}>
            <div className="danmaku-track">
              {[...lane, ...lane].map((t, j) => (
                <span key={`${i}-${j}`} className="danmaku-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Slide_s26() {
  return (
<section className="slide cover closing no-pad" id="s26" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="grid-bg"></div>
    <div className="corner-mark"></div>
    <div className="corner-mark-bl"></div>
    <div className="closing-body">
      <p className="closing-lead">Talk is cheap.</p>
      <h1 className="closing-title">
        Show me your <span className="accent">Zion Plugin</span>
      </h1>
      <div style={{ display: 'flex', gap: '48px', marginTop: '48px', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: '#fff',
            padding: '10px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            display: 'flex'
          }}>
            <img
              src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/j9s_3beal16E4gM3EvO18w%3D%3D.png"
              alt="指南文档二维码"
              style={{ width: '170px', height: '170px', display: 'block', borderRadius: '4px' }}
            />
          </div>
          <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}>扫码查看指南文档</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: '#fff',
            padding: '8px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            display: 'flex'
          }}>
            <img
              src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/ieDSstpwKCHqaPbfxArTIQ%3D%3D.jpeg"
              alt="覃貌Tim 微信二维码"
              style={{ height: '190px', width: 'auto', display: 'block', borderRadius: '6px' }}
            />
          </div>
          <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}>扫码加我微信</span>
        </div>
      </div>
    </div>
  </section>
  );
}

export const SLIDES = [
  { id: "s01", Comp: Slide_s01 },
  { id: "s01_about", Comp: Slide_s01_about },
  { id: "s01_vibe", Comp: Slide_s01_vibe },
  { id: "s04", Comp: Slide_s04 },
  { id: "s01_intro", Comp: Slide_s01_intro },
  { id: "s01_agenda", Comp: Slide_s01_agenda },
  { id: "s02", Comp: Slide_s02 },
  { id: "s10_2", Comp: Slide_s10_2 },
  { id: "s10_3", Comp: Slide_s10_3 },
  { id: "s10_4", Comp: Slide_s10_4 },
  { id: "s11", Comp: Slide_s11 },
  { id: "s03", Comp: Slide_s03 },
  { id: "s03_compat", Comp: Slide_s03_compat },
  { id: "s03_alt", Comp: Slide_s03_alt },
  // s05, s05_2 removed
  { id: "s12", Comp: Slide_s12 },
  { id: "s13", Comp: Slide_s13 },
  { id: "s16", Comp: Slide_s16 },
  { id: "s20", Comp: Slide_s20 },
  { id: "s21", Comp: Slide_s21 },
  { id: "s22", Comp: Slide_s22 },
  { id: "s22_more", Comp: Slide_s22_more },
  { id: "s26", Comp: Slide_s26 },
];
