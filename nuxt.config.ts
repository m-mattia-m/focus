// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
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
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  vite: {
    server: {
      fs: {
        strict: false
      },
    },
    // esbuild: {
    //   drop: ["console"],
    // },
  },
  nitro: {},
  typescript: {
    typeCheck: true,
    strict: true
  },
  runtimeConfig: {
    spotifyClientId: "",
    spotifyClientSecret: "",
  },
  future: {
    compatibilityVersion: 4,
  },
})
