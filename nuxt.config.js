import createMeta from "./service/meta"

const pkg = require('./package')

module.exports = {
  mode: 'universal',
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'PHPerKaigi 2019',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...createMeta(),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fugaz+One'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}
    ]
  },




  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "~assets/scss/common.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios"
  ],

  axios: {
    baseURL: "https://fortee.jp/phperkaigi-2019/api/",
    debug: process.env.NODE_ENV !== "production"
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.yml$/,
        use: ['json-loader', 'yaml-loader']
      })
    }
  }
}
