<template lang="">
    <div class="fixed left-[39%] mx-auto rounded-lg bg-white w-[300px] shadow-lg px-2 py-3" 
    :class="`${props.alertVisible ? 'visible top-[2%]  duration-200' : 'invisible  duration-200 -top-full opacity-0'}`">
       <h2 class="text-red font-medium">Please enter the details completely</h2>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
  alertVisible:{
    type: Boolean,
    default: false
  }    
})
console.log(props.alertVisible)
</script>
<style lang="">

</style>