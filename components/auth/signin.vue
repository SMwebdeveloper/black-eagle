<template>
  <div class="inner">
    <h2 class="text-center mb-4 text-3xl text-darkColor font-bold">Sign in</h2>
    <div class="relative z-0 w-full mb-5 group">
      <input
      v-model="props.userInfo.name"
        type="text"
        name="floating_name"
        id="floating_name"
        class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
        placeholder=" "
        required
      />
      <label
        for="floating_name"
        class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Name</label
      >
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
      v-model="props.userInfo.password"
        type="password"
        name="floating_password"
        id="floating_password"
        class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
        placeholder=""
        required
      />
      <label
        for="floating_password"
        class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Password</label
      >
    </div>
    <button
      @click="$emit('handleClick')"
      class="w-full bg-blue border border-blue text-white py-2 font-bold rounded-md mb-4"
    >
    <SharedSecondLoader v-if="loading"/>
    <span v-else>Sign in</span>
        </button>
    
    <label
      for="chk"
      aria-hidden="true"
      class="flex flex-col items-center justify-center"
    >
      Do you not have a profile?
      <span
        class="text-metal inline-block duration-150 border-0 hover:border-b cursor-pointer"
        >Sign up</span
      >
    </label>
  
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  userInfo: {
    type: Object,
    required: false
  },
  infoError: {
    type: Object,
    required: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang=""></style>
