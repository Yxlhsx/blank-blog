// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        buildAssetsDir: '/static/',
        head: { title: '空白博客' }
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    content: {
        highlight: {
            theme: 'one-dark-pro'
        }
    }
})
