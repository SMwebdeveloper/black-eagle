<template>
    <div
      class="absolute top-[200%] right-[10%] bg-white transition-all duration-200 ease-linear shadow-sm rounded-md flex flex-col text-base"
      :class="`${props.menuVisible ? 'visible ' : 'invisible  duration-200 opacity-0'}`"
    >
      <NuxtLink
       v-for="item, i in props.selectValue"
       :key="i"
        :to="item.path"
        class="flex items-center gap-x-2 px-3 pt-2 pb-2 duration-150 hover:bg-darkColor hover:text-white rounded-t-md"
        ><IconCSS :name="item.icon" class="text-lg duration-150" />
        {{ item.title }}</NuxtLink
      >
      
    </div>
  </template>
  
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
  
  <style></style>
  