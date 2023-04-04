import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Front-End Development Resources",
  description:
    "An amazing repository where you can discover a plethora of resources related to Front-End Development, which will make your life easier.",

  lastUpdated: true,

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
              { text: "Documents", link: "/resources/documents" },
              { text: "Videos", link: "/resources/videos" },
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
              {
                text: "Resource Search Sites",
                link: "/resources/resource-search",
              },
            ],
          },
          { text: "Libraries and Plugins", link: "/libraries-plugins" },
          { text: "Ready to Use", link: "/ready-to-use" },
          { text: "Templates", link: "/templates" },
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
              { text: "Videolar", link: "tr/resources/videos" },
              { text: "Kurslar", link: "tr/resources/courses" },
              {
                text: "Sertifika Programları",
                link: "tr/resources/certificate-programs",
              },
              {
                text: "Pratik Yapma ve Kod Yarıştırma Siteleri",
                link: "tr/resources/training-code-battles-sites",
              },
              { text: "Cheat Sheets", link: "tr/resources/cheat-sheets" },
              { text: "Yol Haritaları", link: "tr/resources/roadmaps" },
              {
                text: "Kaynak Arama Siteleri",
                link: "tr/resources/resource-search",
              },
            ],
          },
          { text: "Kütüphaneler ve Eklentiler", link: "tr/libraries-plugins" },
          { text: "Kullanıma Hazır Bileşenler", link: "tr/ready-to-use" },
          { text: "Hazır Şablonlar", link: "tr/templates" },
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
      appId: "NO1120J46I",
      apiKey: "61465e950c739127c35c71ec7abba88b",
      indexName: "frontresources",
    },
  },
});
