<template>
  <shared-loader v-if="useLoadingStore().isLoading"/>
  <div v-else>
    <div class="w-full pt-[3%] border-b-2 border-darkColor mb-10">
      <img
        :src="user.img ? user.img :  UserImage"
        alt="user image"
        class="w-[150px] h-[150px] object-cover rounded-full mb-5 mx-auto"
      />
      <div
        class="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-y-2 gap-x-2 mb-8"
      >
        <h3
          class="text-base font-bold text-darkColor bg-white px-2 py-1 rounded shadow-md"
        >
          Name: {{ user.username }}
        </h3>
        <h3
          class="text-base font-bold text-white bg-tahiti px-2 py-1 rounded shadow-md"
        >
          Country: {{ user.country ? user.country : "not included" }}
        </h3>
        <h3
          class="text-base font-bold text-white bg-blue px-2 py-1 rounded shadow-md"
        >
          Score: {{ user.score ? user.score : 0 }}
        </h3>
        <h3
          class="text-base font-bold text-darkColor bg-gray px-2 py-1 rounded shadow-md"
        >
        {{ user.email }}
        </h3>
      </div>
    </div>
     
    <h2  class="text-center text-2xl text-darkColor font-medium">No submissions yet</h2> 
     <!-- <div >
      <h2 class="text-2xl text-center text-darkColor mb-4 font-medium">Submissions</h2>

      <SharedTable/>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import UserImage from "~/assets/images/user-image.png"
const route = useRoute().params.id;
const userStore = useAuthStore()

const user = computed(() => userStore.singleUser)

onMounted(async () => {
  await userStore.getUsers()
  await userStore.getSingleUser(route)
  useLoadingStore().set(false)
})
</script>
