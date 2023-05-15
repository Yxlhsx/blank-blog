<script setup lang="ts">
import { Article } from '~~/types/article'

const { data } = await useAsyncData('homeArticleList', () =>
    queryContent<Article>('/article').find()
)
</script>

<template>
    <div class="flex flex-col max-sm:items-center px-5 sm:px-0">
        <ArticleItem
            v-for="article in data"
            :path="article._path"
            :title="article.title"
            :create-time="article.createTime"
            :desc="article.description"
            :tags="article.tags"
        />
    </div>
</template>
