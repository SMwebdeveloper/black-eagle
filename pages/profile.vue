<template>
  <div class="pt-[3%] flex flex-col lg:flex-row items-start gap-x-3">
    <SharedProfileCard :user="user"/>
    <div class="w-full lg:w-4/5">
      <h2 class="text-5xl font-medium text-center text-darkColor mb-4">My results</h2>
      <div v-if="results?.length" class="grid grid-cols-2 md:grid-cols-3 gap-1">
        <SharedCard :challenges="results"/>
      </div>
      <h2 v-else class="text-3xl text-center font-semibold text-darkColor ">No submmissions</h2>
    </div>
  </div>
</template>
<script setup lang="ts">
const userStore = useAuthStore()
const challengeStore = useChallengeStore()
const user = computed(() =>  userStore.user)

const results = computed(() => {
  const result:any = []
   challengeStore.challenges.forEach((challenge) =>{ 
    challenge?.successUsers?.forEach((succes:any) => {
      if(user.userId === succes) {
        return result.push(challenge)
      }
    })
   })

   return result
})
if(userStore.user.name === "") {
  await userStore.getUsers()
  await userStore.getUser()
}
</script>
