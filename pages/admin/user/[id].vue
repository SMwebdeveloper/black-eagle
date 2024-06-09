<template>
  <button
      @click="router.back()"
      class=" bg-darkColor px-6 py-1 text-white font-medium rounded-xl duration-150 hover:shadow-lg"
    >
      <span
        ><IconCSS name="mingcute:align-arrow-left-line" class="text-2xl" />
      </span>
      Back
    </button>
    <div>
      <img :src="UserImage" alt="user image" class="w-[160px]">
    </div>
</template>
<script setup lang="ts">
import UserImage from "@/assets/images/user-image.png"

definePageMeta({"layout": "admin"})

const router = useRouter()
</script>