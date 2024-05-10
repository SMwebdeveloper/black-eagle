<template>
  <div
    data-name="overlay"
    class="fixed top-0 left-0 w-full h-screen z-30 duration-100 backdrop-blur-sm bg-[rgba(0,0,0,0.5)]"
    :class="`${modalVisible ? 'visible duration-75' : 'invisible'}`"
  ></div>
  <div
    class="fixed top-[30%] left-[13%] md:top-1/3 md:left-1/3 w-[300px] lg:w-1/4 h-auto z-40 bg-white rounded-lg py-4 px-4"
    :class="`${modalVisible ? 'visible' : 'invisible'}`"
  >
  
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  modalVisible: {
    type: Boolean,
    default: false,
  },
});
</script>
