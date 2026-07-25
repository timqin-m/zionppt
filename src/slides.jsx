// Auto-generated from zion-baas-hackathon-guide-slides.html — 幻灯片 markup 1:1 移植，勿手改
import { PerkImageLine, PerkVideoLine } from './PerkEffects.jsx';
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
              ONLINE DEMO
            </span>
            <div style={{ fontSize: '15px', color: '#fff', fontWeight: '600' }}>
              Zion 演示站点
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-mono)' }}>
              zion.howtone.cn
            </div>
            <div className="mobile-tap-hint" style={{ 
              fontSize: '11px', 
              color: 'rgba(255, 255, 255, 0.6)', 
              marginTop: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span>📱 手机点击直达 · 扫码访问</span>
            </div>
          </div>
          <div style={{ 
            background: '#fff', 
            padding: '6px', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
          }}>
            <img 
              src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/7D26c9QUARv5WPcHjZI7XA%3D%3D.png" 
              alt="https://zion.howtone.cn 二维码" 
              style={{ width: '80px', height: '80px', display: 'block', borderRadius: '4px' }} 
            />
          </div>
        </a>
      </div>
    </div>
  </section>
  );
}

export function Slide_s01_zion() {
  return (
    <section className="slide" id="s01_zion" data-accent="core">
      <div className="signature">✦ @functorz.com</div>
      <div className="slide-head" style={{ marginBottom: '16px' }}>
        <div className="kicker">
          <span className="pill accent">COMPANY OVERVIEW</span>
          <span>ABOUT ZION · 6 YEARS</span>
        </div>
      </div>
      <h2 style={{ fontSize: '38px', fontWeight: '700', marginBottom: '8px', lineHeight: '1.2' }}>
        关于 Zion：<span className="accent">从无代码时代 到 Vibe Coding 时代</span>
      </h2>
      <p className="muted" style={{ fontSize: '15px', marginBottom: '20px' }}>
        在过去的 6 年里，我们只死磕了一件事：帮助没有技术背景的创业者，通过 Zion 可视化编辑器自主开发并交付微信小程序与 Web 站点。
      </p>

      <div className="grid-2" style={{ flex: 1, gap: '28px', alignItems: 'stretch' }}>
        {/* 左卡片：6年死磕的坚实基座 */}
        <div className="card tinted" style={{ padding: '28px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '4px solid var(--m-blue)' }}>
          <div>
            <div className="tag solid" style={{ background: 'var(--m-blue-dark)', color: '#fff', fontSize: '11px', padding: '3px 8px', borderRadius: '3px', marginBottom: '14px' }}>
              ZION 坚实基座 (2019 - 2025)
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--m-blue-dark)', marginBottom: '14px' }}>
              死磕云端服务稳定性与严谨性
            </h3>
            <div style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(0,0,0,0.8)', display: 'grid', gap: '10px' }}>
              <div>• ⚡ <strong>高并发与高可用：</strong>沉淀高并发关系型数据库（PostgreSQL）与 Serverless 运行环境。</div>
              <div>• 🔒 <strong>业务逻辑严谨性：</strong>支持可视化行为流编排、高细粒度权限控制与多端数据打通。</div>
              <div>• 💼 <strong>无门槛构建交付：</strong>已助力数万非技术创业者无代码直出商业级应用。</div>
            </div>
          </div>
          <div style={{ background: 'rgba(21,152,255,0.08)', borderRadius: '8px', padding: '10px 14px', fontSize: '12.5px', color: 'var(--m-blue-dark)', fontWeight: '600' }}>
            ✦ 可视化后端与企业级架构，历经数万真实商用项目检验
          </div>
        </div>

        {/* 右卡片：Vibe Coding 时代的进化 */}
        <div className="card tinted" style={{ padding: '28px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '4px solid var(--m-lav)', background: 'var(--m-lav-light)' }}>
          <div>
            <div className="tag solid" style={{ background: 'var(--m-lav-dark)', color: '#fff', fontSize: '11px', padding: '3px 8px', borderRadius: '3px', marginBottom: '14px' }}>
              NEW ERA · VIBE CODING
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--m-lav-dark)', marginBottom: '14px' }}>
              越来越多的人，愿意向前迈出一步
            </h3>
            <div style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(0,0,0,0.8)', display: 'grid', gap: '10px' }}>
              <div>• 🚀 <strong>自然语言编程潮：</strong>在 Vibe Coding 时代，越来越多创作者选择用 AI 代码工具开发产品。</div>
              <div>• ⚡ <strong>Zion Plugin 诞生：</strong>我们将 6 年积累的稳定云端后端，封装为一行指令即可接入的开发套件。</div>
              <div>• 🤝 <strong>人机结对全栈交付：</strong>前端交给 AI Coding，后端交给 Zion，实现兼具极速与极稳的全栈开发。</div>
            </div>
          </div>
          <div style={{ background: 'rgba(92,77,244,0.1)', borderRadius: '8px', padding: '10px 14px', fontSize: '12.5px', color: 'var(--m-lav-dark)', fontWeight: '600' }}>
            ➔ 时代向前：从“无代码编辑器”到“AI 时代的云端可视化后端”
          </div>
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
      <div className="kicker"><span className="pill">INTRO</span><span>HACKATHON PAIN POINTS</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"24px"}}>被 Vibe coding <span className="accent">后端绊住的用户...</span></h2>
    
    <div className="grid-2" style={{"flex":"1","gap":"32px","alignContent":"center","marginTop":"10px"}}>
      {/*  Pit 1  */}
      <div className="card" style={{"padding":"28px","background":"rgba(255, 30, 80, 0.03)","borderRadius":"12px","border":"1px solid rgba(255, 30, 80, 0.12)","display":"flex","flexDirection":"column","justifyContent":"center"}}>
        <div style={{"display":"flex","alignItems":"center","gap":"10px","marginBottom":"16px"}}>
          <span style={{"background":"var(--m-flam)","color":"var(--white)","fontSize":"11.5px","fontWeight":"bold","padding":"4px 12px","borderRadius":"20px","letterSpacing":"1px"}}>问题一</span>
          <h3 style={{"color":"var(--m-flam-dark)","fontSize":"22px","fontWeight":"700","margin":"0"}}>两头开战，时间双倍消耗</h3>
        </div>
        <div style={{"fontSize":"14.5px","color":"rgba(0,0,0,0.8)","lineHeight":"1.75","display":"grid","gap":"8px"}}>
          <div style={{"display":"flex","alignItems":"flex-start","gap":"8px"}}>
            <span style={{"color":"var(--m-flam-dark)","fontWeight":"bold","fontSize":"16px"}}>✦</span>
            <div>既要磨前端 UI 体验，又要由着 AI 盲配后端环境、无休止地 Debug 联调 API。双线 Vibe Coding 极其消耗时间与精力。</div>
          </div>
          <div style={{"display":"flex","alignItems":"flex-start","gap":"8px"}}>
            <span style={{"color":"var(--m-flam-dark)","fontWeight":"bold","fontSize":"16px"}}>✦</span>
            <div>导致开发者<strong>根本没时间深入思考 Idea 与打磨产品核心创意</strong>，光是急着把代码赶出来、在红字中 Debug 改报错就消耗了全部精力。</div>
          </div>
        </div>
      </div>
      {/*  Pit 2  */}
      <div className="card" style={{"padding":"28px","background":"rgba(255, 30, 80, 0.03)","borderRadius":"12px","border":"1px solid rgba(255, 30, 80, 0.12)","display":"flex","flexDirection":"column","justifyContent":"center"}}>
        <div style={{"display":"flex","alignItems":"center","gap":"10px","marginBottom":"16px"}}>
          <span style={{"background":"var(--m-flam)","color":"var(--white)","fontSize":"11.5px","fontWeight":"bold","padding":"4px 12px","borderRadius":"20px","letterSpacing":"1px"}}>问题二</span>
          <h3 style={{"color":"var(--m-flam-dark)","fontSize":"22px","fontWeight":"700","margin":"0"}}>后端与 Agent 均为黑盒，极难调试</h3>
        </div>
        <div style={{"flex":"1","display":"flex","alignItems":"center","marginTop":"4px"}}>
          <svg viewBox="0 0 420 92" style={{"width":"100%","height":"auto"}}>
            {/*  Single Large Red Box: Double Black Box  */}
            <rect x="5" y="5" width="410" height="82" rx="8" fill="rgba(255, 30, 80, 0.04)" stroke="rgba(255, 30, 80, 0.18)" strokeWidth="1.5" />
            {/*  Lock/Closed Box Icon  */}
            <rect x="18" y="29" width="18" height="14" rx="3" fill="none" stroke="#D63C68" strokeWidth="1.5" />
            <path d="M 22 29 L 22 23 A 5 5 0 0 1 32 23 L 34 29" fill="none" stroke="#D63C68" strokeWidth="1.5" />
            
            <text x="44" y="30" fill="#D63C68" fontSize="12" fontWeight="bold">传统开发：双重黑盒 ✗</text>
            <text x="44" y="50" fill="#666" fontSize="10.5" fontWeight="bold">• 后端黑盒：复杂的业务逻辑 Function 代码，非后端码农看不懂</text>
            <text x="44" y="70" fill="#666" fontSize="10.5" fontWeight="bold">• Agent黑盒：大模型的提示词链、工具调用与会话上下文无处排查</text>
          </svg>
        </div>
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
      <div className="kicker"><span className="pill">ELEVATOR PITCH</span><span>一句话介绍 Zion Plugin</span></div>
    </div>
    <div style={{"flex":"1","display":"flex","flexDirection":"column","justifyContent":"center","maxWidth":"960px","marginTop":"20px"}}>
      <div className="qa-block" style={{"padding":"40px","borderRadius":"8px"}}>
        <div className="qa-tag" style={{"fontSize":"13px","letterSpacing":"0.2em","marginBottom":"16px","color":"var(--accent)","fontWeight":"bold"}}>ZION PLUGIN 开发套件</div>
        <p style={{"fontSize":"26px","lineHeight":"1.6","fontWeight":"700","color":"var(--ink)","margin":"0","marginBottom":"16px"}}>
          不过，上述棘手的问题，现在通过 <span className="accent">Zion Plugin（开发套件）</span> 都可以迎刃而解了。
        </p>
        <p style={{"fontSize":"20px","lineHeight":"1.6","fontWeight":"500","color":"var(--ink)","margin":"0"}}>
          它是专为 Vibe Coding 打造的全栈自动化套件。在 AI 编程助手（如 Cursor）中直接集成，即可让 AI 自动完成云数据库、行为流与智能体的可视化配置，并同步完成前端代码生成与真实接口联调。黑盒业务与假数据从此说拜拜👋
        </p>
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
      <div className="kicker"><span className="pill">AGENDA</span><span>目录</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"10px"}}>分享大纲 <span className="accent">/ Syllabus</span></h2>
    <p className="muted" style={{"fontSize":"16px","marginBottom":"20px"}}>本指南将通过以下 4 个部分，带你彻底掌握 Zion Plugin 与 AI Coding Agent 结对开发的全自动极速流程：</p>
    
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
      <div style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}>
        <div className="num" style={{"fontSize":"32px","color":"var(--accent)","fontWeight":"800","lineHeight":"1"}}>04</div>
        <div>
          <div style={{"fontSize":"18px","fontWeight":"bold","color":"var(--ink)","marginBottom":"4px"}}>前端 UI 极速美化</div>
          <div style={{"fontSize":"13px","color":"var(--muted)","lineHeight":"1.4"}}>云端切图素材上传、媒体表资源一键引用与开源高级组件动效套用。</div>
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
      <div className="divider-en">SECTION 01 · INTRODUCTION</div>
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
      <div className="kicker"><span className="pill">1.1</span><span>CASE STUDIES (01/03)</span></div>
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
      <div className="kicker"><span className="pill">1.2</span><span>CASE STUDIES (02/03)</span></div>
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
      <div className="kicker"><span className="pill">1.3</span><span>CASE STUDIES (03/03)</span></div>
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
      <div className="kicker"><span className="pill">1.3</span><span>CAPABILITIES</span></div>
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
      
      {/*  ================= Left Side: IDE / Terminal Theme (Cursor/Claude Code) =================  */}
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
        <text x="165" y="248" fill="#8b949e" fontSize="11" fontWeight="bold" textAnchor="middle">工具：Cursor / Claude Code / Codex</text>
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
          <text x="713" y="124" fill="#5C4DF4" fontSize="9.5" fontWeight="bold" textAnchor="middle">🔘 下单事件 (Event)</text>
          
          <path d="M 713 132 L 713 144" stroke="#5C4DF4" strokeWidth="1.2" strokeDasharray="2,1.5" />
          
          <rect x="655" y="144" width="116" height="22" rx="11" fill="#ffffff" stroke="#1598FF" strokeWidth="1" />
          <text x="713" y="158" fill="#1598FF" fontSize="9.5" fontWeight="bold" textAnchor="middle">⬇ 扣减库存 (DB)</text>
          
          <path d="M 713 166 L 713 178" stroke="#FF799C" strokeWidth="1.2" strokeDasharray="2,1.5" />
          
          <rect x="655" y="178" width="116" height="22" rx="11" fill="#ffffff" stroke="#FF799C" strokeWidth="1" />
          <text x="713" y="192" fill="#FF799C" fontSize="9.5" fontWeight="bold" textAnchor="middle">🤖 AI 智能分析 (Agent)</text>

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

          {/*  Item 4: Claude  */}
          <text x="832" y="190" fill="#8b949e" fontSize="7" fontWeight="bold" fontFamily="var(--font-mono)">  Nano Banana 2 / Veo 3.1</text>

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
      <div className="kicker"><span className="pill">1.3</span><span>OVERVIEW</span></div>
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

export function Slide_s03_compat() {
  return (
<section className="slide" id="s03_compat" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">COMPATIBILITY</span><span>智能体生态</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"10px"}}>兼容主流 <span className="accent">Coding Agent</span></h2>
    <p className="muted" style={{"fontSize":"16px","marginBottom":"24px"}}>支持在以下主流 AI 编辑器/编程助手里直接添加 Zion Plugin 插件，开展高度精准、无缝的前后端全托管 Vibe Coding：</p>
    
    <div style={{"display":"grid","gridTemplateColumns":"repeat(5,1fr)","gap":"16px","flex":"1","alignContent":"center"}}>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","border":"1px solid rgba(21,152,255,0.15)"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Cursor</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Claude Code</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"20px","fontWeight":"bold","color":"var(--ink)"}}>Workbuddy</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Codex</div>
      </div>
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Kimi Code</div>
      </div>
      {/*  Row 2  */}
      <div className="card tinted" style={{"padding":"24px 16px","borderRadius":"8px","textAlign":"center","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <div style={{"fontSize":"22px","fontWeight":"bold","color":"var(--ink)"}}>Qoder</div>
      </div>
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
      <div className="kicker"><span className="pill">1.2</span><span>AI AGENT SOLUTIONS</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion 能给你的</span>：一站式 AI 智能体托管</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.2fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"stretch","marginTop":"20px","width":"100%"}}>
      {/*  Left Column (General info)  */}
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"flex-start"}}>
        <span className="tag solid" style={{"background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>拒绝到处「薅 Token 羊毛」</span>
        <h3 style={{"fontSize":"28px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"14px","lineHeight":"1.2"}}>免去自备与配置 API Key</h3>
        <p style={{"fontSize":"14.5px","color":"rgba(0,0,0,0.75)","lineHeight":"1.65","margin":"0"}}>在用 AI 构建产品时，开发者最头疼的就是<b>要对接 Gemini、GPT 以及各类国产模型（如 DeepSeek）时，需要到处去找、去注册账号、到处去薅免费 Token 羊毛和配置 API Key</b>。一到产品发布与演示现场，由于自备的免费额度超限或网络断供，极易导致产品当场崩溃！<br /><br />Zion Plugin 云端一站式提供了上述所有最新主流模型。一键下拉菜单即可在云端秒级自由切换，彻底消除多平台找 Key 与配置 SDK 的折磨！</p>
      </div>
      {/*  Right Column (Welfare Highlight Card)  */}
      <div className="card tinted" style={{"padding":"32px","borderRadius":"12px","display":"flex","flexDirection":"column","justifyContent":"center","borderLeft":"5px solid var(--accent)","borderTop":"0","borderBottom":"0","borderRight":"0"}}>
        <div style={{"fontWeight":"bold","fontSize":"20px","marginBottom":"14px","color":"var(--accent-deep)"}}>🌟 开发者专属全栈资源</div>
        <div style={{"fontSize":"14px","color":"rgba(0,0,0,0.85)","marginBottom":"12px","fontWeight":"bold"}}>
          所有开发者均可获得 <span className="accent">Zion 专业版</span> 及充足的 AI Points（基础额度）：
        </div>
        <div style={{"display":"grid","gap":"12px","fontSize":"13.5px","color":"rgba(0,0,0,0.75)","lineHeight":"1.6"}}>
          <div>⚡ <strong>1. Gemini 系列模型（以 3.5 Flash 为例）：</strong><br />至少包含约 <span className="accent" style={{"fontWeight":"bold"}}>2000 万 Tokens</span> 输入 / <span className="accent" style={{"fontWeight":"bold"}}>330 万 Tokens</span> 输出！</div>
          <PerkImageLine />
          <PerkVideoLine />
        </div>
        <div style={{"fontSize":"12px","color":"var(--muted)","marginTop":"14px","fontWeight":"bold","borderTop":"1px dashed rgba(0,0,0,0.1)","paddingTop":"10px"}}>
          💡 注：上述为默认基础用量。如有更高额度创意需求，可随时联系 <b>Zion 团队 Timqin</b> 申请额外额度！
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
      <div className="kicker"><span className="pill">1.3</span><span>SERVERLESS SOLUTIONS</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"8px"}}><span className="accent">Zion 能给你的</span>：免服务器运维与部署</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.2fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"center","width":"100%"}}>
      {/*  Left Column (General info)  */}
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"flex-start"}}>
        <span className="tag solid" style={{"background":"var(--accent-deep)","color":"var(--white)","fontWeight":"600","border":"0","fontSize":"12px","padding":"4px 10px","borderRadius":"4px","marginBottom":"16px"}}>全托管 Serverless 架构</span>
        <h3 style={{"fontSize":"28px","fontWeight":"bold","color":"var(--accent-deep)","margin":"0","marginBottom":"14px","lineHeight":"1.2"}}>真正的零运维物理托管</h3>
        <p style={{"fontSize":"14.5px","color":"rgba(0,0,0,0.75)","lineHeight":"1.65","margin":"0"}}>不需要本地安装 Docker、配置端口映射，也不需要租用服务器自建 PostgreSQL 数据库。Zion 为你提供一整套在云端安全运行的全托管 Serverless 物理资源环境。<br /><br />自动生成高可用、极低延迟的标准云端数据接口，双端实时在线打通，让你的精力 100% 专注于前端 UI 体验打磨与核心产品功能实现。</p>
      </div>
      {/*  Right Column (Welfare Highlight Card)  */}
      <div className="card tinted" style={{"padding":"32px","borderRadius":"12px","display":"flex","flexDirection":"column","justifyContent":"center","borderLeft":"5px solid var(--accent)","borderTop":"0","borderBottom":"0","borderRight":"0"}}>
        <div style={{"fontWeight":"bold","fontSize":"20px","marginBottom":"14px","color":"var(--accent-deep)"}}>免去后端全套部署与运维折磨</div>
        <div style={{"display":"grid","gap":"12px","fontSize":"14px","color":"rgba(0,0,0,0.75)","lineHeight":"1.6"}}>
          <div>✓ <strong>Zion 云端专业版高规服务器配置（管够）：</strong></div>
          <div style={{"paddingLeft":"14px","display":"grid","gap":"6px","fontWeight":"bold","color":"var(--accent-deep)"}}>
            <div>• 💾 1G PostgreSQL 云端数据库物理空间</div>
            <div>• 📁 10G OSS 阿里云多媒体媒体资源存储空间</div>
            <div>• ⚡ 10G CDN 全局网络加速分发网络流量</div>
          </div>
          <div style={{"borderTop":"1px dashed rgba(0,0,0,0.1)","paddingTop":"10px","marginTop":"4px"}}>✓ <strong>在线实时暴露 GraphQL 接口</strong>：AI 配置好的后端可以一秒暴露标准、安全的云端 API，双端瞬秒联动直接调试！</div>
        </div>
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
      <div className="divider-en">SECTION 02 · GETTING STARTED</div>
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
      <div className="kicker"><span className="pill">3.1</span><span>PREPARATION</span></div>
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
          <span><strong>开始你的软件开发！</strong>（支持 Cursor、Claude Code、Codex、Workbuddy 等主流工具）</span>
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
      <div className="kicker"><span className="pill">3.2</span><span>INSTALLATION</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"10px"}}>Zion Plugin (开发套件) <span className="accent">安装与更新</span></h2>
    <div style={{"flex":"1","display":"flex","flexDirection":"column","justifyContent":"center","marginTop":"20px","maxWidth":"1120px"}}>
      <p style={{"fontSize":"18px","fontWeight":"bold","color":"var(--black)","marginBottom":"12px"}}>
        在常用 AI 编程编辑器中极速安装与更新：
      </p>
      <div style={{"display":"grid","gap":"20px","fontSize":"18px","color":"rgba(0,0,0,0.85)","lineHeight":"1.7"}}>
        <div style={{"background":"rgba(21,152,255,0.04)","borderLeft":"4px solid var(--accent)","padding":"16px 24px","borderRadius":"0 8px 8px 0"}}>
          🔌 <strong>1. 有 Plugin / 插件市场的工具（如 Cursor, Workbuddy）：</strong><br />
          直接在插件市场中搜索 <strong>「Zion Plugin」</strong> 一键添加，或直接复制粘贴 Plugin 镜像/Git 仓库地址进行快捷安装。
        </div>
        <div style={{"background":"rgba(92,77,244,0.04)","borderLeft":"4px solid var(--m-lav)","padding":"16px 24px","borderRadius":"0 8px 8px 0"}}>
          💬 <strong>2. 纯对话式 / 命令行工具（如 Claude Code, Codex, Kimi）：</strong><br />
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
      <div className="divider-en">SECTION 03 · DEVELOPMENT FLOW</div>
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
      <div className="kicker"><span className="pill">3.1</span><span>FIRST PROMPT</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"12px"}}>首发 <span className="accent">全栈启动指令</span>（Prompt 模板）</h2>
    <div style={{"marginTop":"10px","display":"flex","flexDirection":"column","gap":"18px","flex":"1","justifyContent":"center"}}>
      <p style={{"fontSize":"19px","color":"rgba(0,0,0,0.85)","lineHeight":"1.5","margin":"0"}}>
        新建空白文件夹并登录 Zion Plugin 授权后，直接向 AI 聊天框发送以下这段<b>全量全栈启动</b>指令：
      </p>
      <pre className="code" style={{"fontSize":"16px","lineHeight":"1.6","margin":"0","padding":"24px 28px","whiteSpace":"pre-wrap","wordBreak":"break-all"}}>通过 Zion Plugin，开发一个 AI饮食助手网站，前端使用 React 框架，通过 Vite 构建前端项目，BaaS 使用 Zion，所有接口真实可用，设计风格选择 wabi-sabi 风格，在 Zion 平台创建一个新项目。
我的需求是：用户需要通过用户名和密码注册登录后进入网站内，支持用户上传餐食图片并调用 AI Agent 分析餐食卡路里并输出结果，用户可以保存结果至历史记录内，并支持修改、删除历史记录。

💡 开发策略：
1. 请先在 Zion 平台自动创建新项目，通过 Zion Plugin 全自动配置好底层的数据库表结构、外键关联、AI Agent 智能体等全部后端资源。
2. 待后端配置任务完全结清、接口全部真实打通后，再全自动编写、生成前端 React 页面并进行无缝联调。</pre>
      <div style={{"fontSize":"17px","color":"var(--accent-deep)","fontWeight":"bold","display":"flex","alignItems":"center","gap":"10px","background":"rgba(21,152,255,0.05)","borderLeft":"4px solid var(--accent)","padding":"12px 18px","borderRadius":"0 6px 6px 0","lineHeight":"1.5"}}>
        <span>⚠️ 避坑提示：</span> 从实际运行来看，AI 编程助手容易在该步骤中偷懒（瞎编假数据模拟接口）。所以必须强制命令它分步开发：先走完 Zion 所有的后端自动化配置，再开发前端 UI 联调！
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
      <div className="kicker"><span className="pill">3.2</span><span>SCENARIOS</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"12px"}}>三类 <span className="accent">典型开发场景</span> 极速指令</h2>
    
    <ScenarioCards />

    <div style={{"fontSize":"15px","color":"var(--accent-deep)","fontWeight":"bold","display":"flex","alignItems":"center","gap":"10px","background":"rgba(21,152,255,0.05)","borderLeft":"4px solid var(--accent)","padding":"12px 18px","borderRadius":"0 6px 6px 0","lineHeight":"1.6","marginTop":"20px"}}>
      <span>💡 远不止这三类场景：</span>
      <span style={{"fontWeight":"500","color":"rgba(0,0,0,0.8)"}}>遇到报错时，AI 还能<b>主动查看服务端日志（Logs）自助定位与 Debug</b>；也能一句话<b>配置 RBAC + ABAC 角色权限</b>，精细控制接口与数据访问。</span>
    </div>
  </section>
  );
}

export function Slide_s23() {
  return (
<section className="slide divider-slide no-pad" id="s23" data-accent="hack">
    <div className="signature">✦ @functorz.com</div>
    <div className="divider-num"><div className="big">04</div></div>
    <div className="divider-body">
      <div className="divider-en">SECTION 04 · UI BEAUTIFICATION</div>
      <div className="divider-zh"><strong>前端 UI</strong> 极速美化</div>
      <div className="divider-tagline">云端素材与切图上传、多媒体资源引用与开源高水准 UI 组件库极速套用</div>
    </div>
  </section>
  );
}

export function Slide_s25_2() {
  return (
<section className="slide" id="s25_2" data-accent="hack">
    <div className="signature">✦ @functorz.com</div>
    <div className="slide-head">
      <div className="kicker"><span className="pill">4.1</span><span>UI BEAUTIFICATION</span></div>
    </div>
    <h2 style={{"fontSize":"32px","marginBottom":"10px"}}>前端 UI <span className="accent">极速美化</span> 最佳实践</h2>
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1.1fr","gap":"32px","flex":"1","alignContent":"center","marginTop":"15px","width":"100%"}}>
      {/*  Left: How to upload icons/assets  */}
      <div className="card tinted" style={{"padding":"28px 24px","borderRadius":"12px","display":"flex","flexDirection":"column","justifyContent":"center","height":"320px"}}>
        <h4 style={{"fontSize":"20px","color":"var(--accent-deep)","marginBottom":"10px","fontWeight":"700"}}>如何上传与使用图标素材？</h4>
        <div style={{"fontSize":"13.5px","color":"rgba(0,0,0,0.75)","lineHeight":"1.6","display":"grid","gap":"6px"}}>
          <div>1. <strong>建资源表</strong>：在 Zion 中创建「媒体资源表」，设计 <code>type/tag</code> 文本字段与图片字段。</div>
          <div>2. <strong>云端上传</strong>：直接在 Zion 数据库管理后台可视化上传你的各种 logo、图标和切图素材。</div>
          <div>3. <strong>直接引用</strong>：在 Cursor 聊天框直接告诉 AI：<i>“XX 按钮的图片使用该表里 tag = XX 的图片”</i>。如果你懒得找图标，甚至可以直接命令 Cursor 为你生成符合主题风格的 SVG 图片并直接渲染引用！</div>
        </div>
      </div>
      {/*  Right: Open source UI inspiration libraries  */}
      <div className="card tinted" style={{"padding":"28px 24px","borderRadius":"12px","display":"flex","flexDirection":"column","justifyContent":"center","height":"320px","borderLeft":"5px solid var(--accent)","borderTop":"0","borderBottom":"0","borderRight":"0"}}>
        <h4 style={{"fontSize":"20px","color":"var(--accent-deep)","marginBottom":"10px","fontWeight":"700"}}>开源高级 UI 灵感库极速套用</h4>
        <p style={{"fontSize":"13.5px","color":"rgba(0,0,0,0.7)","lineHeight":"1.5","marginBottom":"10px"}}>
          复制以下灵感库中提供的 UI Prompt 风格提示词或组件 React 源码，直接喂给 AI 即可实现局部的极速美化与动效套用：
        </p>
        <div style={{"display":"grid","gap":"6px","fontSize":"13.5px","color":"rgba(0,0,0,0.85)","fontWeight":"500"}}>
          <div>• <strong>21st.dev / superdesign.dev</strong>：整体系统视觉与风格提示词一键生成</div>
          <div>• <strong>designprompts.dev</strong>：局部现代精美 Web UI 模块直接复制套用（新手友好）</div>
          <div>• <strong>reactbits.dev</strong>：高阶局部酷炫动效与物理动画组件无损插入（老手进阶）</div>
        </div>
      </div>
    </div>
  </section>
  );
}

export function Slide_s26() {
  return (
<section className="slide" id="s26" data-accent="core">
    <div className="signature">✦ @functorz.com</div>
    <div style={{"display":"grid","gridTemplateColumns":"1.2fr 1fr","gap":"48px","flex":"1","alignContent":"center","alignItems":"center","width":"100%"}}>
      {/*  Left Column  */}
      <div style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"flex-start"}}>
        <h1 style={{"fontSize":"56px","marginBottom":"20px","lineHeight":"1.2"}}>极速打造你的<br /><span className="accent">爆款 AI 产品！</span></h1>
        <div style={{"fontSize":"15px","color":"var(--accent-deep)","fontWeight":"600","background":"rgba(21,152,255,0.05)","border":"1px dashed var(--accent)","borderRadius":"6px","padding":"12px 18px","marginBottom":"28px","width":"100%","maxWidth":"540px"}}>
          获取 Zion 专业版资源，请联系官方人员获取兑换码
        </div>
        <div>
          <a className="btn-link sm" href="https://functorz.com" target="_blank" rel="noopener">functorz.com ➔</a>
        </div>
      </div>
      {/*  Right Column (QR Code)  */}
      <div style={{"display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","width":"100%"}}>
        <div style={{"background":"var(--white)","borderRadius":"12px","padding":"16px","boxShadow":"0 16px 48px rgba(0,0,0,0.15)","border":"1px solid rgba(0,0,0,0.06)","textAlign":"center"}}>
          <img src="https://fz-zion.oss-cn-shanghai.aliyuncs.com/project/2000000000600557/images/j1ec9B0n40Nv0sgRkdrQEA%3D%3D.png" alt="交流群二维码" style={{"width":"320px","height":"420px","objectFit":"contain","borderRadius":"6px","marginBottom":"12px"}} />
          <div style={{"fontSize":"16px","fontWeight":"700","color":"var(--accent-deep)"}}>扫码进群交流</div>
        </div>
      </div>
    </div>
  </section>
  );
}

export const SLIDES = [
  { id: "s01", Comp: Slide_s01 },
  { id: "s01_zion", Comp: Slide_s01_zion },
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
  { id: "s05", Comp: Slide_s05 },
  { id: "s05_2", Comp: Slide_s05_2 },
  { id: "s12", Comp: Slide_s12 },
  { id: "s13", Comp: Slide_s13 },
  { id: "s16", Comp: Slide_s16 },
  { id: "s20", Comp: Slide_s20 },
  { id: "s21", Comp: Slide_s21 },
  { id: "s22", Comp: Slide_s22 },
  { id: "s23", Comp: Slide_s23 },
  { id: "s25_2", Comp: Slide_s25_2 },
  { id: "s26", Comp: Slide_s26 },
];
