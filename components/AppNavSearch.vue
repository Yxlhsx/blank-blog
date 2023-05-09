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
    articleList.value = await queryContent<Article>('/')
        .where({ keywords: { $contains: searchValue.value } })
        .find()
}
</script>

<template>
    <div>
        <div
            class="m-3 w-64 h-10 bg-gray-100 rounded-md text-center text-gray-900 text-lg leading-10 cursor-pointer"
            @click="openSearchDialog"
        >
            搜索
        </div>
        <template v-if="opened">
            <Teleport to="body">
                <div
                    class="z-[100] fixed top-0 left-0 flex justify-center w-screen h-screen bg-black bg-opacity-30 backdrop-blur"
                >
                    <div
                        class="overflow-auto mt-10 p-10 max-h-[80vh] bg-white rounded-md"
                        ref="searchBlockEle"
                    >
                        <input
                            v-model="searchValue"
                            class="w-96"
                            ref="searchInputEle"
                            type="text"
                            :placeholder="props.placeholder || '请输入关键词'"
                            @keypress.enter="handleQuery"
                        />
                        <ul class="search-article-list">
                            <li v-for="(article, index) in articleList" class="search-article-item">
                                <span style="text-decoration: none">{{ index + 1 }}、</span>
                                <NuxtLink :to="article._path">
                                    {{ article.title }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Teleport>
        </template>
    </div>
</template>

<!-- <style>
$search-input-width: 400px;
$search-dialog-padding: 20px;
$search-dialog-position-left: $search-input-width + ($search-dialog-padding * 2);

.app-nav-search {
    width: $search-input-width;
    height: 38px;
    left: 476px;
    top: 11px;

    cursor: pointer;
    background-color: #f3f3f3;
    border-radius: 10px;

    text-align: center;
    line-height: 38px;
    font-weight: 600;
    font-size: 20px;
    color: rgba(40, 40, 40, 0.6);
    user-select: none;
}

.app-nav-search-dialog {
    z-index: 100;
    position: fixed;
    top: 100px;
    left: calc(50% - ($search-dialog-position-left / 2));
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-sizing: border-box;
    padding: $search-dialog-padding;

    border-radius: 10px;
    background-color: #f3f3f3;

    input {
        box-sizing: border-box;
        padding: 0 10px;
        width: $search-input-width;
        height: 40px;

        border: none;
        border-radius: 10px;

        font-size: 20px;
        font-weight: 600;
        color: rgba($color: #282828, $alpha: 0.8);
    }

    .search-article-list {
        list-style: none;

        & > :nth-child(1) {
            margin-top: 16px;
        }

        .search-article-item {
            padding: 5px 0;
        }

        .search-article-item,
        .search-article-item > a {
            font-size: 20px;
            font-weight: 600;
            color: rgba($color: #282828, $alpha: 0.8);
        }
    }
}

.app-nav-search-mask {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgba(40, 40, 40, 0.6);
}
</style> -->
