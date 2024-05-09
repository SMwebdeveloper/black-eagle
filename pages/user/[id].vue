<template>
  <div class="w-full pt-[3%]  border-b-2 border-darkColor mb-10">
    <img
      src="@/assets/images/user-image.png"
      alt="user image"
      class="w-[150px] rounded-full mb-5 mx-auto"
    />
    <div
      class="flex flex-col-reverse lg:flex-row items-center justify-center gap-y-2 gap-x-2  mb-8"
    >
      <h3 class="text-base font-bold text-darkColor bg-white px-2 py-1 rounded shadow-md">Name: Samandar</h3>
      <h3 class="text-base font-bold text-white bg-tahiti px-2 py-1 rounded shadow-md">Country: Uzbekistan</h3>
      <h3 class="text-base font-bold text-white bg-blue px-2 py-1 rounded shadow-md">Point: 400</h3>
      <h3 class="text-base font-bold text-darkColor bg-gray px-2 py-1 rounded shadow-md">samandar@gamil.com</h3>
    </div>

</div>
<h2 class="text-2xl text-left text-darkColor mb-4">Submissions</h2>
<SharedTable/>
</template>
