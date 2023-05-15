<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { Article } from '~~/types/article'

interface AppNavSearchProps {
    placeholder?: string
}
const props = defineProps<AppNavSearchProps>()

// 搜索输入框实例
const searchInputEle = ref<HTMLInputElement>()

// 搜索对话框部分
const opened = ref(false)
const openSearchDialog = () => {
    opened.value = true
    nextTick(() => {
        searchInputEle.value?.focus()
    })
}
const closeSearchDialog = () => {
    opened.value = false
}
const searchBlockEle = ref()
onClickOutside(searchBlockEle, event => {
    closeSearchDialog()
})

// 搜索部分
const searchValue = ref('')
const articleList = ref<Article[]>([])
const handleQuery = async () => {
    const { data } = await useAsyncData('searchArticleList', () =>
        queryContent<Article>('/article')
            .where({
                keywords: { $contains: searchValue.value }
            })
            .find()
    )

    if (data.value) {
        articleList.value = data.value
    }
}
</script>

<template>
    <div
        class="box-border m-3 w-8/12 sm:w-96 h-10 bg-gray-100 rounded-md text-center text-gray-900 text-xl font-medium leading-10 cursor-pointer"
        @click="openSearchDialog"
    >
        搜索
    </div>
    <template v-if="opened">
        <Teleport to="body">
            <div
                class="z-[100] fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-30 backdrop-blur"
            >
                <div
                    class="overflow-auto p-4 h-[60vh] bg-white rounded-md text-center"
                    ref="searchBlockEle"
                >
                    <input
                        v-model="searchValue"
                        class="px-3 w-11/12 sm:w-96 h-10 bg-gray-100 rounded-md text-gray-900 text-xl font-normal"
                        ref="searchInputEle"
                        type="search"
                        :placeholder="props.placeholder || '请输入关键词'"
                        @keypress.enter="handleQuery"
                    />
                    <ul class="px-3 list-none text-left">
                        <li v-for="(article, index) in articleList" class="py-2">
                            <span class="no-underline">{{ index + 1 }}、</span>
                            <NuxtLink class="underline" :to="article._path">
                                {{ article.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Teleport>
    </template>
</template>
