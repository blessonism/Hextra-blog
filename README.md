# Hextra Starter Template

[![Deploy Hugo site to Pages](https://github.com/blessonism/actions/workflows/pages.yaml/badge.svg)](https://github.com/blessonism/actions/workflows/pages.yaml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e83fd88-5ffe-4808-9689-c0f3b100bfe3/deploy-status)](https://app.netlify.com/sites/hextra-starter-template/deploys)
![Vercel Deployment Status](https://img.shields.io/github/deployments/imfing/hextra-starter-template/production?logo=vercel&logoColor=white&label=vercel&labelColor=black&link=https%3A%2F%2Fhextra-starter-template.vercel.app%2F)

🐣 Minimal template for getting started with [Hextra](https://github.com/blessonism/hextra)

![hextra-template](https://github.com/blessonism/assets/5097752/c403b9a9-a76c-47a6-8466-513d772ef0b7)

[🌐 Demo ↗](https://imfing.github.io/hextra-starter-template/)

## Quick Start

Use this template to create your own repository:

<img src="https://docs.github.com/assets/cb-77734/mw-1440/images/help/repository/use-this-template-button.webp" width=400 />

You can also quickly start developing using the following online development environment:

- [GitHub Codespaces](https://github.com/codespaces)

  [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/imfing/hextra-starter-template)

  Create a new codespace and follow the [Local Development](#local-development) to launch the preview

- [Gitpod](https://gitpod.io)

  [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/blessonism)

## Deployment

### GitHub Pages

A GitHub Actions workflow is provided in [`.github/workflows/pages.yaml`](./.github/workflows/pages.yaml) to [publish to GitHub Pages](https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/) for free.

For details, see [Publishing with a custom GitHub Actions workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).

Note: in the settings, make sure to set the Pages deployment source to **GitHub Actions**:

<img src="https://github.com/blessonism/assets/5097752/99676430-884e-42ab-b901-f6534a0d6eee" width=600 />

[Run the workflow manually](https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow) if it's not triggered automatically.

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/blessonism)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fimfing%2Fhextra-starter-template&env=HUGO_VERSION)

Override the configuration:

<img src="https://github.com/blessonism/assets/5097752/e2e3cecd-c884-47ec-b064-14f896fee08d" width=600 />

## Local Development

Pre-requisites: [Hugo](https://gohugo.io/getting-started/installing/), [Go](https://golang.org/doc/install) and [Git](https://git-scm.com)

```shell
# Clone the repo
git clone https://github.com/blessonism.git

# Change directory
cd hextra-starter-template

# Start the server
hugo mod tidy
hugo server --logLevel debug --disableFastRender -p 1313
```

### Update theme

```shell
hugo mod get -u
hugo mod tidy
```

See [Update modules](https://gohugo.io/hugo-modules/use-modules/#update-modules) for more details.


## 文章浏览量统计（Cloudflare Pages + KV + 极简前端）

本项目已内置“按页面统计浏览量”的能力，适用于静态站点：Hugo + Hextra + Cloudflare Pages Functions + KV。

### 功能概览
- 按 slug 计数，每次页面加载（带 8 小时前端去重）+1
- 数据存储：Cloudflare KV（命名空间绑定变量名 VIEWS）
- 前端展示：文章/文档页文末右侧的“极简胶囊”视图（小屏仅数字）
- 性能：脚本 defer + requestIdleCallback；失败静默
- 隐藏开关：默认对访客不可见，作者可通过暗号显示

### 关键文件
- functions/api/views.ts：后端 API（GET/POST /api/views?slug=...）
- assets/js/pageviews.js：前端计数与展示逻辑（含隐藏开关）
- layouts/partials/components/pageviews.html：显示组件（胶囊）
- 页面插入位置：
  - layouts/blog/single.html → 文末 content 内：在 {{ .Content }} 之后追加
  - layouts/docs/single.html → 文末 content 内：在 {{ .Content }} 之后追加

### Cloudflare Pages 配置
1. 创建 KV 命名空间（示例：hextra-blog-views）
2. 在 Pages 项目 → Settings → Functions → KV namespaces：添加绑定
   - Variable name：VIEWS（固定，后端代码使用 env.VIEWS）
   - Namespace：选择上一步创建的命名空间
3. 部署后访问任意页面，浏览器 Network 可看到 /api/views 的 POST/GET

### API 行为
- GET /api/views?slug=/path/ → 返回 { count }
- POST /api/views?slug=/path/ → 计数 +1，返回 { count }
- 后端会规整 slug（两侧斜杠统一）；KV 无原子自增，但一般博客流量足够准确

### 前端逻辑（去重与展示）
- localStorage 键名：pv:<slug>，TTL 8 小时
- 首次/过期访问：POST + GET；否则仅 GET
- 小屏隐藏图标，仅显示数字；等宽数字排版（tabular-nums）
- 主要类：
  - hx-pv-chip（容器）
  - hx-pv-icon（图标）
  - hx-pv-count（数字）
  - hx-pv-footer（文末右对齐容器的安全内边距）
  - hx-pv-mb-10（10px 下边距辅助类）

### 隐藏开关（仅作者可见）
- 默认隐藏：组件带有 hx-pv-hidden，普通用户看不见
- 显示方式（任一即可）：
  1) URL Hash：地址末尾追加 #views（支持 hashchange 动态生效）
  2) Query 参数：?views=1 或 ?pv=1（便于分享调试链接）
  3) 键盘暗号：Konami Code（↑↑↓↓←→←→BA）切换显示/隐藏

### 样式与位置
- 文末右侧对齐，保留右内边距（hx-pv-footer）避免贴边
- 胶囊样式低存在感：更浅边框与背景、无 hover 提亮、小屏隐藏图标
- 如需自定义 10px 下边距：在组件 class 上添加 hx-pv-mb-10（已在 custom.css 定义）

### 本地预览
```bash
hugo server -D
# 在页面 URL 追加 #views 或 ?views=1 来显示浏览量组件
```

### 常见问题
- 看不到组件：
  - 确认 URL 含 #views 或 ?views=1，或输入暗号
  - 确认页面 DOM 中存在 [data-page-views]
  - 确认 assets/js/pageviews.js 已打包到 main.js
- 计数一直为 0：
  - 检查 Cloudflare Pages 的 KV 绑定变量名是否为 VIEWS
  - /api/views 请求是否 200；若 404，确认 functions 目录随部署生效
- 去重太激进/太宽松：调整 assets/js/pageviews.js 中 TTL（默认 8 小时）

### 隐私与安全
- 不采集个人信息，只记录页面级计数
- 同源调用；失败静默，不阻塞首屏

