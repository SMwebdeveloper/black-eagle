<template>
  <div class="pt-[3%] flex items-start gap-x-3">
    <SharedProfileCard />
    <div class="w-4/5">
      <h2 class="text-5xl font-medium text-center text-darkColor mb-4">My results</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-1">
        <SharedCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
