<template>
  <div class="pt-[15vh] bg-lightColor h-screen">
    <div class="card mx-auto">
      <input type="checkbox" id="chk" aria-hidden="true" name="" />
      <div class="content">
        <div class="front bg-white px-6 py-2 border border-metal shadow-lg">
          <div class="inner">
            <h2 class="text-center mb-4 text-3xl text-darkColor font-bold">
              Sign up
            </h2>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_text"
                id="floating_text"
                class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
                placeholder=" "
                required
              />
              <label
                for="floating_text"
                class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Name</label
              >
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Email address</label
              >
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Password</label
              >
            </div>
            <button
              class="w-full bg-blue text-white py-2 font-bold rounded-md mb-2"
            >
              Sign up
            </button>
            <div class="flex items-center justify-center mb-2 gap-x-3">
              <button
                class="w-[30px] h-[30px] flex items-center justify-center border rounded-full border-red"
              >
                <IconCSS
                  name="mingcute:google-fill"
                  class="text-red w-[20px]"
                />
              </button>
              <button
                class="w-[30px] h-[30px] flex items-center justify-center border rounded-full border-darkColor"
              >
                <IconCSS name="mingcute:github-fill" class="text-darkColor" />
              </button>
            </div>
            <label
              for="chk"
              aria-hidden="true"
              class="flex flex-col items-center justify-center"
            >
              Do you have a profile?
              <span
                class="text-metal inline-block duration-150 border-0 hover:border-b cursor-pointer"
                >Sign in</span
              >
            </label>
          </div>
        </div>

        <div class="back bg-white px-6 py-6 border border-metal shadow-lg">
          <div class="inner">
            <h2 class="text-center mb-4 text-3xl text-darkColor font-bold">
              Sign in
            </h2>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Email address</label
              >
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-darkColor appearance-none focus:outline-none focus:ring-0 focus:border-darkColor peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-darkColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkColor peer-focus:dark:text-darkColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Password</label
              >
            </div>
            <button
              class="w-full bg-blue border border-blue text-white py-2 font-bold rounded-md mb-4 duration-150 hover:bg-white hover:text-blue"
            >
              Sign in
            </button>
            <div class="flex items-center justify-center mb-2 gap-x-3">
              <button
                class="w-[30px] h-[30px] flex items-center justify-center border rounded-full border-red duration-150 group hover:bg-red"
              >
                <IconCSS
                  name="mingcute:google-fill"
                  class="text-red w-[20px] duration-150 group-hover:text-white"
                />
              </button>
              <button
                class="w-[30px] h-[30px] flex items-center justify-center border rounded-full border-darkColor duration-150 group hover:bg-darkColor"
              >
                <IconCSS name="mingcute:github-fill" class="text-darkColor duration-150 group-hover:text-white" />
              </button>
            </div>
            <label
              for="chk"
              aria-hidden="true"
              class="flex flex-col items-center justify-center"
            >
              Do you not have a profile?
              <span
                class="text-metal inline-block duration-150 border-0 hover:border-b cursor-pointer"
                >Sign up</span
              >
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: "auth" });
</script>
<style scoped lang="css">
.card {
  width: 350px;
  height: 440px;
  perspective: 1500;
}
#chk {
  display: none;
}

#chk:checked ~ .content {
  animation: 2s animate;
  transform: rotateY(180deg);
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); */
  transition: transform 1s cubic-bezier(0.75, 0, 0.85, 1);
  border-radius: 8px;
}

.front,
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #fff; */
  backface-visibility: hidden;
  transform-style: preserve-3d;
  perspective: 1500px;
  border-radius: 8px;
}
.back {
  transform: rotateY(180deg);
}
.inner {
  height: 100%;
  padding: 1.5em;
  transform: translateZ(80px) scale(1);
}
</style>
