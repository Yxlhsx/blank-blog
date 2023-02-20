<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <aside class="app-sidebar">
        <section v-show="route.path != '/'" class="user-info sidebar-block">
            <span>返回</span>
        </section>
        <section class="user-info sidebar-block"></section>
        <section class="tag sidebar-block"></section>
    </aside>
</template>

<style>
aside {
    width: 280px;
}

aside > section.sidebar-block {
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
    background-color: #ffffff;
    border-radius: 10px;
}
</style>
