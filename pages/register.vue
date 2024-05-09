<template>
    <div class="pt-[15vh] h-screen relative">
      <button
        @click="router.back()"
        class="fixed top-[5vh] left-[5vw] bg-white px-6 py-1 text-darkColor font-medium rounded-xl duration-150 hover:shadow-lg"
      >
        <span
          ><IconCSS name="mingcute:align-arrow-left-line" class="text-2xl" />
        </span>
        Back
      </button>
      <SharedAlert :alertVisible="alertVisible" />
      <div class="card mx-auto">
        <input type="checkbox" id="chk" aria-hidden="true" name="" />
        <div class="content">
          <!-- Sing up -->
          <div class="front bg-white px-6 py-2 border border-metal shadow-lg">
            <AuthSignup
              :userInfo="userInfo"
              :infoError="infoError"
              :loading="loading"
              @handleClick="handleClick"
              @changeForm="() => (changeForm = true)"
            />
          </div>
  
          <!-- Sign in -->
          <div class="back bg-white px-6 py-6 border border-metal shadow-lg">
            <AuthSignin
              :userInfo="userInfo"
              :infoError="infoError"
              :loading="loading"
              @handleClick="handleClick"
              @changeForm="() => (changeForm = false)"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  definePageMeta({ layout: "auth" });
  const router = useRouter();
  const changeForm = ref(false);
  const alertVisible = ref(false);
  const loading = ref(false)
  const userInfo = ref({
    email: "",
    password: "",
    name: "",
  });
  
  const infoError = ref({
    nameError: false,
    emailError: false,
    passwordError: false,
  });
  
  const handleClick = () => {
    router.push('/challenges')
    // if (userInfo.value.password.length < 8) {
    //   infoError.value.passwordError = true;
    //   setInterval(() => {
    //     infoError.value.passwordError = false;
    //   }, 3000);
    // }
    // if (userInfo.value.email && userInfo.value.name && userInfo.value.password) {
    //   loading.value = true
    //   localStorage.setItem("userName", userInfo.value.name);
    //   localStorage.setItem("userEmail", userInfo.value.email);
    //   localStorage.setItem("userPassword", userInfo.value.password);
    //   setInterval(() => {
    //     loading.value = false
    //     // router.push('/challenges')
    //   }, 3000)
    // } else {
    //   userInfo.value.name
    //     ? (infoError.value.nameError = false)
    //     : (infoError.value.nameError = true);
    //   userInfo.value.email
    //     ? (infoError.value.emailError = false)
    //     : (infoError.value.emailError = true);
    //   userInfo.value.password
    //     ? (infoError.value.passwordError = false)
    //     : (infoError.value.passwordError = true);
    //   alertVisible.value = true;
    //   setInterval(() => {
    //     alertVisible.value = false;
    //     infoError.value.emailError = false;
    //     infoError.value.nameError = false;
    //     infoError.value.passwordError = false;
    //   }, 3000);
    // }
  };
  </script>
  
  <style scoped lang="css">
  .card {
    width: 350px;
    height: 440px;
    perspective: 1500;
  }
  #chk {
    display: none;
  }
  #chk:checked ~ .content {
    animation: 2s animate;
    transform: rotateY(180deg);
  }
  
  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(0.75, 0, 0.85, 1);
    border-radius: 8px;
  }
  
  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: #fff; */
    backface-visibility: hidden;
    transform-style: preserve-3d;
    perspective: 1500px;
    border-radius: 8px;
  }
  .back {
    transform: rotateY(180deg);
  }
  .inner {
    height: 100%;
    padding: 1.5em;
    transform: translateZ(80px) scale(1);
  }
  </style>