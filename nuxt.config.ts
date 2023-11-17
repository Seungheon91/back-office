// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
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
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },
});
