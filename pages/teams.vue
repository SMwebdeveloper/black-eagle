<template>
  <h2 class="text-4xl font-bold text-darkColor text-center mt-[3%] mb-3">
    Teams
  </h2>
  <h6
    class="text-2xl text-center font-medium text-metal border-b border-darkColor mb-8 pb-6"
  >
    Total: 10
  </h6>

  <div class="flex flex-col lg:flex-row items-center mb-5">
    <label class="text-lg md:text-xl lg:text-2xl text-black font-medium mr-3"
      >Search:</label
    >
    <input
      type="text"
      class="border rounded-md outline-none px-2 py-0.5 border-darkColor"
    />
  </div>

  <SharedTable />
  <SharedPagination />
</template>
