<script setup lang="ts">
const articleList = 10
</script>

<template>
    <ArticleItem v-for="article in articleList" />
    <!-- <NuxtLink to="/my">我的</NuxtLink>
    <NuxtLink to="/article">文章</NuxtLink> -->
</template>
