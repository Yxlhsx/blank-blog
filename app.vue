<script setup lang="ts"></script>

<template>
    <AppNav />
    <div class="app-container">
        <AppSidebar />
        <main>
            <NuxtPage />
        </main>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
    /* overflow: hidden; */
    background-color: #f3f3f3;
}

div.app-container {
    display: flex;
    justify-content: center;
}

.app-sidebar {
    margin: 20px 20px 0 0;
}

main {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 800px;
    min-height: calc(100vh - 60px);
}
</style>
