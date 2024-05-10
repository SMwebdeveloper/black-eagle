<template>
  <div class="mb-4 relative">
    <h2 class="text-3xl text-darkColor font-semibold mb-2">All Users</h2>
    <div>
      <input
        type="text"
        class="bg-transparent border-2 px-2 border-darkColor py-0.5 rounded-lg"
      />
    </div>
    <SharedDeleteUserModal :modal-visible="deleteModal" @closeModal="deleteModal = !deleteModal"/>
  </div>
  <div class="bg-darkColor rounded-md w-full min-h-[300px]">
    <ul
      class="w-full py-2 px-2 border-b border-white flex text-white gap-x-2 items-start font-semibold"
    >
      <li class="px-2">
        <input type="checkbox" name="" id="" disabled />
      </li>
      <li class="px-3 w-1/5">Image</li>
      <li class="px-3 w-1/5">Name</li>
      <li class="px-3 w-1/5">Point</li>
      <li class="px-3 w-1/5">Country</li>
      <li class="px-3 w-1/5">Actions</li>
    </ul>
    <ul
      v-for="(item, i) in 10"
      :key="i"
      class="w-full py-2 px-2 gap-x-2 border-b border-gray flex items-center text-white text-base hover:bg-gray duration-150"
    >
      <li class="px-2">
        <input type="checkbox" name="" id="" />
      </li>
      <li class="px-3 w-1/5">
        <img
          src="@/assets/images/user-image.png"
          alt="user image"
          class="w-[50px] rounded-full"
        />
      </li>
      <li class="px-3 w-1/5">Samandar</li>
      <li class="px-3 w-1/5">300</li>
      <li class="px-3 w-1/5">Uzbekistan</li>
      <li class="px-3 w-1/5 flex items-center gap-x-2">
        <!-- <button class="px-4 py-0.5 bg-blue rounded-md font-medium">Edit</button> -->
        <button
          class="px-4 py-0.5 bg-red rounded-md"
          @click="deleteModal = !deleteModal"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const deleteModal = ref(false);
definePageMeta({
  layout: "admin",
});

onMounted(() => {
  window.addEventListener("click", (e:any) => {
    const el = e.target.getAttribute('data-name')

    if(el === 'overlay') {
      deleteModal.value = false
    }
  })
})
// const heading = ["#", "Image", "Username", "Country", "Date"];
</script>
