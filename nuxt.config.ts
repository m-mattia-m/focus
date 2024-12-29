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
    '@nuxtjs/tailwindcss',
    '@prisma/nuxt',
  ],
  prisma: {
    autoSetupPrisma: true,
  },
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
    spotifyClientSecret: "",
    jwtSecretCert: "",
    public: {
      spotifyClientId: "",
      host: "",
    }
  },
  future: {
    compatibilityVersion: 4,
  },
})