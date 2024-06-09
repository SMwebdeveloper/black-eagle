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
    <SharedAlert :alertVisible="alertVisible" :text="alertText" />
    <div class="card mx-auto">
      <input type="checkbox" id="chk" aria-hidden="true" name="" />
      <div class="content">
        <!-- Sing up -->
        <div class="front bg-white px-6 py-2 border border-metal shadow-lg">
          <AuthSignup
            :infoError="infoError"
            :loading="loading"
            @handleClick="signup"
          />
        </div>

        <!-- Sign in -->
        <div class="back bg-white px-6 py-6 border border-metal shadow-lg">
          <AuthSignin
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
import { auth, db } from "~/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {addDoc, collection} from 'firebase/firestore'

definePageMeta({ layout: "auth" });

const router = useRouter();
const alertVisible = ref(false);
const alertText = ref("");
const loading = ref(false);

const infoError = ref({
  nameError: false,
  emailError: false,
  passwordError: false,
});

const api = "https://myapi.pythonanywhere.com";

const signup = async (info: any) => {
  loading.value = true;
  if (info.email !== "" && info.username !== "" && info.password.length >= 6) {
    try {
      // const response = await fetch(`${api}/accounts/signup/`, {
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   method: "POST",
      //   body: JSON.stringify(info),
      // });
      // const date = await response.json();
      // if (!response.ok) {
      //   alertVisible.value = true;
      //   alertText.value = date.username[0]
      // } else {
      //   router.push("/challenges")
      // }
      const email = info.email;
      const password = info.password;
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (data) => {
          await addDoc(collection(db, "users"), {
            ...info,
            userId:data.user?.uid
          }).then(() => console.log('success')).catch((error) => console.log(error))
          router.push("/challenges");
        })
        .catch((error) => {
          console.log(error)
          alertVisible.value = true;
          alertText.value = "This user is alerady";
        });
      setInterval(() => {
        alertVisible.value = false;
      }, 3000);
    } catch (error) {
    } finally {
      loading.value = false;
    }
  } else {
    loading.value = false;
    alertVisible.value = true;
    if (
      info.email === "" &&
      info.username === "" &&
      info.password.length === 0
    ) {
      infoError.value.emailError = true;
      infoError.value.nameError = true;
      infoError.value.passwordError = true;
      alertText.value = "Please fill in the information";
    } else if (info.email === "") {
      infoError.value.emailError = true;
      alertText.value = "Please fill in the information";
    } else if (info.username === "") {
      infoError.value.nameError = true;
      alertText.value = "Please fill in the information";
    } else if (info.password.length === 0) {
      infoError.value.passwordError = true;
      alertText.value = "Please fill in the information";
    } else {
      return "";
    }
    if (info.password.length > 0 && info.password.length < 6) {
      infoError.value.passwordError = true;
      alertText.value = "password must be at least 6 characters long";
    }
    setInterval(() => {
      infoError.value.emailError = false;
      infoError.value.nameError = false;
      infoError.value.passwordError = false;
      alertVisible.value = false;
    }, 3000);
  }
};

const signin = async (info: any) => {
  loading.value = true;

  if (info.email !== "" && info.password.length >= 6) {
    try {
      // const response = await fetch(`${api}/accounts/login`, {
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "aplication/json",
      //   },
      //   method: "POST",
      //   body: JSON.stringify(info),
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   alertVisible.value = true;
      //   alertText.value = data.username[0];
      // } else {
      //   router.push("/challenges");
      // }
      // console.log(data);
      const email = info.email
      const password = info.password
      await signInWithEmailAndPassword(auth, email, password).then((data) => {
        localStorage.setItem('token',data.user.uid)
        
        if(data.user.email === 'myadmin@gmail.com') {
          router.push('/admin')
        } else {
          router.push('/challenges')
        }
      }).catch((error) => {
        alertVisible.value = true
        alertText.value = 'Upps error. Please enter the correct information'
      })
      setInterval(() => {
        alertVisible.value = false;
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  } else {
    loading.value = false;
    alertVisible.value = true;
    if (info.username === "" && info.password.length === 0) {
      infoError.value.nameError = true;
      infoError.value.passwordError = true;
      alertText.value = "Please fill in the information";
    } else if (info.username === "") {
      infoError.value.nameError = true;
      alertText.value = "Please fill in the information";
    } else if (info.password.length === 0) {
      infoError.value.passwordError = true;
      alertText.value = "Please fill in the information";
    } else if (info.password.length > 0 && info.password.length < 6) {
      infoError.value.passwordError = true;
      alertText.value = "password must be at least 6 characters long";
    } else {
      return ""
    }
    setInterval(() => {
      infoError.value.nameError = false;
      infoError.value.passwordError = false;
      alertVisible.value = false;
    }, 3000);
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
