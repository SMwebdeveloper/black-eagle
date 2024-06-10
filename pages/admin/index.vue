<template>
  <div class="mb-4 relative">
    <h2 class="text-3xl text-darkColor font-semibold mb-2">All Users</h2>
    <div
      class="flex flex-col lg:flex-row items-start gap-y-2 lg:items-center justify-between"
    >
      <input
        v-model="searchUser"
        type="text"
        class="bg-transparent border-2 px-2 border-darkColor py-0.5 rounded-lg"
      />

      <div class="bg-darkColor rounded-lg text-white relative w-[150px] hidden">
        <h2
          @click="visibleSelect = !visibleSelect"
          class="px-3 py-2 cursor-pointer"
        >
          {{ selectTitle }}
        </h2>

        <ul
          v-if="visibleSelect"
          class="absolute px-2 py-2 top-[45px] w-[150px] left-0 bg-darkColor shadow-lg rounded-lg"
        >
          <li @click="clickSelect('All users')" class="cursor-pointer">
            All users
          </li>
          <li @click="clickSelect('Most point')" class="cursor-pointer">
            Most Point
          </li>
          <li @click="clickSelect('Least Point')" class="cursor-pointer">
            Least Point
          </li>
        </ul>
      </div>
    </div>

    <SharedDeleteUserModal
      :modal-visible="deleteModal"
      @closeModal="deleteModal = !deleteModal"
    />
  </div>
  <div class="bg-darkColor overflow-x-auto rounded-md w-full">
    <ul
      class="min-w-[500px] py-2 px-2 border-b border-white flex text-white gap-x-2 items-start font-semibold"
    >
      <li class="px-3 w-1/7">Id</li>
      <li class="px-3 w-1/5">Image</li>
      <li class="px-3 w-1/5">Name</li>
      <li class="px-3 w-1/5">Point</li>
      <li class="px-3 w-1/5">Country</li>
    </ul>
    <ul
      v-for="(item, i) in updateUsers"
      :key="i"
      class="w-full pt-2 pb-3 px-2 gap-x-2 border-b  min-w-[500px] last:border-none border-gray flex items-center text-white text-base"
    >
      <li class="px-4 w-1/7">
        {{ i + 1 }}
      </li>
      <li class="px-3 w-1/5">
        <img
          :src="item.img ? item.img : UserImage"
          alt="user image"
          class="w-[50px] h-[50px] object-cover rounded-full"
        />
      </li>
      <li class="px-3 w-1/5">{{ item.username }}</li>
      <li class="px-3 w-1/5">{{ item.score  ? item.score : 0}}</li>
      <li class="px-3 w-1/5">{{item.country ? item.country: "Not included"}}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import UserImage from '~/assets/images/user-image.png'
definePageMeta({
  layout: "admin",
});

const deleteModal = ref(false);
const visibleSelect = ref(false);
const selectTitle = ref("All users");
const searchUser = ref('')
const notFound = ref('')

const router = useRouter();
const userStore = useAuthStore()
const isLoadingStore = useLoadingStore()

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
if(!userStore.users.length) {
  await userStore.getUsers()
  isLoadingStore.set(false)
}
const clickSelect = (e: any) => {
  visibleSelect.value = !visibleSelect.value;
  selectTitle.value = e;
};
onMounted(() => {
  window.addEventListener("click", (e: any) => {
    const el = e.target.getAttribute("data-name");

    if (el === "overlay") {
      deleteModal.value = false;
    }
  });
});
</script>
