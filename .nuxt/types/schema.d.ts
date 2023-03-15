import { NuxtModule } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinceau"]?: typeof import("pinceau/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tokens"]?: typeof import("@nuxt-themes/tokens").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema-compat"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["studio"]?: typeof import("@nuxthq/studio").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["docus"]?: typeof import("/Users/aliosmandelismen/Documents/frontendweb/node_modules/@nuxt-themes/docus/app/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["@nuxt-themes/docus"]?: typeof import("@nuxt-themes/docus").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["pinceau/nuxt", Exclude<NuxtConfig["pinceau"], boolean>] | ["@nuxt-themes/tokens", Exclude<NuxtConfig["tokens"], boolean>] | ["nuxt-config-schema", Exclude<NuxtConfig["nuxt-config-schema-compat"], boolean>] | ["@nuxthq/studio", Exclude<NuxtConfig["studio"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["/Users/aliosmandelismen/Documents/frontendweb/node_modules/@nuxt-themes/docus/app/module", Exclude<NuxtConfig["docus"], boolean>] | ["@nuxt-themes/docus", Exclude<NuxtConfig["@nuxt-themes/docus"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   pinceau: {
      studio: boolean,

      outputDir: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<string>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         theme: {
            dark: string,

            default: string,
         },

         preload: Array<string>,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<string>,
      },

      documentDriven: boolean,

      experimental: {
         clientDB: boolean,

         stripQueryParameters: boolean,
      },
   },

   appConfigSchema: {
      properties: {
         id: string,

         properties: {
            nuxtIcon: {
               title: string,

               description: string,

               id: string,

               properties: {
                  size: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: string,

                     type: string,
                  },

                  class: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  aliases: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: any,

                     type: string,
                  },
               },

               type: string,

               default: {
                  size: string,

                  class: string,

                  aliases: any,
               },
            },

            prose: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  copyButton: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        iconCopy: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        iconCopied: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        iconCopy: string,

                        iconCopied: string,
                     },
                  },

                  headings: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h1: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h2: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h3: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h4: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h5: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },

                  h6: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        icon: string,
                     },
                  },
               },

               type: string,

               default: {
                  copyButton: {
                     iconCopy: string,

                     iconCopied: string,
                  },

                  headings: {
                     icon: string,
                  },

                  h1: {
                     icon: string,
                  },

                  h2: {
                     icon: string,
                  },

                  h3: {
                     icon: string,
                  },

                  h4: {
                     icon: string,
                  },

                  h5: {
                     icon: string,
                  },

                  h6: {
                     icon: string,
                  },
               },
            },

            docus: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  title: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  titleTemplate: {
                     title: string,

                     description: string,

                     tags: Array<any>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  description: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  image: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  socials: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        twitter: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        github: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        facebook: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        instagram: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        youtube: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        medium: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        twitter: string,

                        github: string,

                        facebook: string,

                        instagram: string,

                        youtube: string,

                        medium: string,
                     },
                  },

                  layout: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: string,

                     type: string,
                  },

                  aside: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        level: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: number,

                           type: string,
                        },

                        collapsed: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: boolean,

                           type: string,
                        },

                        exclude: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: Array<any>,

                           type: string,

                           items: {
                              type: string,
                           },
                        },
                     },

                     type: string,

                     default: {
                        level: number,

                        collapsed: boolean,

                        exclude: Array<any>,
                     },
                  },

                  header: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        title: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        logo: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: boolean,

                           type: string,
                        },

                        showLinkIcon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: boolean,

                           type: string,
                        },

                        exclude: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: Array<any>,

                           type: string,

                           items: {
                              type: string,
                           },
                        },

                        fluid: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: boolean,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        title: string,

                        logo: boolean,

                        showLinkIcon: boolean,

                        exclude: Array<any>,

                        fluid: boolean,
                     },
                  },

                  main: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        fluid: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: boolean,

                           type: string,
                        },

                        padded: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: boolean,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        fluid: boolean,

                        padded: boolean,
                     },
                  },

                  footer: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        credits: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           tsType: string,

                           id: string,

                           properties: {
                              icon: {
                                 title: string,

                                 description: string,

                                 tags: Array<string>,

                                 id: string,

                                 default: string,

                                 type: string,
                              },

                              text: {
                                 type: string,

                                 id: string,

                                 default: string,
                              },

                              href: {
                                 type: string,

                                 id: string,

                                 default: string,
                              },
                           },

                           type: string,

                           default: {
                              icon: string,

                              text: string,

                              href: string,
                           },
                        },

                        textLinks: {
                           type: string,

                           items: {
                              type: string,

                              required: Array<string>,

                              properties: {
                                 href: {
                                    type: string,

                                    description: string,
                                 },

                                 text: {
                                    type: string,

                                    description: string,
                                 },

                                 target: {
                                    type: string,

                                    description: string,
                                 },
                              },
                           },

                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,
                        },

                        iconLinks: {
                           type: string,

                           items: {
                              type: string,

                              required: Array<string>,

                              properties: {
                                 icon: {
                                    type: string,

                                    description: string,
                                 },

                                 href: {
                                    type: string,

                                    description: string,
                                 },

                                 label: {
                                    type: string,

                                    description: string,
                                 },
                              },
                           },

                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,
                        },

                        fluid: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: boolean,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        credits: {
                           icon: string,

                           text: string,

                           href: string,
                        },

                        fluid: boolean,
                     },
                  },

                  github: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        dir: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        branch: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        repo: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        owner: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        edit: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: boolean,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        dir: string,

                        branch: string,

                        repo: string,

                        owner: string,

                        edit: boolean,
                     },
                  },
               },

               type: string,

               default: {
                  title: string,

                  titleTemplate: string,

                  description: string,

                  image: string,

                  socials: {
                     twitter: string,

                     github: string,

                     facebook: string,

                     instagram: string,

                     youtube: string,

                     medium: string,
                  },

                  layout: string,

                  aside: {
                     level: number,

                     collapsed: boolean,

                     exclude: Array<any>,
                  },

                  header: {
                     title: string,

                     logo: boolean,

                     showLinkIcon: boolean,

                     exclude: Array<any>,

                     fluid: boolean,
                  },

                  main: {
                     fluid: boolean,

                     padded: boolean,
                  },

                  footer: {
                     credits: {
                        icon: string,

                        text: string,

                        href: string,
                     },

                     fluid: boolean,
                  },

                  github: {
                     dir: string,

                     branch: string,

                     repo: string,

                     owner: string,

                     edit: boolean,
                  },
               },
            },
         },

         type: string,

         default: {
            nuxtIcon: {
               size: string,

               class: string,

               aliases: any,
            },

            prose: {
               copyButton: {
                  iconCopy: string,

                  iconCopied: string,
               },

               headings: {
                  icon: string,
               },

               h1: {
                  icon: string,
               },

               h2: {
                  icon: string,
               },

               h3: {
                  icon: string,
               },

               h4: {
                  icon: string,
               },

               h5: {
                  icon: string,
               },

               h6: {
                  icon: string,
               },
            },

            docus: {
               title: string,

               titleTemplate: string,

               description: string,

               image: string,

               socials: {
                  twitter: string,

                  github: string,

                  facebook: string,

                  instagram: string,

                  youtube: string,

                  medium: string,
               },

               layout: string,

               aside: {
                  level: number,

                  collapsed: boolean,

                  exclude: Array<any>,
               },

               header: {
                  title: string,

                  logo: boolean,

                  showLinkIcon: boolean,

                  exclude: Array<any>,

                  fluid: boolean,
               },

               main: {
                  fluid: boolean,

                  padded: boolean,
               },

               footer: {
                  credits: {
                     icon: string,

                     text: string,

                     href: string,
                  },

                  fluid: boolean,
               },

               github: {
                  dir: string,

                  branch: string,

                  repo: string,

                  owner: string,

                  edit: boolean,
               },
            },
         },
      },

      default: {
         nuxtIcon: {
            size: string,

            class: string,

            aliases: any,
         },

         prose: {
            copyButton: {
               iconCopy: string,

               iconCopied: string,
            },

            headings: {
               icon: string,
            },

            h1: {
               icon: string,
            },

            h2: {
               icon: string,
            },

            h3: {
               icon: string,
            },

            h4: {
               icon: string,
            },

            h5: {
               icon: string,
            },

            h6: {
               icon: string,
            },
         },

         docus: {
            title: string,

            titleTemplate: string,

            description: string,

            image: string,

            socials: {
               twitter: string,

               github: string,

               facebook: string,

               instagram: string,

               youtube: string,

               medium: string,
            },

            layout: string,

            aside: {
               level: number,

               collapsed: boolean,

               exclude: Array<any>,
            },

            header: {
               title: string,

               logo: boolean,

               showLinkIcon: boolean,

               exclude: Array<any>,

               fluid: boolean,
            },

            main: {
               fluid: boolean,

               padded: boolean,
            },

            footer: {
               credits: {
                  icon: string,

                  text: string,

                  href: string,
               },

               fluid: boolean,
            },

            github: {
               dir: string,

               branch: string,

               repo: string,

               owner: string,

               edit: boolean,
            },
         },
      },
   },
  }
  interface PublicRuntimeConfig {
   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         clientDB: boolean,
      },

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<string>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         theme: {
            dark: string,

            default: string,
         },

         preload: Array<string>,
      },

      wsUrl: string,

      documentDriven: {
         page: boolean,

         navigation: boolean,

         surround: boolean,

         globals: any,

         layoutFallbacks: Array<string>,

         injectPage: boolean,
      },

      host: string,

      trailingSlash: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },
  }
}