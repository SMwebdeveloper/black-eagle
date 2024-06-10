<template>
  <div
    class="absolute top-[100%] left-0  w-full shadow-md  z-40 bg-white text-darkColor border border-darkColor"
    :class="`${modalVisible ? 'visible' : 'invisible'}`"
  >
  <div class="flex items-center justify-between px-2 border-b-2 border-darkColor">
    <input type="text" class=" bg-transparent w-[80%] text-sm border-2 border-darkColor outline-none rounded-md px-2" v-model="search">
    <button @click="$emit('closeModal')" class="text-2xl">&times;</button>
  </div>
  <ul class="h-[150px] overflow-y-auto">
    <li v-for="country, i in countries" :key="i" @click="$emit('changeCountry', country.label)" class="text-sm py-0.5 px-2 hover:bg-silver border-b border-darkColor last:border-none font-semibold cursor-pointer">
        {{ country?.label }}
    </li>
  </ul>
  </div>
</template>
<script setup lang="ts">
import { countryOptions } from "../../data/data.json";
const props = defineProps({
    modalVisible:{
        type:Boolean,
        default: false
    }
})

const search = ref("")

const countries = computed(() => {
    if(search.value !== "") {
        return countryOptions.filter((country:object) => {
            const counrtyName = country?.label?.toLocaleLowerCase()
            const searchCountryName = search.value.toLocaleLowerCase()
            return counrtyName.includes(searchCountryName)
        })
    }

    return countryOptions
})
</script>
