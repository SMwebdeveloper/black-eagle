<template>
    <div class="relative bg-white">
    <LayoutAdminNavbar @toggleSidebar="sidebarVisible = !sidebarVisible"/>
    <LayoutAdminSidebar :visible-modal="sidebarVisible" @toggleSidebar="sidebarVisible = !sidebarVisible"/>
    <section class="lg:ml-[13%] mt-[70px] px-[20px] py-[30px]">
        <slot/>
    </section>
    </div>
</template>
<script setup lang="ts">
const sidebarVisible = ref(false)
</script>