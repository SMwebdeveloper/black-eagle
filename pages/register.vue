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
            @handleClick="signup"
          />
        </div>

        <!-- Sign in -->
        <div class="back bg-white px-6 py-6 border border-metal shadow-lg">
          <AuthSignin
            :userInfo="userInfo"
            :infoError="infoError"
            :loading="loading"
            @handleClick="signin"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: "auth" });
const router = useRouter();
const alertVisible = ref(false);
const alertText = ref("");
const loading = ref(false);
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

const api = "https://myapi.pythonanywhere.com";

const signup = async () => {
  // loading.value = true
  console.log(userInfo.value)
  if (
    userInfo.value.email !== "" &&
    userInfo.value.name !== "" &&
    userInfo.value.password.length >= 8
  ) {
    try {
      const response = await fetch(`${api}/accounts/signup/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(userInfo.value),
      });
      const date = await response.json();
      console.log(date);
      throw new Error("upps");
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false
    }
  } else {
    alertVisible.value = true
    loading.value = false
    setInterval(() => {
      alertVisible.value = false
    }, 3000)
  }
};

const signin = async () => {
  loading.value = true

  const userData = {
    username:userInfo.value.name,
    password: userInfo.value.password
  }

  if(userInfo.value.name !== "" && userInfo.value.password.length !== 0) {
    try{
     const response = await fetch(`${api}/accounts/login`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "aplication/json"
      },
      method: "POST",
      body: JSON.stringify(userData)
     })
     if(!response.ok){ 
      throw new Error("Upps don't find account")
     }
     const data = await response.json()
     console.log(data)
    } catch(error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }
};
</script>

<style scoped lang="css">
.card {
  width: 350px;
  height: 400px;
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
