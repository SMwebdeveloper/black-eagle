<template>
  <div class="bg-lightColor min-h-screen flex flex-col sticky-layout">
      <LayoutNavbar />
    <main
      class="max-w-[1400px] w-full flex-1 mx-auto px-3 md:px-5 2xl:px-7 pb-3 overflow-x-hidden"
    >
      <slot />
    </main>
      <LayoutAppFooter />
  </div>
</template>

<style scoped>

</style>
