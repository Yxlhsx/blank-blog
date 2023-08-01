<script setup lang="ts">
const tagList = ref(['Java', 'JavaScript', 'Flutter', 'Kotlin'])
</script>

<template>
    <div class="flex">
        <aside class="flex justify-center pt-[10%] w-60">
            <ul>
                <li v-for="item in tagList" class="mb-14 text-lg last:mb-0">#{{ item }}</li>
            </ul>
        </aside>
        <main class="pt-[5%] px-14">
            <NuxtPage />
        </main>
    </div>
</template>

<style lang="scss"></style>
