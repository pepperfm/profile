// https://nuxt.com/docs/api/configuration/nuxt-config} from '@egoist/tailwindcss-icons'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', 'nuxt-icon', '@nuxt/image', 'nuxt-og-image'],
  extends: ['@nuxt/ui-pro'],
  site: {
    url: 'https://pepperfm.vercel.app/',
  },
  ogImage: {
    compatibility: {
      prerender: {
        chromium: 'on-demand',
        satori: false,
      },
    },
  },
  googleFonts: {
    download: true,
    inject: true,
    base64: true,
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Karla: {
        wght: [400, 600, 700],
        ital: [200, 400, 600, 700],
      },
    },
  },
})
