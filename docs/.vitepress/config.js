import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Development Resources",
  description: "Here you can find resources, tools, extensions and everything else about 'Front-End Development'",
  themeConfig: {
    sidebar: [
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'Document Resources', link: "/resources/" },
          { text: 'Video Resources', link: "/resources/videos" },
        ]
      },
      {
        text: 'Team',
        link: "/team/"
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/emr3rden/Front-End-Development-Resources' },
    ],
    editLink: {
      pattern: 'https://github.com/emr3rden/Front-End-Development-Resources/edit/main/README.md',
      text: 'Edit this page on GitHub'
    }
  }
})