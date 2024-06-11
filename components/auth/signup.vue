<template>
  <div class="inner">
    <h2 class="text-center mb-4 text-3xl text-darkColor font-bold">Sign up</h2>
    <div class="relative z-0 w-full mb-5 group">
      <input
        v-model="userInfo.username"
        type="text"
        name="floating_text"
        id="floating_text"
        class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
        :class="{ 'border-red': props.infoError.nameError }"
        placeholder=" "
        required
      />
      <label
        for="floating_text"
        class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        :class="{ 'text-red': props.infoError.nameError }"
        >Name</label
      >
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        v-model="userInfo.email"
        type="email"
        name="floating_email"
        id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
        :class="{ 'border-red': props.infoError.emailError }"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        :class="{ 'text-red': props.infoError.emailError }"
        >Email address</label
      >
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        v-model="userInfo.password"
        type="password"
        name="floating_password"
        id="floating_password"
        class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
        :class="{ 'border-red': props.infoError.passwordError }"
        placeholder=" "
        required
      />
      <label
        for="floating_password"
        class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        :class="{ 'text-red': props.infoError.passwordError }"
        >Password</label
      >
    </div>
    <button
      @click="$emit('handleClick', userInfo)"
      class="w-full bg-blue text-white py-2 border border-blue font-bold rounded-md mb-2"
    >
      <SharedSecondLoader v-if="loading" />
      <span v-else>Sign up</span>
    </button>

    <label
      for="chk"
      aria-hidden="true"
      class="flex flex-col items-center justify-center"
    >
      Do you have a profile?
      <span
        class="text-metal inline-block duration-150 border-0 hover:border-b cursor-pointer"
        >Sign in</span
      >
    </label>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  infoError: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const userInfo = ref({
  score: 0,
  country: "",
  username: "",
  userId:"",
  submissions:[],
  img:"",
  email: "",
  password: "",
});
</script>
<style lang=""></style>
