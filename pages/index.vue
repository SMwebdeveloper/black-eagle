<script setup lang="ts">
definePageMeta({layout: 'default'})
useHead({title: 'Home page'})
</script>
<template>
    <section>
        <h2>Home page</h2>
         <NuxtLink to="/auth">Auth page</NuxtLink>
    </section>
</template>