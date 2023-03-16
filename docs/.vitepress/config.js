import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Front-End Development Resources",
  description:
    "An amazing repository where you can discover a plethora of resources related to Front-End Development, which will make your life easier.",
  themeConfig: {
    nav: [
      {
        text: "Introduction",
        link: "/introduction",
      },
      {
        text: "Team",
        link: "/team/",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "/introduction",
      },
      {
        text: "Resources",
        collapsed: false,
        items: [
          { text: "Document Resources", link: "/resources/documents" },
          { text: "Video Resources", link: "/resources/videos" },
          { text: "Courses", link: "/resources/courses" },
          { text: "Certificate Programs", link: "/resources/certificate-programs" },
          { text: "Training and Code Battles Sites", link: "/resources/training-code-battles-sites" },
          { text: "Source Research", link: "/resources/source-research" },
          { text: "Cheat Sheets", link: "/resources/cheat-sheets" },
          { text: "Roadmaps", link: "/resources/roadmaps" },
          { text: "Templates", link: "/resources/templates" },
        ],
      },
      {
        text: "Team",
        link: "/team/",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/emr3rden/Front-End-Development-Resources",
      },
    ],
    editLink: {
      pattern:
        "https://github.com/emr3rden/Front-End-Development-Resources/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
