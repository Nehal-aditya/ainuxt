// nuxt.config.ts
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/mdc',
    '@nuxthub/core',
    'nuxt-auth-utils',
    'nuxt-charts',
    'nuxt-csurf'
  ],

  css: ['~/assets/css/main.css'],

  mdc: {
    headings: { anchorLinks: false },
    highlight: { shikiEngine: 'javascript' }
  },

  experimental: { viewTransition: true },

  compatibilityDate: '2024-07-11',

  nitro: {
    experimental: { openAPI: true }
  },

  hub: { db: 'sqlite', blob: true },

  vite: {
    optimizeDeps: { include: ['striptags'] }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  //Add this for GitHub Pages
  app: {
    baseURL: '/ainuxt/'   // replace with your repo name
  }
})
