<template>
  <div
    data-name="overlay"
    class="fixed top-0 left-0 w-full h-screen z-10 duration-100"
    :class="`${modalVisible ? 'visible duration-75' : 'invisible'}`"
  ></div>
  <div
    class="fixed top-0 w-[250px] lg:w-1/4 h-full overflow-y-auto z-40 cursor-pointer bg-darkColor rounded-tl-md py-3 shadow-md px-2"
    :class="`${
      modalVisible
        ? 'visible right-0 duration-150'
        : 'invisible -right-full duration-150'
    }`"
  >
    <h2 class="text-2xl text-white font-medium">Add Challenges</h2>
    <form @submit.prevent="handleClick" class="py-4">
      <label class="text-white mb-2 inline-block">
        <span class="text-lg font-medium inline-block mb-2">Title</span>
        <input
          v-model="challengeInfo.title"
          type="text"
          placeholder="Title"
          class="text-sm w-full px-2 py-1 bg-white border border-white rounded-md placeholder:text-gray text-blakc outline-none"
          :class="{ 'border-red': errInfo.title }"
        />
      </label>
      <label class="text-white inline-block mb-2">
        <span class="text-lg font-medium inline-block mb-2">Description</span>
        <textarea
          v-model="challengeInfo.description"
          rows="5"
          placeholder="Description"
          class="text-sm w-full border border-white bg-white min-h-[100px] max-h-[100px] px-2 py-1 rounded-md placeholder:text-gray text-blakc outline-none"
          :class="{ 'border-red': errInfo.desc }"
        ></textarea>
      </label>

      <label class="text-white inline-block mb-2">
        <span class="text-lg font-medium inline-block mb-2">Response</span>
        <input
          v-model="challengeInfo.answer"
          placeholder="Response"
          class="text-sm w-full px-2 py-1 bg-white border border-white rounded-md placeholder:text-gray text-blakc outline-none"
          :class="{ 'border-red': errInfo.resp }"
        />
      </label>
      <label class="text-white inline-block mb-2 w-full relative">
        <span class="text-lg font-medium inline-block mb-2">Type</span>
        <h2
          @click="selectVisible = !selectVisible"
          class="text-sm w-full bg-white px-2 py-1 rounded-md placeholder:text-gray text-blakc outline-none"
        >
          {{ type }}
        </h2>
        <ul
          v-if="selectVisible"
          class="absolute top-[-100%] w-full bg-white text-blakc rounded-md"
        >
          <li @click="clickSelect('Easy')" class="px-2 py-1 hover:bg-gray">
            Easy
          </li>
          <li @click="clickSelect('Medium')" class="px-2 py-1 hover:bg-gray">
            Medium
          </li>
          <li @click="clickSelect('Hard')" class="px-2 py-1 hover:bg-gray">
            Hard
          </li>
        </ul>
      </label>
      <label class="text-white inline-block mb-6">
        <span class="text-lg font-medium inline-block mb-2">Add file</span>
        <input
          type="file"
          placeholder="title"
          class="text-sm w-full px-2 py-1 border border-white rounded-md bg-white placeholder:text-gray text-blakc outline-none"
          :class="{ 'border-red': errInfo.file }"
        />
      </label>

      <div class="grid grid-cols-2 items-center justify-center gap-x-2">
        <button
          type="submit"
          class="bg-blue px-2 py-1 text-white text-lg font-medium rounded-lg"
        >
          Add
        </button>
        <button
          @click="$emit('closeModal')"
          class="bg-white px-2 py-1 text-darkColor text-lg font-medium rounded-lg"
        >
          Cansel
        </button>
      </div>
    </form>
  </div>
  <SharedAlert :alert-visible="alertVisible" :text="alertText" />
</template>

<script setup lang="ts">
const props = defineProps({
  modalVisible: {
    type: Boolean,
    default: false,
  },
});

const challengeInfo = ref({
  title: "",
  description: "",
  dificult: "Easy",
  score:"",
  answer: "",
  file: "",
});
const loading = ref(false);
const alertVisible = ref(false);
const alertText = ref("");
const selectVisible = ref(false);
const type = ref("Easy");
const errInfo = ref({
  title: false,
  desc: false,
  resp: false,
  file: false,
  dificult: false,
});

const clickSelect = (e: string) => {
  selectVisible.value = false;
  type.value = e;
  challengeInfo.value.dificult =  e
};

const handleClick = async () => {
  loading.value = true;
  const { answer, dificult, description, file, title } = challengeInfo.value;
  if (answer && description && dificult && title) {
    try {
      const response = await fetch(
        "https://myapi.pythonanywhere.com/api/challenges/",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(challengeInfo.value)
        }
      );
      const data = response.json()
      console.log(data)
      if(!response.ok) {
        alertVisible.value = true
        alertText.value = 'Upps error'
      } else {
        alertVisible.value = true
        alertText.value ="Successful"
      }
      setInterval(() => {
        alertVisible.value = false
      }, 3000)
    } catch (error) {
      console.log(error);
    }
  } else {
    alertVisible.value = true;
    alertText.value = "Please add challenge information";
    errInfo.value.desc = true;
    errInfo.value.file = true;
    errInfo.value.resp = true;
    errInfo.value.title = true;
    errInfo.value.dificult = true;

    setInterval(() => {
      alertVisible.value = false;
      errInfo.value.desc = false;
      errInfo.value.file = false;
      errInfo.value.resp = false;
      errInfo.value.title = false;
      errInfo.value.dificult = false;
    }, 3000);
  }
};
</script>
