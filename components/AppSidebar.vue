<script setup lang="ts">
const router = useRouter()
const route = useRoute()

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

function copy(text: string) {
    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert('已复制到剪贴板！')
            })
            .catch(err => {
                console.error('复制失败：', err)
            })
    } else {
        const input = document.createElement('input')
        input.value = text
        document.body.appendChild(input)
        input.select()
        if (document.execCommand('copy')) {
            document.execCommand('copy')
            alert('已复制到剪贴板！')
        }
        document.body.removeChild(input)
    }
}
</script>

<template>
    <aside class="px-5 sm:px-0 sm:w-72">
        <!-- 回退栏 -->
        <section v-show="route.path != '/'" class="mt-5 mr-5 p-5 rounded-lg bg-white text-center">
            <span class="go-back" @click="handleGoBack">返回上一页</span>
        </section>

        <div class="flex sm:block justify-between">
            <!-- 用户栏 -->
            <section class="mt-5 mr-5 p-5 max-sm:w-1/2 rounded-lg bg-white">
                <div class="flex justify-evenly items-center mb-5">
                    <img class="w-16 h-16" src="~assets/logo.png" alt="logo" />
                    <div class="text-center">
                        <h3 class="text-xl">嘎嘣脆</h3>
                        <h5 class="text-sm">“努力，奋斗”</h5>
                    </div>
                </div>
                <ul class="flex justify-evenly list-none">
                    <li v-for="item in links" class="text-sm decoration-1">
                        <span v-if="item.link.includes('@')" @click="copy(item.link)">{{
                            item.name
                        }}</span>
                        <NuxtLink v-else :to="item.link">{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </section>

            <!-- 标签栏 -->
            <section class="mt-5 sm:mr-5 p-5 max-sm:w-1/2 rounded-lg bg-white">
                <h2 class="text-xl text-center">标签</h2>
                <ul class="overflow-y-scroll flex flex-wrap mt-3 max-h-16 list-none">
                    <li v-for="tag in tags" class="mr-2 text-sm decoration-0">
                        {{ `#${tag.name}(${tag.count})` }}
                    </li>
                </ul>
            </section>
        </div>
    </aside>
</template>
