<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const router = useRouter()
const route = useRoute()

const breakpoints = useBreakpoints(breakpointsTailwind)
const hasMobileSize = breakpoints.smaller('sm')

function handleGoBack() {
    router.go(-1)
}

const links = ref([
    {
        name: '邮箱',
        link: 'yxlhsx@qq.com'
    },
    {
        name: 'GitHub',
        link: 'https://github.com/Yxlhsx'
    },
    {
        name: 'BiliBili',
        link: 'https://space.bilibili.com/31257626?spm_id_from=333.1007.0.0'
    }
])

const tags = ref([
    {
        name: 'JavaScript',
        count: 20,
        link: ''
    },
    {
        name: 'SpringBoot',
        count: 2,
        link: ''
    },
    {
        name: 'NuxtJs',
        count: 6,
        link: ''
    },
    {
        name: 'Mysql',
        count: 4,
        link: ''
    },
    {
        name: 'Java',
        count: 9,
        link: ''
    },
    {
        name: 'Flutter',
        count: 10,
        link: ''
    }
])
</script>

<template>
    <aside v-auto-animate class="px-5 sm:px-0 sm:w-72">
        <!-- 回退栏 -->
        <section
            v-if="route.path != '/'"
            class="mt-5 mr-0 sm:mr-5 p-3 rounded-lg bg-white text-base font-semibold text-center cursor-pointer"
            @click="handleGoBack"
        >
            <span class="go-back">返回上一页</span>
        </section>

        <div v-if="!(hasMobileSize && route.path != '/')" class="flex sm:block justify-between">
            <!-- 用户栏 -->
            <section class="mt-5 mr-5 p-3 max-sm:w-1/2 rounded-lg bg-white">
                <div class="flex justify-evenly items-center mb-5">
                    <img class="w-10 sm:w-16 h-10 sm:h-16" src="~assets/logo.png" alt="logo" />
                    <div class="text-center">
                        <h3 class="text-xl font-semibold">嘎嘣脆</h3>
                        <h5 class="text-[#28282899] text-sm">“努力，奋斗”</h5>
                    </div>
                </div>
                <ul class="flex justify-evenly list-none">
                    <li
                        v-for="item in links"
                        class="text-opacity-60 text-sm underline cursor-pointer"
                    >
                        <span v-if="item.link.includes('@')" @click="copy(item.link)">{{
                            item.name
                        }}</span>
                        <NuxtLink v-else :to="item.link">{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </section>

            <!-- 标签栏 -->
            <section class="mt-5 sm:mr-5 p-3 max-sm:w-1/2 rounded-lg bg-white">
                <h2 class="text-xl font-semibold text-center">标签</h2>
                <ul class="max-sm:overflow-y-scroll flex flex-wrap mt-3 max-sm:max-h-14 list-none">
                    <li
                        v-for="tag in tags"
                        class="mr-3 text-[#28282899] text-sm underline cursor-pointer"
                    >
                        {{ `#${tag.name}(${tag.count})` }}
                    </li>
                </ul>
            </section>
        </div>
    </aside>
</template>
