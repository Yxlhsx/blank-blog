<template>
    <Body class="overflow-hidden overflow-y-scroll bg-[#f3f3f3] text-[#282828]">
        <AppNav />
        <div class="sm:flex justify-center">
            <AppSidebar />
            <main class="mt-5 pb-10 w-auto sm:w-5/12">
                <NuxtPage />
            </main>
        </div>
        <footer class="pb-2 text-center underline">
            <NuxtLink href="https://beian.miit.gov.cn/">湘ICP备20003316号</NuxtLink>
        </footer>
    </Body>
</template>
