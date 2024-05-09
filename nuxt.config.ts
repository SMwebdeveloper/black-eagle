// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: ["nuxt-icon", "@pinia/nuxt"],
  pinia:{storesDirs:["./store/**"]},
  app: {
  head: {
    link: [
      {rel: 'icon', type: 'image/svg+xml', href: "/favicon.svg"}
    ]
  }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
