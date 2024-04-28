<template>
  <div class="overflow-x-auto  lg:w-auto shadow-md  bg-white ">
    <table class=" min-w-[700px] md:w-full text-sm text-left rtl:text-right text-white rounded-t-lg">
      <thead class="text-xs text-white uppercase bg-darkColor">
        <tr>
          <th
            v-for="item, i in heading"
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
          v-for="(item, i) in table"
          :key="i"
          class="bg-white border-b last:border-b-0 text-sm md:text-base lg:text-xl cursor-pointer text-darkColor  hover:bg-silver duration-150"
        >
          <th scope="row" class="px-3 py-2 lg:px-6 lg:py-4 font-medium whitespace-nowrap">
            {{ i + 1 }}
          </th>
          <td class="px-3 py-2 lg:px-6 lg:py-4">
            <img src="../../assets/images/user-image.jpg" alt="user image" class="w-[28px] h-[28px] lg:w-[45px] lg:h-[45px] object-cover rounded-full"/>
          </td>
          <td class="px-3 py-2 lg:px-6 lg:py-4">
            {{ item.username }}
          </td>
          <td class="px-3 py-2 lg:px-6 lg:py-4">
            {{ item.country }}
          </td>
          <td class="px-3 py-2 lg:px-6 lg:py-4">
            {{ item.date }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
const heading = ["#", "Image", "Username", "Country", "Date"];
const table = [
  {
    id: '1',
    img: "user-image",
    username: "Anri",
    country: "Uzbekistan",
    date: "August 27, 2023 12:30 UTC",
  },
  { 
    id: '2',
    img: "user-image",
    username: "Jon",
    country: "France",
    date: "August 27, 2023 12:30 UTC",
  },
  {
    id: '3',
    img: "user-image",
    username: "Daniel",
    country: "Livan",
    date: "August 27, 2023 12:30 UTC",
  },
  {
    id: '4',
    img: "user-image",
    username: "Sancho",
    country: "USA",
    date: "August 27, 2023 12:30 UTC",
  },
  {
    id:'5',
    img: "user-image",
    username: "Kamil",
    country: "Slovakia",
    date: "August 27, 2023 12:30 UTC",
  },
  {
    id: '6',
    img: "user-image",
    username: "Andrey",
    country: "Russian",
    date: "August 27, 2023 12:30 UTC",
  },
  {
    id: '7',
    img: "user-image",
    username: "Tate",
    country: "France",
    date: "August 27, 2023 12:30 UTC",
  },
  {
    id: '8',
    img: "user-image",
    username: "Salamon",
    country: "Uzbekistan",
    date: "August 27, 2023 12:30 UTC",
  },
  {
    id:'9',
    img: "user-image",
    username: "Grinch",
    country: "Uk",
    date: "August 27, 2023 12:30 UTC",
  },
  {
    id: '10',
    img: "user-image",
    username: "Samandar",
    country: "Uzbekistan",
    date: "August 27, 2023 12:30 UTC",
  },
];

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
//   console.log(column.value);
});
</script>
