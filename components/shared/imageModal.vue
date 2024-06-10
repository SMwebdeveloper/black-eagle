<template>
  <div
    data-name="overlay"
    class="fixed top-0 left-0 w-full h-screen z-30 duration-100 backdrop-blur-sm bg-[rgba(0,0,0,0.5)]"
    :class="`${modalVisible ? 'visible duration-75' : 'invisible'}`"
  ></div>
  <div
    class="fixed top-[30%] left-[13%] md:top-1/3 md:left-1/3 w-[300px] lg:w-1/4 h-auto z-40 bg-white rounded-lg py-4 px-4"
    :class="`${modalVisible ? 'visible' : 'invisible'}`"
  >
    <button
      @click="$emit('closeModal')"
      class="absolute right-3 top-0 text-3xl"
    >
      &times;
    </button>
    <img
      src="@/assets/images/user-image.png"
      alt="user image"
      class="w-[120px] rounded-full mx-auto mb-3"
    />
    <div class="flex items-center justify-center gap-x-2">
      <label
        for="file__input"
        class="bg-blue px-3 py-2 text-white rounded-lg font-semibold cursor-pointer"
      >
        <span>Edit image</span>
        <input
          type="file"
          id="file__input"
          class="hidden"
          accept="image/png, image/pdf, image/jpeg"
          @change="uploadImage"
        />
      </label>
      <button class="bg-red px-3 py-2 text-white rounded-lg font-semibold">
        Delete image
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  modalVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['changeImage'])
const uploadImage = (el:any) => {
  const ImgEl = el.target.files[0]
  emit('changeImage', ImgEl)
} 
</script>
