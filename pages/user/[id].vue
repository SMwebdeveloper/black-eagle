<template>
  <div >
    <div class="w-full pt-[3%] border-b-2 border-darkColor mb-10">
      <img
        :src="user.img ? user.img :  '@/assets/images/user-image.png'"
        alt="user image"
        class="w-[150px] rounded-full mb-5 mx-auto"
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
          samandar@gamil.com
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
const route = useRoute().params.id;
const userStore = useAuthStore()

if(userStore.user.name === ''){ 
  await userStore.getUsers()
  await userStore.getUser()
}

const user = computed(() => userStore.user)
</script>
