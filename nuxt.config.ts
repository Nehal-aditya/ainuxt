// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. App settings
  app: {
    baseURL: '/ainuxt/' // replace with your repo name
  },

  // 2. Compatibility
  compatibilityDate: '2024-07-11',

  // 3. CSS
  css: ['~/assets/css/main.css'],

  // 4. Devtools
  devtools: {
    enabled: true
  },

  // 5. Experimental
  experimental: {
    viewTransition: true
  },

  // 6. Modules
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/mdc',
    '@nuxthub/core',
    'nuxt-auth-utils',
    'nuxt-charts',
    'nuxt-csurf'
  ],

  // 7. MDC
  mdc: {
    headings: {
      anchorLinks: false
    },
    highlight: {
      // noApiRoute: true
      shikiEngine: 'javascript'
    }
  },

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
