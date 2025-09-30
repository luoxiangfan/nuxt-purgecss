
import { defineNuxtModule } from '@nuxt/kit'
import { join, isAbsolute } from 'pathe'
import { DEFAULTS, ModuleOptions } from './config'

export type { ModuleOptions }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-purgecss',
    configKey: 'purgecss',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: (nuxt) => {
    const enabled = !nuxt.options.dev
    return { ...DEFAULTS, enabled }
  },
  setup ({ enabled, ...purgecssOptions }, nuxt) {
    if (!enabled) {
      const msg = `Purgecss is not enabled!${nuxt.options.dev ? ' Likely because you are in dev mode' : ''}`
      console.info(msg)
      return
    }

    purgecssOptions.content = purgecssOptions.content?.map(p => isAbsolute(p as string) ? p : join(nuxt.options.srcDir, p as string))

    if (!nuxt.options.postcss.plugins || !Object.keys(nuxt.options.postcss.plugins).length) {
      nuxt.options.postcss.plugins = {}
    }

    nuxt.options.postcss.plugins['@fullhuman/postcss-purgecss'] = purgecssOptions
  }
})
