<template>
  <section class="fixed top-0 left-0 z-30 w-full px-3 h-[5%] lg:h-[10%]  bg-darkColor flex justify-between items-center shadow-md py-2">
    <div class="flex items-center">
      <img src="@/assets/images/icon.svg" alt="site icon" class="w-[50px] gap-x-[6px]" />
      <h3 class="text-white text-xl font-medium">Black Eagle</h3>
    </div>
   
    <button class="lg:hidden" @click="$emit('toggleSidebar')">
      <IconCSS name="heroicons:bars-3-16-solid" class="text-white text-xl"/>
    </button>
    <div class="hidden lg:flex">
      <button @click="sign_Out" class="mr-3 text-white">Sign Out</button>
        <img src="@/assets/images/user-image.png" alt="user image" class="w-[40px] rounded-full">
    </div>
  </section>
</template>
<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase/firebase';

const userTokent = ref()
const userStore = useAuthStore()

const sign_Out = async() => {
 await signOut(auth).then(() => {
  useRouter().push('/register')
  localStorage.removeItem('token')
 }).catch((error) => {
  console.log(error)
 })
}
const user = (() => userStore.user)
onMounted(() => userTokent.value = localStorage.getItem('token'))
</script>

