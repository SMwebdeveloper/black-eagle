<template>
  <div class="pb-5">
    <h2 class="text-4xl font-bold text-darkColor text-center mt-[3%] mb-4">
      {{ challenge.title }}
    </h2>

    <div
      class="flex flex-col-reverse lg:flex-row items-center justify-center gap-y-2 gap-x-2 pb-6 border-b-2 border-darkColor mb-8"
    >
      <!-- <div
        class="bg-blue text-white px-2 py-0.5 flex items-center rounded-md font-semibold"
      >
        <IconCSS name="mingcute:cube-3d-fill" class="text-white mr-2 text-xl" />
        <h6 class="mr-2">Category:</h6>
        <span class="font-medium inline-block">Web development</span>
      </div> -->
      <div
        class="bg-darkColor text-white px-2 py-0.5 flex items-center rounded-md font-semibold"
      >
        <IconCSS
          name="material-symbols-light:stairs"
          class="text-white mr-2 text-xl"
        />
        <h6 class="mr-2">Dificult:</h6>
        <span class="font-medium inline-block">{{ challenge?.dificult }}</span>
      </div>
      <div
        class="bg-metal text-white px-2 py-0.5 flex items-center rounded-md font-semibold"
      >
        <IconCSS
          name="material-symbols-light:stars"
          class="text-white mr-2 text-xl"
        />
        <h6 class="mr-2">Score:</h6>
        <span class="font-medium inline-block">{{ challenge.score }}</span>
      </div>
      <div
        class="bg-tahiti text-white px-2 py-0.5 flex items-center rounded-md font-semibold"
      >
        <IconCSS
          name="ph:flag-checkered-fill"
          class="text-white mr-2 text-xl"
        />
        <h6 class="mr-2">Solvers:</h6>
        <span class="font-medium inline-block">{{ challenge?.successUsers?.length }}</span>
      </div>
    </div>

    <div class="bg-white w-full rounded-lg shadow-lg px-3 py-4">
   

      <div>
        <h2
          class="text-2xl mb-4 pb-3 border-dotted border-b-4 border-darkColor text-darkColor font-medium"
        >
          Challenge description
        </h2>
        <p class="text-justify mb-4">
          {{ challenge.description }}
        </p>

        <a
          target="_blank"
          :href="challenge?.file"
          download="download challenge"
          class="bg-blue p-2 inline-block text-white font-medium rounded-lg mb-2"
        >
          <IconCSS name="ph:download-light" class="text-white text-xl" />
          Downoad</a
        >

        <div>
          <input
            type="text"
            class="w-auto lg:w-[500px] mb-2 h-[38px] px-3 mr-4 text-base outline-none border border-darkColor text-darkColor rounded-xl"
            placeholder="Flag{fasd577asd545asd7f}"
          />
          <button @click="handleClick" class="bg-blue px-6 py-1 text-white text-xl rounded-lg">
            Submit
          </button>
        </div>
        <h2 v-if="errRes.visible" class="text-xl text-red font-normal">{{ errRes.title }}</h2>
      </div>
    </div>

    <!-- table -->
    <div class="mt-20">
      <h2 class="text-2xl font-medium text-darkColor mb-6">Solvers: {{ challenge.successUsers?.length }}</h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '~/firebase/firebase';

const route:any = useRoute().params.id
const challengeStore = useChallengeStore()
const response = ref("")
const errRes = ref({
  title: "",
  visible: false
})
const handleClick = async () => {
  const token = localStorage.getItem('token')
  const successUsers = challenge.successUsers
   if(response.value !== "") {
    const answer = challenge.value.answer
    if(response === answer) {
     await updateDoc(doc(db, "challenges", challenge.id), {
      ...challenge, successUsers: challenge.value.successUsers?.psuh(token)
     })
    } else {
      errRes.value.title = "Upps error try again",
      errRes.value.visible = true
    }
   } else {
    errRes.value.title = 'Please add response'
    errRes.value.visible = true
   }
   setInterval(() => {
       errRes.value.visible = false
      }, 3000)
}
const challenge = computed(() => challengeStore.challenge)
onMounted(async ()=> {
  await challengeStore.getChallenges("users")
 await challengeStore.getChallenge(route)
})
</script>
