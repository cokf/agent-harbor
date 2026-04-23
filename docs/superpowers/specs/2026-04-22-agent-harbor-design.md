# Agent Harbor Design

## Goal

做一个公开的个人内容站，兼顾博客展示和笔记检索，未来内容主要是技术笔记、经验总结、工具记录。

## Information Architecture

- 首页：品牌展示、精选内容、入口导航
- Notes：按知识库方式组织
- Blog：按文章方式组织
- About：介绍站点与作者
- Tags：统一标签入口

## Visual Direction

- 深色为主
- 蓝紫色高亮
- 带一点未来终端感，但不做过重拟物
- 首页有“驿站 / 港湾 / 信号节点”的氛围

## Technical Choice

- 用 VitePress
- 原因：
  - Markdown 内容友好
  - 文档感强，适合知识库
  - 也能兼顾博客文章
  - 部署到 Cloudflare Pages 简单

## Future Extension

- 后续可加：
  - 自动文章索引
  - 标签聚合页
  - 评论系统
  - 私有内容区
