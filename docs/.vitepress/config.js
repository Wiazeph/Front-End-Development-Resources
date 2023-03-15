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
  },
});
