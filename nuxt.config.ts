// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/site/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/logo.svg",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
