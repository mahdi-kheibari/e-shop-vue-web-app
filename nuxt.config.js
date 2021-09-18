import 'dotenv/config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'e-shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/scss/theme.scss',
      '@/assets/css/swiper.css',
      '@/node_modules/swiper/swiper-bundle.min.css',
      '@/assets/css/aside.css',
      '@/assets/css/otherIcons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      '@/plugins/bootstrap-vue.js',
      '@/plugins/vue-toastify.js',
      '@/plugins/clickOutside.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/i18n'
  ],
  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/auth/signed-in'
    },
    strategies: {
      local: false,
      auth0: {
        domain: 'dev-9vtpsxjd.us.auth0.com',
        client_id: process.env.AUTH0_CLIENT_ID
      }
    }
  },
  i18n:{
    locales: [
        {
            name:'English',
            code:'en',
            file:'en.js',
            dir:'ltr'
        },
        {
            name:'Persian',
            code:'fa',
            file:'fa.js',
            dir:'rtl'
        }
    ],
    defaultLocale: 'en',
    langDir: 'lang/',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      babel:{
        plugins:[["@babel/plugin-proposal-private-property-in-object", { "loose": true }]]
      }
  }
}
