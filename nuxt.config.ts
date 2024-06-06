// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        esbuild: {
            options: {
                target: 'esnext'
            }
        }
    },
    runtimeConfig: {
      supabaseUrl: process.env.NUXT_SUPABASE_URL,
      supabaseKey: process.env.NUXT_SUPABASE_KEY
    },

    devtools: {enabled: true},
    app: {
        head: {
            title: 'Brave Sisters',
            script: [
                {}
            ]
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
