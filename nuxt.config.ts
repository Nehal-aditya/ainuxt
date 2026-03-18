// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. Core app settings
  app: {
    baseURL: '/ainuxt/' // replace with your repo name
  },

  // 2. Modules
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/mdc',
    '@nuxthub/core',
    'nuxt-auth-utils',
    'nuxt-charts',
    'nuxt-csurf'
  ],

  // 3. Devtools
  devtools: {
    enabled: true
  },

  // 4. CSS
  css: ['~/assets/css/main.css'],

  // 5. MDC
  mdc: {
    headings: {
      anchorLinks: false
    },
    highlight: {
      // noApiRoute: true
      shikiEngine: 'javascript'
    }
  },

  // 6. Experimental
  experimental: {
    viewTransition: true
  },

  // 7. Compatibility
  compatibilityDate: '2024-07-11',

  // 8. Nitro
  nitro: {
    experimental: {
      openAPI: true
    }
  },

  // 9. Hub
  hub: {
    db: 'sqlite',
    blob: true
  },

  // 10. Vite
  vite: {
    optimizeDeps: {
      include: ['striptags']
    }
  },

  // 11. ESLint
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
