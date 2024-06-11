<template>
  <div class="relative bg-white">
    <LayoutAdminNavbar @toggleSidebar="sidebarVisible = !sidebarVisible" />
    <LayoutAdminSidebar
      :visible-modal="sidebarVisible"
      @toggleSidebar="sidebarVisible = !sidebarVisible"
    />
    <section class="lg:ml-[13%] mt-[70px] px-[20px] py-[30px]">
      <SharedLoader v-if="loaderStore.isLoading" />
      <div v-else>
        <slot />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useChallengeStore } from '~/store/challenge';


const sidebarVisible = ref(false);
const challengeStore = useChallengeStore()

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/firebase/firebase";
import {useAuthStore} from "~/store/users"
import { useLoadingStore } from "~/store/loading";

const authStore = useAuthStore()
const loaderStore = useLoadingStore()
onBeforeMount(async () => {
  await onAuthStateChanged(auth, (user:any) => {
    if(user) {
       localStorage.setItem('token', user.uid)
    }
  })
  await authStore.getUsers()
  await authStore.getUser()
  await challengeStore.getChallenges('admin')
  loaderStore.set(false)
})
</script>
