# Zion 黑客松指南 · 幻灯片 + 现场实机演示

黑客松演讲二合一应用：原纯 HTML 幻灯片（21+ 页）1:1 移植为 React 组件，并插入 1 页 **LIVE DEMO** 幻灯片，现场直连已部署的 Zion BaaS 真实后端（GraphQL），证明「PPT 里说的功能都是真的」。

## 快速开始

```bash
npm install
npm run dev          # 本地开发
npm run dev -- --host  # 演讲模式：暴露局域网地址，方便同 WiFi 设备访问
npm run build        # 生产构建
npm run test:backend # 后端连通性只读测试（不写数据）
```

## 操作方式

- 默认**滚动浏览模式**：上下滚动查看全部幻灯片
- 按 `F`（或点右上角「⛶ 演讲模式」按钮）进入**演讲模式**：1280×720 固定画布按窗口缩放居中 + 全屏
- `←` / `→` / `↑` / `↓` / `空格` 翻页，`Home` / `End` 跳首尾页，`Esc` 退出演讲模式
- 演讲模式左下角 HUD 显示当前页码

## 页面结构（共 24 页）

原 22 页幻灯片（移植自 `zion-baas-hackathon-guide-slides.html`）+ 2 页新幻灯片：

- **AI 自动构建回放**（插在原 s11 之后、LIVE DEMO 之前，`data-accent="spark"`）：本项目 hackathon-live-demo 的真实 Zion Plugin 构建过程动画回放——左侧深色终端逐行打字机输出真实工具调用，右侧 Zion Cloud Console 风格面板里数据表（meal_record / live_message）、Agent 卡片（卡路里分析官 · Gemini 3.5 Flash · RAG 挂载 · JSON 结构化输出）、行为流卡片（Input → Run AI → Insert DB → Output）随时间线依次物化，最后亮起「● 已上线 · GraphQL API ready」徽章。进入视口自动播放（约 16s），离开视口重置，右下角「▶ 重新播放」可重放
- **LIVE DEMO：AI 卡路里分析 + 行为流 + 多模态图片**（插在构建回放之后）：输入餐食描述（可选配图）→ 调云端行为流 → Gemini 3.5 Flash 分析 → 自动写入 `meal_record` 表；执行过程以**流水线动画**可视化（浏览器 → GraphQL → Zion 行为流 → Gemini → PostgreSQL → ✓ 完成，idle 时为静态架构图，与前页架构图呼应）；右侧实时表格每 3 秒轮询 + WebSocket 增强刷新，含图片缩略图列，支持删除行

### 图片上传（强制两步走）

1. 前端计算文件原始 128-bit MD5（spark-md5 得 hex），hex → Base64
2. mutation `imagePresignedUrl(imgMd5Base64, imageSuffix: JPEG/PNG/WEBP/GIF, acl: PUBLIC_READ)` 拿 `{ imageId, uploadUrl, uploadHeaders }`
3. `uploadHeaders` **原样带全**（Content-MD5、Date、x-oss-object-acl…）HTTP PUT 原始字节到 `uploadUrl`
4. 行为流 args 加 `meal_image: imageId`；描述留空时自动用「看图分析这餐」

## 后端信息（Zion BaaS）

- 项目名：`hackathon-live-demo`，projectExId：`PO76RBe90gY`
- HTTP GraphQL endpoint（匿名角色已授权，无需鉴权头）：
  `https://zion-app.functorz.com/zero/PO76RBe90gY/api/graphql-v2`
- WebSocket 订阅 endpoint（legacy subscriptions-transport-ws，子协议 `graphql-ws`）：
  `wss://zion-app.functorz.com/zero/PO76RBe90gY/api/graphql-subscription`
- AI 行为流 id：`d0e3e3bf-14ad-4e6c-a406-db4611f6ee87`（`fz_create_action_flow_task` 异步触发，约 10 秒完成；入参 `meal_description` / `meal_type` / 可选 `meal_image`）
- 数据表：`meal_record`（餐食记录，含 5 条种子数据，`image { id url }` 关联图片）、`live_message`（现场弹幕，前端已不使用）
- **这套数据在 Zion 控制台可见** — 演讲时可打开控制台项目 `hackathon-live-demo` 的数据库面板，与幻灯片里的表格对照

### 实现要点

- `src/zion.js` 封装所有后端调用：`gql` fetch 封装、`usePolling` 轮询 hook、`useSubscription` WS hook、图片两步上传助手
- WS 偶发不稳定（ack 后无数据帧），所以 **WS 只作增强**：所有实时数据以 HTTP 轮询（3s）为基线，WS 帧到了就提前刷新
- 订阅查询里**不写 order_by**（已实测会静默收不到数据），排序在前端做
- 所有异步状态都有 loading / error 兜底，error 显示红色错误条 + 重试按钮

## 技术栈

Vite + React 18（JSX），依赖仅 `react` / `react-dom` / `spark-md5`（图片 MD5）/ `vite` / `@vitejs/plugin-react`。

## 文件说明

```
index.html            # 入口（Google Fonts 外链）
public/assets/        # 幻灯片图片素材（7 个文件）
src/main.jsx          # React 挂载
src/App.jsx           # 根组件
src/Deck.jsx          # Deck 容器：滚动/演讲双模式 + 键盘导航 + HUD
src/deck.css          # 设计系统（Momen 配色，移植自原 HTML <style>）+ DEMO 页/流水线样式
src/slides.jsx        # 22 页原幻灯片组件（脚本转换生成，勿手改）
src/BuildReplaySlide.jsx  # AI 自动构建回放动画页（纯 CSS/React 状态机时间线）
src/DemoSlides.jsx    # LIVE DEMO 幻灯片（行为流流水线动画 + 图片上传）
src/zion.js           # Zion BaaS 后端封装
scripts/test-backend.mjs  # 后端连通性只读测试
```

## 阿里云服务器部署指南

本项目配置了自动化一键部署，任何后续的 AI 编程助手（Coding Agent）或开发者可以直接使用以下命令进行编译与部署：

### 1. 一键构建与部署
```bash
npm run deploy
```
此命令等同于：先进行本地生产打包 `npm run build`，随后通过 `scp` 将 `dist` 目录内的所有编译产物上传至服务器指定的网站根目录下。

### 2. 服务器环境配置信息
- **服务器 IP：** `8.147.114.90`
- **SSH 登录用户名：** `root`
- **SSH 认证方式：** 免密登录（已在本地配置 SSH 密钥对）
- **Web 服务器：** Nginx
- **Nginx 网站根目录：** `/var/www/deck` （对应域名：`zion.howtone.cn`）
- **Nginx 配置文件位置：** `/etc/nginx/conf.d/deck.conf`

> **提示：** 
> 1. 如果未来更换了电脑或部署终端，请确保目标机器的 SSH 公钥已添加至阿里云服务器的 `~/.ssh/authorized_keys` 中。
> 2. 网页部署目录并非默认的 `/var/www/html`，而是专为本幻灯片配置的 **/var/www/deck**，切勿传错。
