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
        <NuxtLink class="article-item-title" :to="props.path">{{ props.title }}</NuxtLink>
        <h5 class="article-item-create-time">{{ props.createTime }}</h5>
        <p class="article-item-desc">{{ props.desc }}</p>
        <ul class="article-item-tags">
            <li v-for="tag in props.tags" class="article-item-tag">#{{ tag }}</li>
        </ul>
    </article>
</template>

<style>
article.article-item {
    box-sizing: border-box;
    margin-bottom: 20px;
    padding: 20px;
    min-height: 140px;
    background-color: #ffffff;
    border-radius: 10px;
}

.article-item-title {
    font-weight: 600;
    font-size: 22px;
    color: #282828;
}

.article-item-create-time {
    margin: 10px 0;
    font-weight: 400;
    font-size: 14px;
    color: rgba(40, 40, 40, 0.25);
}

.article-item-desc {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 16px;
    color: rgba(40, 40, 40, 0.8);
}

ul.article-item-tags {
    display: flex;
    list-style: none;
}

ul.article-item-tags > li.article-item-tag {
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    color: rgba(40, 40, 40, 0.6);
}

ul.article-item-tags > li.article-item-tag:not(:last-child) {
    margin-right: 20px;
}
</style>
