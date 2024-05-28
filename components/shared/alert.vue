<template lang="">
    <div class="fixed  mx-auto rounded-lg bg-white w-[250px] lg:w-1/4 z-50 shadow-lg px-2 py-3" 
    :class="`${props.alertVisible ? 'visible top-[2%]  duration-200' : 'invisible  duration-200 -top-full opacity-0'}`">
       <h2 class="text-red text-sm md:text-base font-medium">{{props.text}}</h2>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
  alertVisible:{
    type: Boolean,
    default: false
  },
  text: {
    type: String,
     required: true
  }
})
console.log(props.alertVisible)
</script>
<style lang="">

</style>