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
          {
            text: "Tools",
            collapsed: false,
            items: [
              { text: "CSS Generators", link: "/tools/css-generators" },
              { text: "Ready to Use", link: "/tools/ready-to-use" },
              { text: "Hosts", link: "/tools/hosts" },
              { text: "APIs", link: "/tools/api" },
            ],
          },
          {
            text: "Assets",
            collapsed: false,
            items: [
              {
                text: "Libraries and Plugins",
                link: "/assets/libraries-plugins",
              },
              { text: "Templates", link: "/assets/templates" },
              { text: "Icons", link: "/assets/icons" },
              { text: "Colors", link: "/assets/colors" },
              { text: "Fonts", link: "/assets/fonts" },
              {
                text: "Stock Media Resources",
                link: "/assets/stock-media-resources",
              },
            ],
          },
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
          {
            text: "Useful Sections",
            collapsed: false,
            items: [
              {
                text: "CV / Resume Builders",
                link: "/useful-sections/cv-resume-builders",
              },
              {
                text: "Code Snippets Image Generators",
                link: "/useful-sections/code-snippets",
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
          {
            text: "Araçlar",
            collapsed: false,
            items: [
              { text: "CSS Oluşturucuları", link: "tr/tools/css-generators" },
              {
                text: "Kullanıma Hazır Bileşenler",
                link: "tr/tools/ready-to-use",
              },
              { text: "Hosts", link: "tr/tools/hosts" },
              { text: "APIs", link: "tr/tools/api" },
            ],
          },
          {
            text: "Assets/Varlıklar",
            collapsed: false,
            items: [
              {
                text: "Kütüphaneler ve Eklentiler",
                link: "tr/assets/libraries-plugins",
              },
              { text: "Hazır Şablonlar", link: "tr/assets/templates" },
              { text: "İkonlar", link: "tr/assets/icons" },
              { text: "Renkler", link: "tr/assets/colors" },
              { text: "Fontlar", link: "tr/assets/fonts" },
              {
                text: "Stok Medya Kaynakları",
                link: "tr/assets/stock-media-resources",
              },
            ],
          },
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
          {
            text: "Faydalı / Yararlı Bölümler",
            collapsed: false,
            items: [
              {
                text: "Özgeçmiş Oluşturucular",
                link: "tr/useful-sections/cv-resume-builders",
              },
              {
                text: "Kod Parçası Görüntüsü Oluşturucular",
                link: "tr/useful-sections/code-snippets",
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

  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-F1Y2DN3M4G",
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-F1Y2DN3M4G');
    `,
    ],
  ],
});
