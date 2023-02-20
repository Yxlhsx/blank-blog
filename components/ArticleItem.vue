<script setup lang="ts">
interface ArticleItemProps {
    path?: string
    title?: string
    createTime: string
    desc: string
    tags: string[]
}

const props = defineProps<ArticleItemProps>()
</script>

<template>
    <article class="article-item">
        <NuxtLink :to="props.path">{{ props.title }}</NuxtLink>
        <h5>{{ props.createTime }}</h5>
        <p>{{ props.desc }}</p>
        <ul class="tags">
            <li v-for="tag in props.tags" class="tag">{{ tag }}</li>
        </ul>
    </article>
</template>

<style>
article.article-item {
    box-sizing: border-box;
    margin-bottom: 20px;
    padding: 10px;
    height: 140px;
    background-color: #ffffff;
    border-radius: 10px;
}

ul.tags {
    display: flex;
    list-style: none;
}

ul.tags > li.tag:not(:last-child) {
    margin-right: 20px;
}
</style>
