<script setup lang="ts">
const sidebarMenu = ref(false);
const navLink = ref([
  {
    path: "/users",
    title: "Users",
  },
  {
    path: "/challenges",
    title: "Challenges",
  },
  {
    path: "/scored",
    title: "Scoreboard",
  },
]);
onMounted(() => {
  window.addEventListener("click", (e: any) => {
    const el = e.target.getAttribute("data-name");
    if (el === "overlay") {
      sidebarMenu.value = false;
    }
  });
});
const removeSidebarMenu = () => {
  sidebarMenu.value = false;
};
</script>
<template>
  <section class="bg-white py-3 shadow-sm">
    <div
      class="max-w-[1400px] w-full mx-auto flex items-center justify-between px-3 md:px-5 2xl:px-7"
    >
      <!-- Site logo -->
      <NuxtLink
        to="/"
        class="flex items-center text-2xl text-black font-semibold"
      >
        <img src="@/assets/images/2.avif" alt="site icon" class="w-[50px]">
        <h3>Black Eagle</h3>
      </NuxtLink>

      <button class="lg:hidden" @click="sidebarMenu = !sidebarMenu">
        <IconCSS
          name="majesticons:align-right-line"
          class="text-darkColor text-2xl font-bold"
        />
      </button>

      <div
        data-name="overlay"
        class="fixed top-0 left-0 w-full h-full transition-all duration-75 bg-[rgba(0,0,0,0.5)] lg:hidden"
        :class="`${sidebarMenu ? 'visible' : 'invisible'}`"
      ></div>
      <div
        class="fixed top-0 w-[250px] h-screen lg:h-auto transition-all duration-500 lg:static bg-white lg:bg-transparent px-4 py-5 lg:px-0 lg:py-0 shadow-lg lg:shadow-none lg:flex items-center justify-between ml-auto lg:w-[70%]"
        :class="`${
          sidebarMenu
            ? 'visible right-0 transition-all duration-500 '
            : 'invisible lg:visible -right-full transition-all duration-500 delay-75'
        }`"
      >
        <!-- Site logo -->
        <div class="flex items-start justify-between w-full lg:hidden">
          <NuxtLink
            @click="removeSidebarMenu"
            to="/"
            class="inline-block text-3xl text-darkColor font-semibold mb-3"
          >
            Cyberspace
          </NuxtLink>
          <button @click="removeSidebarMenu" class="absoulte top-0 right-0">
            <IconCSS
              name="mingcute:close-fill"
              class="text-xl text-darkColor"
            />
          </button>
        </div>
        <!-- nav link -->
        <ul
          class="lg:flex items-center gap-x-4 text-darkColor text-lg font-medium mb-2 lg:mb-0"
        >
          <li
            v-for="(link, i) in navLink"
            :key="i"
            @click="sidebarMenu = false"
          >
            <NuxtLink :to="link.path">
              <p class="text-lg group relative w-max">
                <span>{{ link.title }}</span>
                <span
                  class="absolute -bottom-1 left-0 w-0 transition-all duration-150 h-0.5 bg-darkColor group-hover:w-full"
                ></span>
              </p>
            </NuxtLink>
          </li>
        </ul>

        <!-- user profile -->
        <div class="lg:relative">
          <NuxtLink to="/profile" class="flex items-end">
            <img
              src="../../assets/images/user-image.png"
              alt="user image"
              class="w-[33px]"
            />
          </NuxtLink>
        </div>
        <!-- auth page link-->
        <NuxtLink
          to="/auth"
          @click="removeSidebarMenu"
          class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-white text-darkColor inline-block l border border-darkColor"
        >
          <span
            class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-darkColor group-hover:h-full opacity-90"
          ></span>
          <span class="relative group-hover:text-white mr-2"
            >Authentication</span
          >
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
