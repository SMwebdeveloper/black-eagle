<template>
  <SharedLoader v-if="isLoading" />
  <div v-else>
    <h2 class="text-4xl font-bold text-darkColor text-center mt-[3%] mb-3">
      Users
    </h2>
    <h6
      class="text-2xl text-center font-medium text-metal border-b border-darkColor mb-8 pb-6"
    >
      Total: {{ users.length }}
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
    <SharedTable :users="updateUser" />
    <SharedPagination />
  </div>
</template>
<script setup lang="ts">
const isLoading = ref(false);
const searchUser = ref('')
const users: any = ref([]);

const updateUser = computed(() => {
  if(searchUser.value !== '') {
    return users.value.filter((user:any) => {
      const firstName = searchUser.value.toLowerCase()
      return user.username.toLowerCase().includes(firstName)
    })
  } 

  return users.value
})
const api = "https://myapi.pythonanywhere.com/api/users/";
onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await fetch(api);
    const data = await response.json();
    if (!response.ok) {
      console.log("Upps");
    }
    users.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});
</script>
