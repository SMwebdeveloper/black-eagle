<template>
  <div
    data-name="overlay"
    class="fixed top-0 left-0 w-full h-screen z-30 duration-100 backdrop-blur-sm bg-[rgba(0,0,0,0.5)]"
    :class="`${modalVisible ? 'visible duration-75' : 'invisible'}`"
  ></div>
  <div
    class="fixed top-[30%] left-[13%] md:top-1/3 md:left-1/3 w-[300px] lg:w-1/4 h-auto z-40 bg-darkColor text-white rounded-lg py-4 px-4"
    :class="`${modalVisible ? 'visible' : 'invisible'}`"
  >
  <h2 class="text-center text-xl font-medium mb-2">Delete the Samandar</h2>
  <div class="flex items-center justify-evenly">
    <button class="bg-red px-3 py-1 rounded-md text-lg font-medium">Delete</button>
    <button @click="$emit('closeModal')" class="bg-white text-blakc px-3 py-1 rounded-md text-lg font-medium">Cancel</button>
  </div>
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
