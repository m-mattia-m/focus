// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Focus',

      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
  ui: {
    // colorMode: false,
    devtools: {
      enabled: true
    },
  },
  // vite: {
  //   esbuild: {
  //     drop: ["console"],
  //   },
  // },
  nitro: {
    // esbuild: {
    //   options: {
    //     drop: ["console"],
    //   },
    // },
    experimental: {
      database: true
    },
    database: {
      default: {
        connector: 'sqlite',
        options: {name: 'db'}
      },
    },
  },
  typescript: {
      typeCheck: true,
      strict: true
  },
  runtimeConfig: {
    spotifyAccessToken: ""
  },
  future: {
    compatibilityVersion: 4,
  },
})
