// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
  devtools: { enabled: false },
  css: ["~/assets/css/main.css", "element-plus/dist/index.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
  },
});
