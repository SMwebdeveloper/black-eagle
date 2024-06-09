<template>
  <SharedLoader v-if="isLoading.isLoading"/>
  <div v-else>
    <h2 class="text-4xl font-bold text-darkColor text-center mt-[3%] mb-3">
      Users
    </h2>
    <h6
      class="text-2xl text-center font-medium text-metal border-b border-darkColor mb-8 pb-6"
    >
      Total: {{ userStore.users.length }}
    </h6>

    <div class="flex flex-col lg:flex-row items-center mb-5">
      <label class="text-lg md:text-xl lg:text-2xl text-black font-medium mr-3"
        >Search:</label
      >
      <input
        type="text"
        v-model="searchUser"
        class="border rounded-md outline-none px-2 py-0.5 border-darkColor"
      />
    </div>
    <!-- <h4 v-if="notFound !== '' && updateUser.length === 0">{{ notFound }}</h4> -->
    <SharedTable :users="updateUsers" />
    <SharedPagination />
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/store/users";
// import axios from "axios";
import { useLoadingStore } from "~/store/loading";

definePageMeta({ layout: "default" });

const userStore = useAuthStore();
const isLoading = useLoadingStore()
const searchUser = ref("");
const notFound = ref("");

const users = ref([]);
const updateUsers = computed(() => {
  if(searchUser.value !== '') {
    return userStore.users.filter((user:any) => {
      const firstName = searchUser.value.toLowerCase()
      return user.username.toLowerCase().includes(firstName)
    })
  } else {
    notFound.value = 'User not found'
  }
  return userStore.users;
});

// const api = "https://myapi.pythonanywhere.com/api/users/";
if (!users.value.length) {
  await userStore.getUsers()
  isLoading.isLoading = false
  // axios
  //   .get(api)
  //   .then((data) => {
  //     users.value = data.data;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  //   .finally(() => {
  //     // useLoadingStore().set(false)
  //   });
}
</script>
