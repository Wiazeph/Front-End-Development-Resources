import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Front-End Development Resources",
  description:
    "An amazing repository where you can discover a plethora of resources related to Front-End Development, which will make your life easier.",

  locales: {
    root: {
      label: "English",
      lang: "en",

      themeConfig: {
        nav: [
          {
            text: "Introduction",
            link: "/introduction",
          },
          {
            text: "Contributors",
            link: "/contributors/",
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
              {
                text: "Certificate Programs",
                link: "/resources/certificate-programs",
              },
              {
                text: "Training and Code Battles Sites",
                link: "/resources/training-code-battles-sites",
              },
              { text: "Cheat Sheets", link: "/resources/cheat-sheets" },
              { text: "Roadmaps", link: "/resources/roadmaps" },
              { text: "Source Research", link: "/resources/source-research" },
            ],
          },
          { text: "Templates", link: "/templates" },
          { text: "Ready to Use", link: "/ready-to-use" },
          { text: "Icons", link: "/icons" },
          { text: "Colors", link: "/colors" },
          { text: "Fonts", link: "/fonts" },
          { text: "Stock Media Resources", link: "/stock-media-resources" },
          { text: "CSS Generators", link: "/css-generators" },
          { text: "Hosts", link: "/hosts" },
          { text: "APIs", link: "/api" },
          {
            text: "Extensions",
            collapsed: false,
            items: [
              {
                text: "Browser",
                link: "/extensions/browser-extensions",
              },
              {
                text: "VSCode",
                link: "/extensions/vscode-extensions",
              },
            ],
          },
        ],
        editLink: {
          pattern:
            "https://github.com/emr3rden/Front-End-Development-Resources/edit/main/docs/:path",
          text: "Edit this page on GitHub",
        },
      },
    },

    tr: {
      label: "Turkish",
      lang: "tr",
      link: "/tr",

      themeConfig: {
        nav: [
          {
            text: "Başlarken",
            link: "tr/introduction",
          },
          {
            text: "Katkıda Bulunanlar",
            link: "tr/contributors/",
          },
        ],
        sidebar: [
          {
            text: "Başlarken",
            link: "tr/introduction",
          },
          {
            text: "Kaynaklar",
            collapsed: false,
            items: [
              { text: "Dökümanlar", link: "tr/resources/documents" },
              { text: "Video Kaynakları", link: "tr/resources/videos" },
              { text: "Kurslar", link: "tr/resources/courses" },
              {
                text: "Sertifika Programları",
                link: "tr/resources/certificate-programs",
              },
              {
                text: "Pratik yapma ve Kod Yarışma Siteleri",
                link: "tr/resources/training-code-battles-sites",
              },
              { text: "Cheat Sheets", link: "tr/resources/cheat-sheets" },
              { text: "Yol Haritaları", link: "tr/resources/roadmaps" },
              { text: "Kaynak Araştırma Siteleri", link: "tr/resources/source-research" },
            ],
          },
          { text: "Hazır Şablonlar", link: "tr/templates" },
          { text: "Kullanıma Hazır Bileşenler", link: "tr/ready-to-use" },
          { text: "İkonlar", link: "tr/icons" },
          { text: "Renkler", link: "tr/colors" },
          { text: "Fontlar", link: "tr/fonts" },
          { text: "Stok Medya Kaynakları", link: "tr/stock-media-resources" },
          { text: "CSS Oluşturucuları", link: "tr/css-generators" },
          { text: "Hosts", link: "tr/hosts" },
          { text: "APIs", link: "tr/api" },
          {
            text: "Eklentiler",
            collapsed: false,
            items: [
              {
                text: "Tarayıcılar",
                link: "tr/extensions/browser-extensions",
              },
              {
                text: "VSCode",
                link: "tr/extensions/vscode-extensions",
              },
            ],
          },
        ],
        editLink: {
          pattern:
            "https://github.com/emr3rden/Front-End-Development-Resources/edit/main/docs/:path",
          text: "Bu sayfayı GitHub'da düzenleyin",
        },

      },
    },
  },

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/emr3rden/Front-End-Development-Resources",
      },
    ],
    algolia: {
      appId: "XQ4XAGI2WE",
      apiKey: "be334c3d14926be56e4500a3427cc0f9",
      indexName: "front-end-development-resources-roan",
    },
  },
});
