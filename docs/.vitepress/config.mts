import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agent Harbor',
  description: 'Notes, tools, and signals.',
  cleanUrls: true,
  lastUpdated: true,
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Agent Harbor',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      '/notes/': [
        {
          text: 'Notes',
          items: [
            { text: '总览', link: '/notes/' },
            { text: '快速开始', link: '/notes/quickstart' }
          ]
        }
      ],
      '/blog/': [
        {
          text: 'Blog',
          items: [
            { text: '文章索引', link: '/blog/' },
            { text: '第一篇文章', link: '/blog/first-post' }
          ]
        }
      ],
      '/about/': [
        {
          text: 'About',
          items: [{ text: '站点说明', link: '/about/' }]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    footer: {
      message: 'Built for notes, tools, and long-term recall.',
      copyright: '© 2026 Agent Harbor'
    },
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
