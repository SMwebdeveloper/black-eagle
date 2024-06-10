<template>
  <div
    v-for="(item, i) in challenges"
    :key="i"
    class="bg-white h-[200px] rounded-lg shadow-lg"
  >
    <NuxtLink
      :to="`/challenge/${item?.id}`"
      class="w-full h-full flex flex-col items-center justify-center"
    >
      <h3 class="text-xl text-darkColor font-semibold">{{ item?.title }}</h3>
      <h6 class="text-lg text-darkColor font-medium">{{ item?.dificult }}:{{ item?.score }}</h6>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  challenges:{
    type:Array,
    required: true
  }
})
</script>
