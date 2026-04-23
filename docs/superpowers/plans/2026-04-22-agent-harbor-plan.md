# Agent Harbor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 搭一个适合公开技术笔记与博客文章的 Agent Harbor 第一版站点

**Architecture:** 以 VitePress 为核心，用 Markdown 组织内容，用自定义主题 CSS 做深色科技风包装，用导航和侧边栏同时承载博客与知识库入口。

**Tech Stack:** VitePress、Markdown、pnpm

---

### Task 1: 初始化工程文件

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `PROJECT_CONTEXT.md`
- Create: `HANDOFF.md`

- [x] 写基础 package.json
- [x] 写 .gitignore
- [x] 建项目记录文件

### Task 2: 配置 VitePress

**Files:**
- Create: `docs/.vitepress/config.mts`
- Create: `docs/.vitepress/theme/index.ts`
- Create: `docs/.vitepress/theme/custom.css`

- [ ] 配导航
- [ ] 配搜索
- [ ] 配社交与页脚
- [ ] 写深色科技风样式

### Task 3: 写首页和内容页

**Files:**
- Create: `docs/index.md`
- Create: `docs/notes/index.md`
- Create: `docs/notes/quickstart.md`
- Create: `docs/blog/index.md`
- Create: `docs/blog/first-post.md`
- Create: `docs/about/index.md`

- [ ] 写首页 hero
- [ ] 写 notes 入口
- [ ] 写 blog 入口
- [ ] 写 about 页面

### Task 4: 本地验证

**Files:**
- Modify: `HANDOFF.md`
- Modify: `PROJECT_CONTEXT.md`

- [ ] 安装依赖
- [ ] 构建验证
- [ ] 记录验证结果
