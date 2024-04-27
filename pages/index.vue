<script setup lang="ts">
definePageMeta({layout: 'default'})
useHead({ title: 'Home page'
 })



</script>
<template>
    <section class=" h-screen">
        <h2>Home page</h2>
         <NuxtLink to="/auth">Auth page</NuxtLink>

         <SharedLoader/>
    </section>
</template>