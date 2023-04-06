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
</script>

<template>
    <aside class="app-sidebar">
        <section
            v-show="route.path != '/'"
            style="padding-top: 10px; padding-bottom: 10px"
            class="sidebar-block"
        >
            <span class="go-back" @click="handleGoBack">返回上一页</span>
        </section>
        <!-- 用户栏 -->
        <section class="user-block sidebar-block">
            <div class="my">
                <img src="~assets/logo.png" alt="logo" />
                <div>
                    <h3>嘎嘣脆</h3>
                    <h5>“努力，奋斗”</h5>
                </div>
            </div>
            <ul class="links">
                <li v-for="item in links" class="link">
                    <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </section>

        <!-- 标签栏 -->
        <section class="tag-block sidebar-block">
            <h2>标签</h2>
            <ul class="tags">
                <li v-for="tag in tags" class="tag">{{ `#${tag.name}(${tag.count})` }}</li>
            </ul>
        </section>
    </aside>
</template>

<style lang="scss">
.app-sidebar {
    width: 280px;

    .sidebar-block {
        box-sizing: border-box;
        margin-bottom: 20px;
        padding: 20px;
        width: 100%;

        border-radius: 10px;
        background-color: #ffffff;

        text-align: center;
        font-size: 16px;
        font-weight: 600;
        color: rgba($color: #282828, $alpha: 0.8);
    }

    .go-back {
        cursor: pointer;
        text-decoration: underline;
    }
}

// 用户栏部分
.app-sidebar > .user-block {
    .my {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;

        img {
            width: 56px;
            height: 56px;
        }

        div {
            text-align: center;

            h3 {
                font-weight: 600;
                font-size: 20px;
                color: #282828;
            }

            h5 {
                font-weight: 400;
                font-size: 14px;
                color: rgba(40, 40, 40, 0.6);
            }
        }
    }

    .links {
        display: flex;
        justify-content: space-evenly;
        list-style: none;

        .link {
            font-weight: 400;
            font-size: 14px;
            text-decoration-line: underline;
            color: rgba(40, 40, 40, 0.6);
        }
    }
}

// 标签栏部分
.app-sidebar > .tag-block {
    h2 {
        font-weight: 600;
        font-size: 20px;
        color: #282828;
        text-align: center;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        list-style: none;

        .tag {
            margin-right: 10px;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            text-decoration-line: underline;
            color: rgba(40, 40, 40, 0.6);
        }
    }
}
</style>
