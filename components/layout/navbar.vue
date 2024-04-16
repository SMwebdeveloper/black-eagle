<script setup lang="ts">
const menuVisible:boolean = ref(false);
const secondMenuVisible = ref(false);
</script>
<template>
  <section class="bg-[rgba(255,255,255,0.5)] py-3 shadow-sm">
    <div
      class="max-w-[1400px] w-full mx-auto flex items-center px-3 md:px-5 2xl:px-7 bg-red-500"
    >
      <NuxtLink
        to="/"
        class="inline-block text-3xl text-darkColor font-semibold"
      >
        Cyberspace
      </NuxtLink>

      <ul
        class="flex items-center gap-x-4 text-darkColor text-lg font-medium mx-auto"
      >
        <li>
          <NuxtLink to="/users" exact-active-class="active">
            <p class="text-lg group relative w-max">
              <span>Users</span>
              <span
                class="absolute -bottom-1 left-0 w-0 transition-all duration-150 h-0.5 bg-darkColor group-hover:w-full"
              ></span>
            </p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/teams">
            <p class="text-lg group relative w-max">
              <span>Teams</span>
              <span
                class="absolute -bottom-1 left-0 w-0 transition-all duration-150 h-0.5 bg-darkColor group-hover:w-full"
              ></span>
            </p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/education">
            <p class="text-lg group relative w-max">
              <span>Education</span>
              <span
                class="absolute -bottom-1 left-0 w-0 transition-all duration-150 h-0.5 bg-darkColor group-hover:w-full"
              ></span>
            </p>
          </NuxtLink>
        </li>
        <li class="relative">
          <button @click="menuVisible = !menuVisible">
              Practice
              <span>
                <Icon name="ic:outline-keyboard-arrow-down" />
              </span>
          </button>
          <div class="absolute  right-[10%] bg-white transition-all duration-200 ease-linear shadow-sm rounded-md flex flex-col text-base" :class="`${menuVisible ? 'visible top-[200%]' : 'invisible top-[-50%] duration-200 opacity-0'}`">
            <NuxtLink to="/scored" class="flex items-center gap-x-2 px-3 pt-2 pb-2 duration-150 hover:bg-darkColor hover:text-white rounded-t-md"><IconCSS name="ic:baseline-score" class="text-lg duration-150" :class="{'rotate-180' : menuVisible}"/> Scoreboard</NuxtLink>
            <NuxtLink to="/challenges" class="flex items-center gap-x-2 px-3 pt-2 pb-2 duration-150 hover:bg-darkColor hover:text-white rounded-b-md"><IconCSS name="ic:baseline-format-list-bulleted" class="text-lg"/>Challenges</NuxtLink>
          </div>
        </li>
        <li>
          <h2>
            Contents
            <span>
              <Icon name="ic:outline-keyboard-arrow-down" />
            </span>
          </h2>
        </li>
      </ul>
      <div class="flex items-center gap-x-2">
        <NuxtLink
          to="/auth"
          class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-white text-darkColor flex items-center border border-darkColor"
        >
          <span
            class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-darkColor group-hover:h-full opacity-90"
          ></span>
          <span class="relative group-hover:text-white mr-2">Sign up</span>
          <IconCSS
            name="heroicons:user-plus-16-solid"
            class="text-2xl group-hover:text-white"
          />
        </NuxtLink>
        <NuxtLink
          to="/auth"
          class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-white text-darkColor flex items-center border border-darkColor"
        >
          <span
            class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-darkColor group-hover:h-full opacity-90"
          ></span>
          <span class="relative group-hover:text-white mr-2">Sign in</span>
          <IconCSS
            name="heroicons:arrow-right-end-on-rectangle-solid"
            class="text-2xl group-hover:text-white"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css"></style>
