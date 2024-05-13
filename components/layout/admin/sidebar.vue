<template>
    <div class="fixed top-[5%] lg:top-[10%] pt-7 z-20 px-3 visible h-full bg-darkColor flex flex-col items-start text-white" :class="`${visibleModal ? 'visible left-0  transition-all duration-150' : 'invisible -left-full transition-all duration-150 lg:left-0 lg:visible'}`">
        <div class="lg:hidden mb-4">
          <img src="@/assets/images/user-image.png" alt="" class="w-[40px] rounded-full">
          <h4 class="tex-xl">Samandar</h4>
        </div>
        <NuxtLink @click="$emit('toggleSidebar')" to="/admin" class="text-xl  font-medium mb-3 px-2 py-0.5 text-white" exact-active-class="active-link">Users</NuxtLink>
        <NuxtLink @click="$emit('toggleSidebar')" to="/admin/challenges" class="text-xl font-medium px-2 py-0.5" exact-active-class="active-link">Challenges</NuxtLink>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    visibleModal:{
        type: Boolean,
        default: false
    }
})
</script>
<style scoped lang="css">
.active-link{ 
   width: 100%;
   background-color: rgba(255, 255, 255, 0.3);
   font-size: 20px;
   padding: 8px;
   border-radius: 8px;
   transition: all 0.3s ease-in-out;

}
</style>