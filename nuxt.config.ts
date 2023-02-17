// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        baseURL: '/blank-blog',
        head: { title: '空白博客' }
    },
    alias: {
        '@': '/<rootDir>'
    },
    modules: ['@nuxt/content']
})