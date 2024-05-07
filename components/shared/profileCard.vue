<template>
  <div class="w-1/5 rounded-md py-3 border border-gray bg-white px-4 shadow-lg">
    <div class="relative">
      <img
        src="@/assets/images/user-image.png"
        alt="user image"
        class="w-[100px] rounded-full mb-3"
      />
      <button
        @click="visibleModal = !visibleModal"
        class="absolute top-[70%] left-[30%] w-[25px] h-[25px] bg-blue text-white flex items-center justify-center text-base rounded-full"
      >
        <IconCSS name="heroicons:pencil" class="text-[12px]" />
      </button>
    </div>
    <div class="text-left">
      <div class="flex items-start justify-between">
        <form @submit.prevent="handleClick" v-if="name.visibileInp">
          <input
            v-model="name.title"
            :focus="name.visibileInp"
            type="text"
            class="border-b border-darkColor mb-1 outline-none bg-transparent w-full text-lg text-darkColor font-semibold"
          />
          <div class="flex items-center gap-x-1">
            <button class="w-1/2 bg-blue py-0.5 text-white rounded-md border border-blue">
              Save
            </button>
            <button @click="name.visibileInp = false" class="w-1/2 bg-transparent  py-0.5 text-darkColor border border-darkColor rounded-md">
              Cansel
            </button>
          </div>
        </form>
        <div v-else class="flex items-start justify-between w-full">
          <h2 class="text-lg text-darkColor font-semibold">
            {{ name.title }}
          </h2>
          <button @click="name.visibileInp = !name.visibileInp">
            <IconCSS name="heroicons:pencil" class="text-lg text-darkColor" />
          </button>
        </div>
      </div>
      <div>
        <span class="text-gray font-medium text-lg">Email:</span>
        <h4 class="italic text-sm font-medium">
          samandarwebdeveloper@gmail.com
        </h4>
      </div>
      <div>
        <span class="text-gray">Coutnry:</span>
        <h4 class="font-medium">Uzbekistan</h4>
      </div>
      <div>
        <span class="text-gray">Point:</span>
        <h4 class="font-medium">400</h4>
      </div>
      <button
        @click="visiblePasswordModal = !visiblePasswordModal"
        class="flex items-center justify-center bg-blue text-white mt-3 w-full py-1 rounded-md"
      >
        <IconCSS name="heroicons:pencil-square" class="text-xl" />
        <span>Change password</span>
      </button>
    </div>
    <SharedImageModal
      :modal-visible="visibleModal"
      @closeModal="() => (visibleModal = !visibleModal)"
    />
    <SharedChangePasswordModal
      :modal-visible="visiblePasswordModal"
      @closeModal="() => (visiblePasswordModal = !visiblePasswordModal)"
    />
  </div>
</template>
<script setup lang="ts">
const visibleModal = ref(false);
const visiblePasswordModal = ref(false);
const name = ref({
  title: "Samandar",
  visibileInp: false,
});

const handleClick = () => {
  name.value.visibileInp = false;
};

onMounted(() => {
  window.addEventListener("click", (e: any) => {
    const el = e.target.getAttribute("data-name");

    if (el === "overlay") {
      visibleModal.value = false;
      visiblePasswordModal.value = false;
    }
  });
});
</script>
