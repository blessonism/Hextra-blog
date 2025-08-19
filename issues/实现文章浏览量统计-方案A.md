# 实现文章浏览量统计（方案A：Cloudflare Pages Functions + KV）

## 背景
- Hugo + Hextra 博客
- 部署于 Cloudflare（Pages）

## 目标
- 按页面（slug）统计浏览次数
- 在博客与文档页面显示浏览量
- 去重窗口：8 小时（前端 localStorage）
- 不影响首屏性能

## 实施要点
1. 后端 API：functions/api/views.ts
   - GET /api/views?slug=... 返回 { count }
   - POST /api/views?slug=... 计数 +1 后返回 { count }
   - 存储：Cloudflare KV（绑定变量名 VIEWS）
2. 前端脚本：assets/js/pageviews.js
   - 页面加载后读取 data-slug
   - localStorage 记录最近上报时间（8h）
   - 需要计数时 POST，然后 GET 刷新显示
3. 布局
   - 新增 partial：layouts/partials/components/pageviews.html
   - 在 layouts/blog/single.html 的 meta 区插入浏览量
   - 在 layouts/docs/single.html 标题下插入浏览量
4. 资源管线
   - 修改 layouts/partials/scripts.html，将 pageviews.js 并入 main.js

## Cloudflare 配置
- 在 Cloudflare Pages 控制台，为本项目添加 KV 命名空间绑定：
  - KV Namespace: hextra-blog-views（或自定义）
  - Variable name: VIEWS

## 验证
- 本地 `hugo` 构建应通过
- 部署后访问文章/文档页，观察“阅读”数字递增，并在 KV 中看到相应键值变更

