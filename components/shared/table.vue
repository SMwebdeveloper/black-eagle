<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <table class="w-full text-sm text-left rtl:text-right text-white">
      <thead class="text-xs text-white uppercase bg-darkColor">
        <tr>
          <th
            v-for="(item, i) in heading"
            :key="i"
            scope="col"
            class="px-6 py-3"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in table"
          :key="i"
          class="bg-white border-b last:border-b-0 text-xl cursor-pointer text-darkColor hover:text-white hover:bg-metal"
        >
          <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
            {{ i + 1 }}
          </th>
          <td class="px-6 py-4">
            <img src="../../assets/images/user-image.jpg" alt="user image" class="w-[60px] h-[60px] object-cover rounded-full"/>
          </td>
          <td class="px-6 py-4">
            {{ item.username }}
          </td>
          <td class="px-6 py-4">
            {{ item.country }}
          </td>

          <td class="px-6 py-4">
            {{ item.date }}
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  heading: {
    type: Array,
    required: true,
  },
  table: {
    type: Array,
    required: true,
  },
});

// const column = computed(() => {
//   const arr = [];
//   props.table.forEach((item: any) => {
//     const result = Object.entries(item);
//     const [key, value] = result;
//   });
// });

// const imgFucn = (e:any) => {
//     return require(`../../assets/images/${e}.jpg`)
// }
onMounted(() => {
  console.log(column.value);
});
</script>
