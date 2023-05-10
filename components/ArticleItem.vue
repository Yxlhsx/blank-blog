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
    <article class="box-border mb-5 p-5 max-sm:w-full min-h-[140px] bg-white rounded-xl">
        <NuxtLink class="font-semibold text-xl" :to="props.path">{{ props.title }}</NuxtLink>
        <h5 class="text-sm font-normal">{{ props.createTime }}</h5>
        <p class="mb-2 text-base font-normal">{{ props.desc }}</p>
        <ul class="flex list-none">
            <li v-for="tag in props.tags" class="article-item-tag">#{{ tag }}</li>
        </ul>
    </article>
</template>
