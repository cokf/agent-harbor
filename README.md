# Agent Harbor

一个偏知识库的个人博客站。

- 内容托管：GitHub
- 部署目标：Cloudflare Pages
- 站点框架：VitePress

## 本地启动

```powershell
cd /d D:\codex\项目\Agent驿站\agent-harbor
pnpm install
pnpm docs:dev
```

## 构建

```powershell
pnpm docs:build
```

构建输出目录：

- `docs/.vitepress/dist`

## Cloudflare Pages 部署参数

- Framework preset: `None`
- Build command: `pnpm docs:build`
- Build output directory: `docs/.vitepress/dist`
- Node.js version: `20` 或更高

## 当前结构

- `docs/index.md`：首页
- `docs/notes/`：知识库
- `docs/blog/`：博客
- `docs/about/`：关于页
- `docs/.vitepress/`：站点配置和主题
