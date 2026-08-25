// Auto-generated from zion-baas-hackathon-guide-slides.html — 幻灯片 markup 1:1 移植，勿手改
import { useState, useEffect, useRef } from 'react';
import { ScenarioCards } from './ScenarioCards.jsx';

export function Slide_workshop_opening() {
  return (
    <section className="slide workshop-opening" id="workshop-opening" data-accent="core">
      <div className="signature">✦ @functorz.com</div>
      <div className="workshop-opening-body">
        <div className="kicker">
          <span className="pill accent">WORKSHOP</span>
          <span>Vibe-nocoding · Zion</span>
        </div>
        <h1>不 Vibe Coding 上线<br /><span className="accent">不准走</span><span className="workshop-opening-suffix"> 线下 workshop</span></h1>
        <div className="workshop-opening-foot">
          <span>带着真实需求来，带着真实产品走</span>
          <span>鸣谢：杭州AI工坊、青荷小镇、萧山环投商管</span>
        </div>
      </div>
    </section>
  );
}

export function Slide_s01() {
  return (
<section className="slide cover no-pad" id="s01" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="grid-bg"></div>
    <div className="corner-mark"></div>
    <div className="corner-mark-bl"></div>
    <div className="cover-body">
      <div style={{ transform: 'translateY(72px)' }}>
        <h1><span className="accent">Zion</span></h1>
        <div className="cover-sub" style={{ fontSize: '32px', fontWeight: '600', color: '#fff', marginTop: '16px' }}>
           让没有技术背景的创业者，拥有可控稳定的商业产品开发能力
        </div>
      </div>
      <div className="cover-foot" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%', marginBottom: '28px' }}>
        <div>
          <div style={{"fontSize":"18px","color":"#fff","fontWeight":"500","marginBottom":"6px"}}>Zion 开发者生态 覃貌Tim</div>
          <div className="meta" style={{"color":"rgba(255,255,255,.55)"}}>Powered by functorz.com</div>
        </div>
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
        <div style={{ fontSize: '46px', fontWeight: '800', color: '#fff', letterSpacing: '-0.01em', lineHeight: '1.3' }}>
          在过去的 6 年里，我们围绕着这个初衷
        </div>

        <h1 className="about-title-anim" style={{ fontSize: '46px', fontWeight: '800', lineHeight: '1.3', letterSpacing: '-0.01em', margin: '0 0 28px', color: '#fff' }}>
          让这些非技术型创业者，通过 Zion 画布编辑器<br />
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
    <section className="slide vibe-single" id="s01_vibe" data-accent="spark">
      <div className="signature">✦ @functorz.com</div>
      <h2>
        进入 Vibe Coding 时代：<span className="accent">让更多人愿意动手做产品了</span>
      </h2>
    </section>
  );
}

export function Slide_s01_cases_transition() {
  return (
    <section className="slide cases-transition" id="s01_cases_transition" data-accent="core">
      <div className="signature">✦ @functorz.com</div>
      <div className="cases-transition-body">
        <div className="kicker">
          <span className="pill accent">真实案例</span>
          <span>Before AI Coding</span>
        </div>
        <h2>
          在那个还没有 AI Coding 的年代，<br />
          Zion 的用户靠<span className="accent">手搓画布</span>做出了这些产品
        </h2>
        <div className="cases-transition-list">
          <span><strong>稿市</strong>· 簪花圈画稿交易社区</span>
          <span><strong>文明闪存</strong>· 闪迪经销商积分核销小程序</span>
          <span><strong>橘子绿洲</strong>· 地下偶像公演追踪小程序</span>
          <span><strong>艇易达</strong>· 游艇售卖小程序</span>
          <span><strong>小德陪诊</strong>· 陪诊预约小程序</span>
          <span><strong>期力企服</strong>· 保洁服务 SaaS 平台</span>
          <span><strong>驰放</strong>· 正念课程平台</span>
        </div>
        <div className="cases-transition-grid">
          <div className="cases-transition-card">
            <img src="https://fz-zion-static.functorz.com/202608252359/16f97953b9ee28cc75b859414974708d/project/2000000000600557/images/aDUfJneASe_6poQIPQVzXw==.webp" alt="小卡册" />
            <span>小卡册</span>
            <p>700万SKU的球星卡收集爱好者之家</p>
          </div>
          <div className="cases-transition-card">
            <img src="https://fz-zion-static.functorz.com/202608252359/ead5b2973a482f43de1f68d4d473719a/project/2000000000600557/images/vKiNVhs9bLKPKpAF3aLctw==.webp" alt="GOO 活动" />
            <span>GOO 活动</span>
            <p>香港地区最大的港漂活动平台</p>
          </div>
          <div className="cases-transition-card cases-transition-card--qr">
            <img src="https://fz-zion-static.functorz.com/202608252359/f22b43386be56bbdcbaa8218df4dfefc/project/2000000000600557/images/w11qd3y--0iP1ybfF6ZOhQ==.png" alt="更多手搓案例二维码" />
            <span>更多案例</span>
            <p>扫码看更多手搓案例</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Slide_s01_cases_summary() {
  return (
    <section className="slide cases-summary" id="s01_cases_summary" data-accent="core">
      <div className="signature">✦ @functorz.com</div>
      <div className="cases-summary-body">
        <div className="kicker">
          <span className="pill accent">用户画像</span>
          <span>Summary</span>
        </div>
        <h2>
          也因为<span className="accent">画布编辑器</span>的上手门槛
        </h2>
        <p className="cases-summary-gate">
          这道门槛，也会把一部分人挡在门外
        </p>
        <p className="cases-summary-lead">
          留下来的用户群，都是一群愿意动手操作工具、<br />愿意琢磨文档的创业者
        </p>
        <div className="cases-summary-rule" />
      </div>
    </section>
  );
}

export function Slide_s04() {
  return (
<section className="slide" id="s04" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <h2 style={{ fontSize: '32px', marginBottom: '10px', lineHeight: 1.25 }}>
      但我们同时也注意到，<span className="accent">他们在使用 AI 开发产品</span>时遇到的问题
    </h2>
    <div className="vibe-stage">
        <span>连后端是什么都不知道的时期</span>
      </div>
      <div className="vibe-progress">
      <div className="vibe-progress-card">
        <span className="vibe-progress-num">01</span>
        <h3>前端很快能做出来</h3>
        <p>靠 AI，很快就能做出能打开的页面</p>
      </div>
      <span className="vibe-progress-arrow" aria-hidden="true">→</span>
      <div className="vibe-progress-card">
        <span className="vibe-progress-num">02</span>
        <h3>误以为「有后端了」</h3>
        <p>有人以为纯 HTML 就是前端，localStorage 就当有了数据库</p>
      </div>
      <span className="vibe-progress-arrow" aria-hidden="true">→</span>
      <div className="vibe-progress-card vibe-progress-card--bad">
        <span className="vibe-progress-num">03</span>
        <h3>后端仍是黑盒</h3>
        <p>真正的数据库、接口、鉴权、Agent 与复杂业务逻辑，对看不懂的人仍是黑盒</p>
      </div>
    </div>

    <div className="vibe-stage vibe-stage--end">
        <span>有一丢丢概念的时候</span>
      </div>
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

    <div className="intro-hero">
      <h2 className="intro-title">
        因此我们推出了 <span className="accent">Zion Plugin（开发插件）</span>
      </h2>
      <p className="intro-sub">
        把 Zion 可视化后端，直接塞进 Cursor 等 AI 编程助手。
      </p>

      <div className="intro-flow" aria-hidden="true">
        <div className="intro-step">
          <div className="intro-step-label">你的 AI IDE</div>
          <div className="intro-ide-grid">
            {['Cursor', 'Codex', 'Claude Code', 'Workbuddy', 'Kimi Code', 'Qoder', 'Trae', 'Codebuddy', 'More…'].map((ide) => (
              <span key={ide}>{ide}</span>
            ))}
          </div>
        </div>
        <div className="intro-plus">+</div>
        <div className="intro-step accent-step">
          <div className="intro-step-label">插件</div>
          <div className="intro-step-title">Zion</div>
        </div>
        <div className="intro-plus">→</div>
        <div className="intro-step result-step">
          <div className="intro-step-label">结果</div>
          <div className="intro-step-title">后端看得见 · 真接口联调</div>
        </div>
      </div>
    </div>
    <div className="intro-doc-qr">
      <img src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/j9s_3beal16E4gM3EvO18w%3D%3D.png" alt="指南文档二维码" />
      <span>指南文档</span>
    </div>
  </section>
  );
}

export function Slide_s02() {
  return (
<section className="slide divider-simple" id="s02" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="divider-simple-body">
      <h2><strong>他们都在用</strong> <span className="accent">Zion Plugin</span></h2>
      <p>开发自己真实的商业项目</p>
    </div>
  </section>
  );
}

export function Slide_s10_2() {
  return (
<section className="slide" id="s10_2" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion</span> 案例展示</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.3fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"center","width":"100%"}}>
      {/*  Left Info  */}
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"space-between","alignItems":"flex-start","height":"320px"}}>
        <div style={{"display":"flex","flexDirection":"column","alignItems":"flex-start"}}>
          <span className="tag solid" style={{"background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>Web 站点</span>
          <h3 style={{"fontSize":"36px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"20px","lineHeight":"1.2"}}>howtone.cn 内容营销工具</h3>
          <p style={{"fontSize":"16px","color":"rgba(0,0,0,0.75)","lineHeight":"1.7","margin":"0"}}>一款基于 AI Agent、采用 Cursor + Zion 结对开发的智能内容营销平台。展现了 AI 辅助开发在 Web 端与 Zion 关系型数据库、云端 AI 智能体一键全自动连通联调的真实成果。</p>
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
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion</span> 案例展示</h2>
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
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion</span> 案例展示</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.3fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"center","width":"100%"}}>
      {/*  Left Info  */}
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"space-between","alignItems":"flex-start","height":"320px"}}>
        <div style={{"display":"flex","flexDirection":"column","alignItems":"flex-start"}}>
          <span className="tag solid" style={{"background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>微信小程序</span>
          <h3 style={{"fontSize":"36px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"20px","lineHeight":"1.2"}}>「HAIFOSS」肤质测评小程序</h3>
          <p style={{"fontSize":"16px","color":"rgba(0,0,0,0.75)","lineHeight":"1.7","margin":"0"}}>基于 Zion 全托管后端实现的肤质测评微信小程序。将多维交互测试、用户测评数据沉淀与个性化推荐逻辑交由 Zion 自动化托管运行。</p>
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

export function Slide_s10_5() {
  return (
<section className="slide" id="s10_5" data-accent="spark">
    <div className="signature">✦ @functorz.com</div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion</span> 案例展示</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.3fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"center","width":"100%"}}>
      {/*  Left Info  */}
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"space-between","alignItems":"flex-start","height":"320px"}}>
        <div style={{"display":"flex","flexDirection":"column","alignItems":"flex-start"}}>
          <span className="tag solid" style={{"background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>Web 站点 · 知识付费</span>
          <h3 style={{"fontSize":"36px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"20px","lineHeight":"1.2"}}>shikilab.cn 知识付费网站</h3>
          <p style={{"fontSize":"16px","color":"rgba(0,0,0,0.75)","lineHeight":"1.7","margin":"0"}}>数十万粉丝的 Notion 博主的知识付费网站，基于 Zion 全托管后端构建。</p>
        </div>
        {/*  QR Code in Bottom Left  */}
        <div style={{"display":"flex","flexDirection":"column","alignItems":"center","marginTop":"16px"}}>
          <img src="https://fz-zion-static.functorz.com/202608252359/2f9236bb6008e4a133cd75689d0a178f/project/2000000000600557/images/prQ8P4vlanp1AP3rAJTzGQ==.png" style={{"width":"120px","height":"120px","objectFit":"contain","borderRadius":"8px","boxShadow":"0 4px 16px rgba(0,0,0,0.06)","background":"var(--white)","border":"1px solid rgba(0,0,0,0.04)","marginBottom":"8px"}} />
          <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--accent-deep)","textAlign":"center","width":"120px","lineHeight":"1.4"}}>扫码体验网站</div>
        </div>
      </div>
      {/*  Right Visual  */}
      <div style={{"display":"flex","justifyContent":"flex-end","width":"100%"}}>
        <img src="https://fz-zion-static.functorz.com/202608252359/eece1aaa0a301d56446f6895f71ef472/project/2000000000600557/images/UuiDwLxIJIXMxKcoSBwCrQ==.jpeg" style={{"width":"540px","height":"360px","objectFit":"cover","borderRadius":"12px","boxShadow":"0 16px 48px rgba(0,0,0,0.12)","background":"var(--white)","border":"1px solid rgba(0,0,0,0.06)"}} alt="shikilab.cn" />
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

export function Slide_vibe_nocoding() {
  return (
    <section className="slide vibe-nocoding" id="vibe_nocoding" data-accent="core">
      <div className="signature">✦ @functorz.com</div>
      <div className="vibe-nocoding-body">
        <h2>
          如果依然不喜欢 Vibe Coding 带来的<br /><span className="accent">抽卡与盲盒感</span>
        </h2>
        <p className="vibe-nocoding-lead">
          我们准备了一套 <span className="accent">Vibe-nocoding</span> 开发方案
        </p>
        <div className="vibe-nocoding-rule" />
      </div>
    </section>
  );
}

export function Slide_vibe_nocoding_how() {
  return (
    <section className="slide vibe-nocoding-how" id="vibe_nocoding_how" data-accent="core">
      <div className="signature">✦ @functorz.com</div>
      <div className="vibe-nocoding-how-body">
        <div className="vibe-nocoding-how-copy">
          <h2>
            通过自然语言，在 Zion 画布上<br />
            完成页面和业务逻辑的<br />
            <span className="accent">所有可视化搭建</span>
          </h2>
          <p>一站式在 Zion 完成所有事务</p>
        </div>
        <div className="canvas-mock" aria-hidden="true">
          <div className="canvas-mock-bar">
            <span className="canvas-dot" /><span className="canvas-dot" /><span className="canvas-dot" />
            <em>Zion 画布</em>
          </div>
          <div className="canvas-mock-main">
            <div className="canvas-mock-props">
              <span /><span /><span /><span />
            </div>
            <div className="canvas-mock-stage">
              <div className="canvas-block canvas-block--nav" />
              <div className="canvas-block canvas-block--hero" />
              <div className="canvas-block canvas-block--row">
                <i /><i /><i />
              </div>
            </div>
          </div>
        </div>
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
      <h1 className="closing-title">
        让我们正式开始<br />今天的 <span className="accent">Workshop</span>
      </h1>
      <div className="closing-foot">
        <span>Zion 开发者生态 · 覃貌Tim</span>
        <span>Powered by functorz.com</span>
      </div>
    </div>
  </section>
  );
}

export const SLIDES = [
  { id: "workshop-opening", Comp: Slide_workshop_opening },
  { id: "s01", Comp: Slide_s01 },
  { id: "s01_about", Comp: Slide_s01_about },
  { id: "s01_cases_transition", Comp: Slide_s01_cases_transition },
  { id: "s01_cases_summary", Comp: Slide_s01_cases_summary },
  { id: "s01_vibe", Comp: Slide_s01_vibe },
  { id: "s04", Comp: Slide_s04 },
  { id: "s01_intro", Comp: Slide_s01_intro },
  { id: "s02", Comp: Slide_s02 },
  { id: "s10_2", Comp: Slide_s10_2 },
  { id: "s10_3", Comp: Slide_s10_3 },
  { id: "s10_4", Comp: Slide_s10_4 },
  { id: "s10_5", Comp: Slide_s10_5 },
  { id: "vibe_nocoding", Comp: Slide_vibe_nocoding },
  { id: "vibe_nocoding_how", Comp: Slide_vibe_nocoding_how },
  { id: "s26", Comp: Slide_s26 },
];
