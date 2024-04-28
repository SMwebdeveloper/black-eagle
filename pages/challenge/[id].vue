<template>
  <div class="pb-5">
    <h2 class="text-4xl font-bold text-darkColor text-center mt-[3%] mb-4">
      JavaScript
    </h2>

    <div
      class="flex flex-col-reverse lg:flex-row items-center justify-center gap-y-2 gap-x-2 pb-6 border-b-2 border-darkColor mb-8"
    >
      <div
        class="bg-blue text-white px-2 py-0.5 flex items-center rounded-md font-semibold"
      >
        <IconCSS name="mingcute:cube-3d-fill" class="text-white mr-2 text-xl" />
        <h6 class="mr-2">Category:</h6>
        <span class="font-medium inline-block">Web development</span>
      </div>
      <div
        class="bg-darkColor text-white px-2 py-0.5 flex items-center rounded-md font-semibold"
      >
        <IconCSS
          name="material-symbols-light:stairs"
          class="text-white mr-2 text-xl"
        />
        <h6 class="mr-2">Dificult:</h6>
        <span class="font-medium inline-block">Easy</span>
      </div>
      <div
        class="bg-metal text-white px-2 py-0.5 flex items-center rounded-md font-semibold"
      >
        <IconCSS
          name="material-symbols-light:stars"
          class="text-white mr-2 text-xl"
        />
        <h6 class="mr-2">Score:</h6>
        <span class="font-medium inline-block">200</span>
      </div>
      <div
        class="bg-tahiti text-white px-2 py-0.5 flex items-center rounded-md font-semibold"
      >
        <IconCSS
          name="ph:flag-checkered-fill"
          class="text-white mr-2 text-xl"
        />
        <h6 class="mr-2">Solvers:</h6>
        <span class="font-medium inline-block">6</span>
      </div>
    </div>

    <div class="bg-white w-full rounded-lg shadow-lg px-3 py-4">
      <div class="flex gap-x-2 mb-6">
        <div
          class="bg-darkColor px-2 py-1 text-sm font-semibold uppercase text-white rounded-lg"
        >
          Kamikatze
        </div>
        <div
          class="bg-tahiti px-2 py-1 text-sm font-semibold uppercase text-white rounded-lg"
        >
          April 25, 2024
        </div>
      </div>

      <div>
        <h2
          class="text-2xl mb-4 pb-3 border-dotted border-b-4 border-darkColor text-darkColor font-medium"
        >
          Challenge desctiption
        </h2>
        <p class="text-justify mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          fugit consequatur sapiente alias earum fuga voluptate aperiam, debitis
          beatae adipisci voluptas assumenda molestiae. Deserunt facilis odit
          asperiores pariatur labore, numquam aut voluptatum consectetur! Sint
          et labore harum recusandae esse temporibus blanditiis dignissimos?
          Alias temporibus enim tempore dicta quae vitae illum adipisci soluta
          vero minus id eaque repellendus fugit delectus, accusantium magni
          natus? Ab similique excepturi dignissimos vel dicta labore aliquam
          ducimus iure. Quam cum amet molestiae similique sunt sapiente eaque at
          sit magni harum dolores quas, cumque, nobis suscipit. Ducimus adipisci
          expedita vitae deserunt quisquam earum sequi totam molestiae, qui
          accusamus inventore repellat officiis eius explicabo eaque quasi ad
          labore voluptatem facilis illum quia vero odio iste! Nulla deleniti
          modi mollitia nihil suscipit voluptatem quas velit nam incidunt,
          tenetur illo odit vel aspernatur et quisquam alias ipsa illum!
          Incidunt ipsa excepturi unde qui corrupti cupiditate omnis
          perspiciatis corporis beatae quia.
        </p>

        <h3 class="text-xl text-darkColor mb-3">
          Encrypted Flag: CBRPC.Z T:Fa{a0097105d36c58efYESAEU:CF
          lg6acbb696e87ec814}
        </h3>
        <a
          href=""
          download="download challenge"
          class="bg-blue p-2 inline-block text-white font-medium rounded-lg mb-2"
        >
          <IconCSS name="ph:download-light" class="text-white text-xl" />
          Downoad</a
        >

        <div>
          <input
            type="text"
            class="w-[500px] h-[38px] px-3 mr-4 text-base outline-none border border-darkColor text-darkColor rounded-xl"
            placeholder="Flag{fasd577asd545asd7f}"
          />
          <button class="bg-blue px-6 py-1 text-white text-xl rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>

    <!-- table -->
    <div class="mt-20">
      <h2 class="text-2xl font-medium text-darkColor mb-6">Solvers: 10</h2>
      <SharedTable />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
