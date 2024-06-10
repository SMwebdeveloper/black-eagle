<template>
  <ul
    class="w-full py-2 px-2 gap-x-2 border-b min-w-[500px] last:border-none border-gray flex challenge?s-center text-white text-base hover:bg-gray duration-150"
  >
    <li class="w-[35px] px-2">
      {{ id + 1 }}
    </li>
    <li class="px-3 w-1/5">{{ challenge?.title }}</li>
    <li class="px-3 w-1/5">{{ challenge?.dificult }}</li>
    <li class="px-3 w-1/5">{{ challenge?.score }}</li>
    <li class="px-3 w-1/5">{{ challenge?.successUsers.length }}</li>
    <li class="px-3 w-1/5 flex challenge?s-center gap-x-2">
      <button
        v-if="challenge?.status"
        class="bg-[#32851d] px-4 py-0.5 rounded-md"
        @click="challengeVisible(challenge)"
      >
        <span v-if="!visibleChallengeLoading">visible</span>
        <span v-else>Loading</span>
      </button>
      <button
        v-else
        class="bg-[#d1e237] px-4 py-0.5 rounded-md"
        @click="challengeVisible(challenge)"
      >
        <span v-if="!visibleChallengeLoading">invisible</span>
        <span v-else>Loading</span>
      </button>
      <button
        class="px-4 py-0.5 bg-red rounded-md"
        @click="deleteChallenge(challenge?.id)"
      >
        <span v-if="deleteLoading">Loading</span>
        <span v-else>Delete</span>
      </button>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase";
const props = defineProps({
  challenge: {
    type: Object,
  },
  id: {
    type: Number,
  },
});

const deleteModal = ref(false);
const visibleChallengeLoading = ref(false);
const deleteLoading = ref(false);

const challengeStore = useChallengeStore();

const challengeVisible = async (item: any) => {
  let status;
  if (item.status) {
    status = false;
  } else {
    status = true;
  }

  visibleChallengeLoading.value = true;
  await updateDoc(doc(db, "challenges", item?.id), {
    ...item,
    status: status,
  })
    .then(async () => {
      console.log("challenge update");
      await challengeStore.getChallenges("admin");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      visibleChallengeLoading.value = false;
    });
};
const deleteChallenge = async (id: any) => {
  deleteLoading.value = true;
  deleteDoc(doc(db, "challenges", id))
    .then(async () => {
      await challengeStore.getChallenges("admin");
    })
    .catch((error) => console.log(error))
    .finally(() => {
      deleteLoading.value = false;
    });
};
</script>
