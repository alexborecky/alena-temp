
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Alena Doláková - Actress',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Showreel and portfolio showing work of cinematogrpaher Nelisa Alcalde' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href: 'https://fonts.googleapis.com/css2?family=Cinzel&display=swap', rel: 'stylesheet'},
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "https://player.vimeo.com/api/player.js",
      },
    ]
  },
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },  
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/_layouts.scss',
    '~/assets/scss/_typography.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/uiKit.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content'
  ],

  styleResources: {
    scss: [
        '~/assets/scss/_colours.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-vimeo-player'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
