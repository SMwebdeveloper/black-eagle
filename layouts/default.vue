<template>
  <div class="bg-lightColor min-h-screen flex flex-col sticky-layout">
    <LayoutNavbar />
    <main
      class="max-w-[1400px] w-full flex-1 mx-auto px-3 md:px-5 2xl:px-7 pb-3 overflow-x-hidden"
    >
      <SharedLoader v-if="loaderStore.isLoading"/>
      <div v-else>
        <slot />
      </div>
    </main>
    <LayoutAppFooter />
  </div>
</template>
<script setup lang="ts">
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/firebase/firebase";
import {useAuthStore} from "~/store/users"
import { useLoadingStore } from "~/store/loading";

const authStore = useAuthStore()
const loaderStore = useLoadingStore()
const challengeStore = useChallengeStore()
onBeforeMount(async () => {
  await onAuthStateChanged(auth, (user:any) => {
    if(user) {
       localStorage.setItem('token', user.uid)
    }
  })
  await authStore.getUsers()
  await authStore.getUser()
  await challengeStore.getChallenges('users')
  loaderStore.set(false)
})
</script>
<style scoped></style>
