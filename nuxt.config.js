export default {
    // Nuxt target
    // See https://nuxtjs.org/api/configuration-target

    target: 'server',

    // Headers of the page
    // See https://nuxtjs.org/api/configuration-head

    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS
    css: ['@/assets/css/main.css'],

    // Plugins to load before mounting the App
    // https://nuxtjs.org/guide/plugins

    plugins: [],

    // Auto import components
    // See https://nuxtjs.org/api/configuration-components

    components: {
        dirs: ['~/components', '~/components/home', '~/components/projects']
    },

    // Nuxt.js dev-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://http.nuxtjs.org
        '@nuxtjs/axios'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'http://localhost:3000/api'
    },

    router: {
        middleware: ['ssr-cookie']
    },

    /*
     ** Server Middleware
     */
    serverMiddleware: {
        '/api': '~/api'
    },

    /*
     ** For deployment you might want to edit host and port
     */
    // server: {
    //  port: 8000, // default: 3000
    //  host: '0.0.0.0' // default: localhost
    // },

    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {}
}
