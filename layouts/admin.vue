<template>
  <div class="relative bg-white">
    <LayoutAdminNavbar @toggleSidebar="sidebarVisible = !sidebarVisible" />
    <LayoutAdminSidebar
      :visible-modal="sidebarVisible"
      @toggleSidebar="sidebarVisible = !sidebarVisible"
    />
    <section class="lg:ml-[13%] mt-[70px] px-[20px] py-[30px]">
      <SharedLoader v-if="isLoadingStore.isLoading" />
      <div v-else>
        <slot />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useChallengeStore } from '~/store/challenge';


const sidebarVisible = ref(false);
const userStore = useAuthStore();
const challengeStore = useChallengeStore()
const isLoadingStore = useLoadingStore();

onMounted(async () => {
  await userStore.getUsers();
  await userStore.getUser()
  await challengeStore.getChallenges('admin')
  isLoadingStore.set(false);
});
</script>
