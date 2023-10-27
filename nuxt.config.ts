// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:['@pinia/nuxt','@element-plus/nuxt','@nuxtjs/tailwindcss'
],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', 'element-plus/dist/index.css',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
