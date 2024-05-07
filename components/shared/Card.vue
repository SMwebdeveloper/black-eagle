<template>
  <div
    v-for="(item, i) in 10"
    :key="i"
    class="bg-white h-[200px] rounded-lg shadow-lg"
  >
    <NuxtLink
      :to="`/challenge/${i}`"
      class="w-full h-full flex flex-col items-center justify-center"
    >
      <h3 class="text-xl text-darkColor font-semibold">JavaScript</h3>
      <h6 class="text-lg text-darkColor font-medium">Easy:200</h6>
    </NuxtLink>
  </div>
</template>
