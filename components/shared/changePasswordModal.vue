<template>
  <div
    data-name="overlay"
    class="fixed top-0 left-0 w-full h-screen z-30 duration-100 backdrop-blur-sm bg-[rgba(0,0,0,0.5)]"
    :class="`${modalVisible ? 'visible duration-75' : 'invisible duration-150 delay-300'}`"
  ></div>

  <div
    class="fixed top-1/3 left-1/3 w-1/4 h-auto z-40 bg-white rounded-lg py-6 px-4"
    :class="`${modalVisible ? 'visible duration-75' : 'invisible duration-200 delay-300'}`"
  >
    <button
      @click="$emit('closeModal')"
      class="absolute right-3 top-0 text-3xl"
    >
      &times;
    </button>
    <div class="relative z-0 w-4/5 mb-5 group mx-auto">
      <input
        type="password"
        name="current__password"
        id="current__password"
        class="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
        placeholder=" "
        required
      />
      <label
        for="current__password"
        class="peer-focus:font-medium absolute text-lg text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Current password</label
      >
    </div>
    <div class="relative z-0 w-4/5 mx-auto mb-5 group">
      <input
        type="password"
        name="new__password"
        id="new__password"
        class="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
        placeholder=" "
        required
      />
      <label
        for="new__password"
        class="peer-focus:font-medium absolute text-lg text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >New password</label
      >
    </div>
    <div class="relative z-0 w-4/5 mx-auto mb-5 group">
      <input
        type="password"
        name="return__password"
        id="return__password"
        class="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
        placeholder=" "
        required
      />
      <label
        for="return__password"
        class="peer-focus:font-medium absolute text-lg text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Return new password</label
      >
    </div>
    <div class="text-center">
      <button
        class="w-4/5 bg-blue text-center py-2 mx-auto rounded-md text-white text-lg"
      >
        Save
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
</script>
