
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'
import cfg0 from "/Users/aliosmandelismen/Documents/frontendweb/app.config"
import cfg1 from "/Users/aliosmandelismen/Documents/frontendweb/node_modules/@nuxt-themes/docus/app.config"
import cfg2 from "/Users/aliosmandelismen/Documents/frontendweb/node_modules/@nuxt-themes/typography/app.config"
import cfg3 from "/Users/aliosmandelismen/Documents/frontendweb/node_modules/@nuxt-themes/elements/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0, typeof cfg1, typeof cfg2, typeof cfg3]>

type MergedAppConfig<Resolved extends Record<string, any>, Custom extends Record<string, any>> = {
  [K in keyof Resolved]: K extends keyof Custom
    ? Custom[K] extends Record<string, any>
      ? Resolved[K] extends Record<string, any>
        ? MergedAppConfig<Resolved[K], Custom[K]>
        : Exclude<Custom[K], undefined>
      : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
