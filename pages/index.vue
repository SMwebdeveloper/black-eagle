<script setup lang="ts">
definePageMeta({ layout: "default" });
useHead({ title: "Home page" });
</script>
<template>
  <section class="text-center pt-[8%]">
    <h2 class="text-4xl text-darkColor font-medium mb-3">WELCOME TO CYBERSPACE</h2>

    <p class="text-xl max-w-[800px] mx-auto text-center text-dark mb-3">
      Cyberspace is an educational platform on cybersecurity created with the
      aim of developing cybersecurity in Uzbekistan. On this platform, you can
      test your knowledge and improve your cybersecurity skills.
    </p>
    <NuxtLink to="/challenges" class="inline-block bg-transparent border border-blue text-blue px-4 py-2 rounded-lg duration-150 hover:bg-blue hover:text-white">
        Capture Flag
    </NuxtLink>
    <!-- <SharedLoader/> -->
  </section>
</template>
