<script lang="ts" setup>
onMounted(() => {
    const { page } = useContent()
    console.log(page.value.title)
})
</script>

<template>
    <div class="prose box-border max-sm:mx-5 p-5 sm:p-8 bg-white rounded-lg">
        <ContentDoc />
    </div>
</template>
