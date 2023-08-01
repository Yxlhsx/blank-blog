<script setup lang="ts">
const slots = defineSlots()
console.log(slots.default(), 1)

onMounted(() => {
    console.log(slots.default(), 2)

    console.log(slots.default()[0].props.code)
})
</script>

<template>
    <div class="relative">
        <div class="absolute right-2 top-1 select-none cursor-pointer">复制</div>
        <ContentSlot :use="$slots.default" unwrap="pre" />
    </div>
</template>
