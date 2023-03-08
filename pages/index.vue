<script setup lang="ts">
import { Article } from '~~/types/article'

const articleList = ref<Article[]>([])

const testDesc =
    '手机卡打不开了好看的话离开很多记录卡撒旦了你打开三等奖看了你的了角落里的接口理论角度看'

articleList.value = await queryContent<Article>('/article').find()

onMounted(() => {})
</script>

<template>
    <div>
        <ArticleItem
            v-for="article in articleList"
            :path="article._path"
            :title="article.title"
            :create-time="'2023-02-18'"
            :desc="testDesc"
            :tags="['Java', 'SpringBoot']"
        />
    </div>
</template>
