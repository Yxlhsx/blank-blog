<script setup lang="ts"></script>

<template>
    <AppNav />
    <div class="sm:flex justify-center">
        <AppSidebar />
        <main class="mt-5 w-auto sm:w-5/12">
            <NuxtPage />
        </main>
    </div>
</template>

<style>
body {
    overflow: hidden;
    overflow-y: scroll;
    background-color: #f3f3f3;
}
</style>
