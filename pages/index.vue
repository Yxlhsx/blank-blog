<script setup lang="ts">
import { Article } from '~~/types/article'

const articleList = ref<Article[]>([])
articleList.value = await queryContent<Article>('/article').find()
</script>

<template>
    <div>
        <ArticleItem
            v-for="article in articleList"
            :path="article._path"
            :title="article.title"
            :create-time="article.createTime"
            :desc="article.description"
            :tags="article.tags"
        />
    </div>
</template>
