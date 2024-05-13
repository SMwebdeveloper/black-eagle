<template>
  <div class="mb-4 relative">
    <h2 class="text-3xl text-darkColor font-semibold mb-2">All Users</h2>
    <div class="flex flex-col lg:flex-row items-start gap-y-2 lg:items-center justify-between">
      <input
        type="text"
        class="bg-transparent border-2 px-2 border-darkColor py-0.5 rounded-lg"
      />

      <div class="bg-darkColor rounded-lg text-white relative w-[150px]">
        <h2 @click="visibleSelect = !visibleSelect" class="px-3 py-2 cursor-pointer">{{ selectTitle }}</h2>

        <ul v-if="visibleSelect" class="absolute px-2 py-2 top-[45px] w-[150px] left-0 bg-darkColor shadow-lg rounded-lg">
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
  
    <SharedDeleteUserModal :modal-visible="deleteModal" @closeModal="deleteModal = !deleteModal"/>
  </div>
  <div class="bg-darkColor overflow-x-auto rounded-md w-full min-h-[300px]">
    <ul
      class="min-w-[500px] py-2 px-2 border-b border-white flex text-white gap-x-2 items-start font-semibold"
    >
    <li class="px-2">
        Id
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
      class="w-full py-2 px-2 gap-x-2 border-b min-w-[500px] last:border-none border-gray flex items-center text-white text-base hover:bg-gray duration-150"
    >
      <li class="px-2 w-[35px]">
        {{ i + 1 }}
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
const visibleSelect = ref(false)
const selectTitle = ref('All users')
definePageMeta({
  layout: "admin",
});


const clickSelect = (e:any) => {
  visibleSelect.value = !visibleSelect.value
  selectTitle.value = e
}
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
