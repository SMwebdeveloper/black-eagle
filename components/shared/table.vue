<template>
  <div class="overflow-x-auto lg:w-auto shadow-md bg-white">
    <table
      class="min-w-[700px] md:w-full text-sm text-left rtl:text-right text-white rounded-t-lg"
    >
      <thead class="text-xs text-white uppercase bg-darkColor">
        <tr>
          <th
            v-for="(item, i) in heading"
            :key="i"
            scope=""
            class="px-3 py-2 lg:px-6 lg:py-3"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody class="min-w-[700px] md:w-full">
        <tr
          v-for="(item, i) in users"
          @click="handleClick(item)"
          :key="i"
          class="bg-white border-b last:border-b-0 text-sm md:text-base lg:text-xl cursor-pointer text-darkColor hover:bg-silver duration-150"
        >
          <th
            scope="row"
            class="px-3 py-2 lg:px-6 lg:py-4 font-medium whitespace-nowrap"
          >
            {{ i + 1 }}
          </th>
          <td class="px-3 py-2 lg:px-6 lg:py-4">
            <img
              :src="item.img ? item.img : UserImage"
              alt="user image"
              class="w-[28px] h-[28px] lg:w-[45px] lg:h-[45px] object-cover rounded-full"
            />
          </td>
          <td class="px-3 py-2 lg:px-6 lg:py-4">
            {{ item?.username }}
          </td>
          <td class="px-3 py-2 lg:px-6 lg:py-4">
            {{ item?.country ? item.country : 'Not included' }}
          </td>
          <td class="px-3 py-2 lg:px-6 lg:py-4">
            {{ item.score ? item.score : 0 }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import UserImage from '@/assets/images/user-image.png'
import { useRouter } from 'vue-router';
const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const token = ref()
const router = useRouter()
const heading = ["#", "Image", "Username", "Country", "Point"];

const handleClick = (user:any) => {
  if(user.userId === token.value) {
    router.push('/profile')
  } else {
    router.push(`/user/${user.id}`)
  }
}
onMounted(async () => {
  token.value = localStorage.getItem('token')
});
</script>
