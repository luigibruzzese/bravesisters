// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Dog Shelter'
    }
  },
  css: ['~/assets/css/general.css'],
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: [
        './stores/**'
    ]
  }
})
