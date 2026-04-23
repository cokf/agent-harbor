# Project Context

## Project Name

Agent Harbor

## Folder Mapping

- 外层目录：`D:\codex\项目\Agent驿站`
- 内层项目：`D:\codex\项目\Agent驿站\agent-harbor`

## Purpose

搭一个公开站，形态是“博客 + 笔记混合，但偏知识库”，后续内容放 GitHub，部署到 Cloudflare Pages。

## Current Objective

先完成第一版站点骨架：
- 首页
- Notes
- Blog
- About
- 标签入口
- 本地搜索
- 深色科技风外观

## Tech Stack

- VitePress
- Markdown
- 自定义 CSS 主题

## Important Files

- `package.json`
- `docs/.vitepress/config.mts`
- `docs/.vitepress/theme/index.ts`
- `docs/.vitepress/theme/custom.css`
- `docs/index.md`
- `docs/notes/index.md`
- `docs/blog/index.md`
- `docs/about/index.md`

## Run Commands

```powershell
cd /d D:\codex\项目\Agent驿站\agent-harbor
pnpm install
pnpm docs:dev
pnpm docs:build
```

## Deployment Notes

- GitHub 用来存内容和版本
- Cloudflare Pages 用来部署
- 根据 VitePress 官方文档：
  - Build Command: `npm run docs:build`
  - Output Directory: `docs/.vitepress/dist`
  - Node Version: `20+`

## Visual Direction

- 深色背景
- 蓝紫霓虹点缀
- 卡片式首页
- 文档型侧边栏 + 博客入口
- 整体偏“科技驿站 / 信号港湾”


## Verification Log

- `pnpm install` 已通过
- `pnpm docs:build` 已通过
- 构建产物已确认存在于：
  - `docs/.vitepress/dist/index.html`
  - `docs/.vitepress/dist/about/index.html`
  - `docs/.vitepress/dist/assets/*`


## 2026-04-22 GitHub Repo Create Attempt

- 已验证 PAT 可读取当前用户信息，实际 GitHub 账号：`cokf`
- 读取 `GET /user/repos` 成功，但返回空数组
- 创建仓库 `POST /user/repos` 返回：`403 Resource not accessible by personal access token`
- 结论：当前 PAT **可鉴权，但没有创建仓库权限**


## GitHub Status

- 已创建远程仓库：`https://github.com/cokf/agent-harbor`
- 默认分支：`main`
- 已完成首次推送：`feat: initialize Agent Harbor site`
