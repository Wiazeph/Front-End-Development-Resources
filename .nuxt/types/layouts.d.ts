import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "page"
declare module "/Users/aliosmandelismen/Documents/frontendweb/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}