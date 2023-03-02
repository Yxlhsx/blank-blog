<script setup lang="ts">
onMounted(async () => {
    console.log(
        await queryContent('/')
            .where({ keywords: { $contains: 'Quarkus' } })
            .find()
    )
})
</script>

<template>
    <div class="app-nav-search">搜索</div>
</template>

<style lang="scss">
.app-nav-search {
    width: 436px;
    height: 38px;
    left: 476px;
    top: 11px;

    background: #f3f3f3;
    border-radius: 10px;

    text-align: center;
    line-height: 38px;
    font-weight: 600;
    font-size: 20px;
    color: rgba(40, 40, 40, 0.8);
}
</style>
