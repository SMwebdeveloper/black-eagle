<template>
  <div class="mb-4 relative">
    <h2 class="text-3xl text-darkColor font-semibold mb-2">Challenges</h2>
    <div
      class="flex flex-col lg:flex-row items-start gap-y-4 lg:items-center justify-between"
    >
      <input
        v-model="searchChallenge"
        type="text"
        class="bg-transparent border-2 px-2 border-darkColor py-0.5 rounded-lg"
      />

      <div class="flex items-center gap-x-2">
        <button
          @click="addChallengeModal = !addChallengeModal"
          class="bg-blue px-4 py-2 rounded-md text-white"
        >
          Add challenges
          <span class="rotate-45 inline-block text-base font-extrabold"
            >&times;</span
          >
        </button>
        <div class="bg-darkColor rounded-lg text-white relative w-[120px] hidden">
          <h2
            @click="visibleSelect = !visibleSelect"
            class="px-3 py-2 cursor-pointer"
          >
            {{ selectTitle }}
          </h2>

          <ul
            v-if="visibleSelect"
            class="absolute px-2 py-2 w-[120px] top-[45px] left-0 bg-darkColor shadow-lg rounded-lg"
          >
            <li
              @click="clickSelect('Easy')"
              class="cursor-pointer duration-100 hover:font-semibold"
            >
              Easy
            </li>
            <li
              @click="clickSelect('Medium')"
              class="cursor-pointer duration-100 hover:font-semibold"
            >
              Medium
            </li>
            <li
              @click="clickSelect('Hard')"
              class="cursor-pointer duration-100 hover:font-semibold"
            >
              Hard
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- <SharedDeleteUserModal
      :modal-visible="deleteModal"
      @closeModal="deleteModal = !deleteModal"
    /> -->
    <SharedAddChallenge
      :modal-visible="addChallengeModal"
      @closeModal="addChallengeModal = !addChallengeModal"
      @addChallenge="addChallenge"
    />
  </div>
  <h2 v-if="notFound">{{ notFound }}</h2>
  <div v-else class="bg-darkColor overflow-x-auto rounded-md w-full">
    <ul
      class="w-full py-2 px-2 border-b min-w-[500px] border-white flex text-white gap-x-2 items-start font-semibold"
    >
      <li class="px-2">Id</li>
      <li class="px-3 w-1/5">Title</li>
      <li class="px-3 w-1/5">Dificult</li>
      <li class="px-3 w-1/5">Point</li>
      <li class="px-3 w-1/5">Success</li>
      <li class="px-3 w-1/5">Actions</li>
    </ul>
    <SharedChallenge v-for="challenge, i in challenges" :challenge="challenge" :id="i"/>
  </div>
</template>
<script setup lang="ts">
import { addDoc, collection } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { useChallengeStore } from "~/store/challenge";
definePageMeta({
  layout: "admin",
});

const addChallengeModal = ref(false);
const visibleSelect = ref(false);
const selectTitle = ref("Easy");
const searchChallenge = ref("");
const notFound = ref("");
const challengeStore = useChallengeStore();
const loadingStore = useLoadingStore();

const challenges = computed(() => {
  if (searchChallenge.value !== "") {
    return challengeStore.challenges.filter((challenge: any) => {
      const challengeName = searchChallenge.value.toLowerCase();
      if (challenge.title.toLowerCase().includes(challengeName)) {
        return challenge;
      }
    });
  }
  return challengeStore.challenges;
});


if (!challengeStore.challenges?.title) {
  await challengeStore.getChallenges("admin");
  loadingStore.set(false);
}

const addChallenge = async (i:any) => {
  try {
      await addDoc(collection(db, "challenges"), i)
        .then(() => {
          console.log("done");
          challengeStore.getChallenges("admin")
          addChallengeModal.value = false
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
}
const clickSelect = (e: any) => {
  visibleSelect.value = !visibleSelect.value;
  selectTitle.value = e;
};
onMounted(async () => {
  window.addEventListener("click", (e: any) => {
    const el = e.target.getAttribute("data-name");

    if (el === "overlay") {
      addChallengeModal.value = false;
    }
  });
});
</script>
