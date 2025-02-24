// https://nuxt.com/docs/api/configuration/nuxt-config} from '@egoist/tailwindcss-icons'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-og-image',
    "@nuxt/icon"
  ],
  extends: ['@nuxt/ui-pro'],
  site: {
    url: 'https://pepperfm.com/',
  },
  compatibilityDate: '2024-07-29',
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
