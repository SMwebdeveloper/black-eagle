<template>
  <SharedLoader v-if="isLoading" />
  <div v-else>
    <div class="w-full pt-[3%] border-b-2 border-darkColor mb-10">
      <img
        src="@/assets/images/user-image.png"
        alt="user image"
        class="w-[150px] rounded-full mb-5 mx-auto"
      />
      <div
        class="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-y-2 gap-x-2 mb-8"
      >
        <h3
          class="text-base font-bold text-darkColor bg-white px-2 py-1 rounded shadow-md"
        >
          Name: {{ user.username }}
        </h3>
        <h3
          class="text-base font-bold text-white bg-tahiti px-2 py-1 rounded shadow-md"
        >
          Country: {{ user.country ? user.country : "not included" }}
        </h3>
        <h3
          class="text-base font-bold text-white bg-blue px-2 py-1 rounded shadow-md"
        >
          Score: {{ user.score ? user.score : 0 }}
        </h3>
        <h3
          class="text-base font-bold text-darkColor bg-gray px-2 py-1 rounded shadow-md"
        >
          samandar@gamil.com
        </h3>
      </div>
    </div>
     
    <h2 v-if="user.submissions.length === 0" class="text-center text-2xl text-darkColor font-medium">No submissions yet</h2>
    <div v-else>
      <h2 class="text-2xl text-center text-darkColor mb-4 font-medium">Submissions</h2>

      <!-- <SharedTable/> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute().params.id;
const user = ref({});
const isLoading = ref(false);
const api = "https://myapi.pythonanywhere.com/api/user/";
onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await fetch(`${api}/${route}`);
    const data = await response.json();
    if (!response.ok) {
      console.log("upps error");
    } else {
      user.value = data;
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});
</script>
