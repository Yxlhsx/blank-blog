<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const articleList = ref<ParsedContent[]>([])

onMounted(async () => {
    articleList.value = await queryContent('/article').find()
    console.log(articleList.value)
})

const testDesc =
    '手机卡打不开了好看的话离开很多记录卡撒旦了你打开三等奖看了你的了角落里的接口理论角度看'

const router = useRouter()
function asd() {
    router.push('/article/0001')
}
</script>

<template>
    <button @click="asd">asd</button>
    <ArticleItem
        v-for="article in articleList"
        :path="article._path"
        :title="article.title"
        :create-time="'2023-02-18'"
        :desc="testDesc"
        :tags="['Java', 'SpringBoot']"
    />
    <NuxtLink to="/my">我的</NuxtLink>
    <NuxtLink to="/article">文章</NuxtLink>
</template>
