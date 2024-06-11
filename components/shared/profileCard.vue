<template>
  <div
    class="w-full lg:w-1/5 rounded-md py-3 border border-gray bg-white px-4 shadow-lg mb-8 lg:mb-0"
  >
    <div class="relative">
      <img
        v-if="!editProfile"
        :src="user.img ? user.img : UserImage"
        alt="user image"
        class="w-[100px] h-[100px] rounded-full mb-3 object-cover"
      />
      <div v-else>
        <div>
          <img 
           v-if="!imgLoader"
            :src="img ? img : UserImage"
            alt="user image"
            class="w-[100px] h-[100px] rounded-full mb-3 object-cover"
          />
          <div v-else class="w-[100px] h-[100px] border-1 flex items-center justify-center border-darkColor rounded-full">
            Loadign...
          </div>
        </div>

        <div class="flex items-center gap-x-1 text-white">
          <label
            for="file__input"
            class="bg-blue block w-1/2 py-0.5 text-sm text-white rounded-sm text-center font-semibold cursor-pointer"
          >
            <span>Edit image</span>
            <input
              type="file"
              id="file__input"
              class="hidden"
              accept="image/png, image/pdf, image/jpeg"
              @change="uploadImage"
            />
          </label>
          <button @click="deleteImage" class="bg-red w-1/2 text-sm rounded-sm py-0.5">
            Delete Image
          </button>
        </div>
      </div>
    </div>
    <div class="text-left">
      <div class="flex items-start justify-between">
        <form @submit.prevent v-if="editProfile">
          <input
            v-model="name.title"
            :focus="name.visibileInp"
            type="text"
            class="border-b border-darkColor mb-1 capitalize outline-none bg-transparent w-full text-lg text-darkColor font-semibold"
          />
        </form>
        <div v-else class="flex items-start justify-between w-full">
          <h2 class="text-lg capitalize text-darkColor font-semibold">
            {{ user.username }}
          </h2>
        </div>
      </div>
      <div>
        <span class="text-gray font-medium text-lg">Email:</span>
        <h4 class="italic text-sm font-medium">
          {{ user.email }}
        </h4>
      </div>
      <div class="relative">
        <span class="text-gray">Coutnry:</span>
        <h4 class="font-medium">
          {{ user.country ? countryName : "Not included" }}
          <button v-if="editProfile" @click="countrySelect = !countrySelect">
            <IconCSS
              name="heroicons:chevron-up-20-solid"
              class="text-2xl rotate-180 text-darkColor duration-200 font-semibold"
              :class="{ 'rotate-0': countrySelect }"
            />
          </button>
        </h4>
        <SharedCountrySelect
          :modal-visible="countrySelect"
          @changeCountry="changeCountryName"
          @closeModal="() => (countrySelect = !countrySelect)"
        />
      </div>
      <div>
        <span class="text-gray">Score:</span>
        <h4 class="font-medium">{{ user.score ? user.score : 0 }}</h4>
      </div>
      <div v-if="editProfile" class="flex items-center gap-x-1">
        <button
          @click="handleClick"
          class="w-1/2 bg-blue py-0.5 text-white rounded-md border border-blue"
        >
          <span v-if="isLoading">Loading</span>
          <span v-else>Save</span>
        </button>
        <button
          @click="editProfile = false"
          class="w-1/2 bg-transparent py-0.5 text-darkColor border border-darkColor rounded-md"
        >
          Cansel
        </button>
      </div>
      <button
        v-if="!editProfile"
        @click="editProfile = !editProfile"
        class="flex items-center justify-center bg-blue text-white mt-3 w-full py-1 rounded-md"
      >
        <IconCSS name="heroicons:pencil-square" class="text-xl" />
        <span>Edit profile</span>
      </button>
      <button
        @click="visiblePasswordModal = !visiblePasswordModal"
        class="flex items-center justify-center bg-blue text-white mt-3 w-full py-1 rounded-md"
      >
        <IconCSS name="heroicons:key-16-solid" class="text-xl" />
        <span>Change password</span>
      </button>
      <button
        @click="sign_Out"
        class="flex items-center justify-center bg-red text-white mt-3 w-full py-1 rounded-md"
      >
        <IconCSS name="heroicons:arrow-left-start-on-rectangle-16-solid" class="text-xl" />
        <span>Sign Out</span>
      </button>
    </div>
    <SharedImageModal
      :modal-visible="visibleModal"
      @changeImage="uploadImage"
      @closeModal="() => (visibleModal = !visibleModal)"
    />
    <SharedChangePasswordModal
      :modal-visible="visiblePasswordModal"
      @closeModal="() => (visiblePasswordModal = !visiblePasswordModal)"
    />
  </div>
</template>
<script setup lang="ts">
import { db, auth } from "~/firebase/firebase";
import {signOut} from "firebase/auth"
import { updateDoc, doc } from "firebase/firestore";
import { useAuthStore } from "#imports";
import { getFile } from "~/composable/uploadFile";
import UserImage from "~/assets/images/user-image.png";
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const userStore = useAuthStore();
const router = useRouter()
const img = ref();
const name = ref({
  title: "",
  visibileInp: false,
});
const countryName = ref();
const countrySelect = ref(false);
const editProfile = ref(false);
const isLoading = ref(false);
const imgLoader = ref(false)
const visibleModal = ref(false);
const visiblePasswordModal = ref(false);

const changeCountryName = (i: any) => {
  countryName.value = i;
  countrySelect.value = false;
};

const uploadImage = async (e: any) => {
  const imgEl = e.target.files[0]
  imgLoader.value = true;
  img.value = await getFile(imgEl);
  visibleModal.value = false;
  imgLoader.value = false;
};

const deleteImage = () => {
  img.value = ""
}

const sign_Out = async () => {
  localStorage.removeItem('token')
  await signOut(auth)
  router.push('/register')
}


const handleClick = async () => {
  if (name.value.title || countryName.value) {
    isLoading.value = true;
    const docRef = doc(db, "users", props.user.id);
    await updateDoc(docRef, {
      username: name.value.title,
      country: countryName.value,
      img: img.value,
    })
      .then(async () => {
        await userStore.getUsers();
        await userStore.getUser();
        editProfile.value = false;
        name.value.visibileInp = false;
        isLoading.value = false;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

onMounted(() => {
  window.addEventListener("click", (e: any) => {
    const el = e.target.getAttribute("data-name");
    if (el === "overlay") {
      visibleModal.value = false;
      visiblePasswordModal.value = false;
      countrySelect.value = false;
    }
  });

  name.value.title = props.user.username;
  countryName.value = props.user.country;
  img.value = props.user.img;
});
</script>
