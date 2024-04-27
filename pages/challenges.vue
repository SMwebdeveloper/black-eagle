<template>
  
    <h2 class="text-4xl font-bold text-darkColor text-center mt-[3%] mb-3">
      Challenges
    </h2>
    <h6 class="text-2xl text-center font-medium text-metal border-b border-darkColor mb-8 pb-6">Total: 50</h6>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div v-for="item, i in 10" :key="i" class="bg-white h-[200px] rounded-lg shadow-lg">
            <NuxtLink :to="`/challenge/${i}`" class="w-full h-full flex flex-col items-center justify-center">
                <h3 class="text-xl text-darkColor font-semibold">JavaScript</h3>
                <h6 class="text-lg text-darkColor font-medium">Easy:200</h6>
            </NuxtLink>
        </div>
    </div>
  
</template>
