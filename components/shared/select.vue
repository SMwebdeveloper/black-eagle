<script setup lang="ts">
const props = defineProps({
  menuVisible: {
    type: Boolean,
    default: false,
  },
  selectValue: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div data-name="overlay" v-if="menuVisible" class="hidden lg:block lg:fixed top-0 left-0 w-full h-full z-10"></div>
  <div
    class="lg:absolute top-0 left-0 lg:top-[200%] lg:right-[10%] h-0 lg:w-[150px]  lg:h-auto bg-lightColor lg:bg-white transition-all z-20 duration-200 ease-linear shadow-inner lg:shadow-sm  flex flex-col text-base"
    :class="`${
      props.menuVisible ? 'visible h-auto ' : 'invisible h-0  duration-200 opacity-0'
    }`"
  >
    <NuxtLink
      v-for="(item, i) in props.selectValue"
      :key="i"
      :to="item.path"
      @click="$emit('remove')"
      class="flex items-center gap-x-2 px-3 pt-2 pb-2 duration-150 hover:bg-darkColor hover:text-white"
      ><IconCSS :name="item.icon" class="text-lg duration-150" />
      {{ item.title }}</NuxtLink
    >
  </div>
</template>

<style></style>
