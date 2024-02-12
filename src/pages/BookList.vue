<script setup lang="ts">

</script>

<template>
  <section>
    <nav class="border-gray-200 bg-gray-50">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex">
          <img class="logo" src="../assets/images/bookIcon.svg" alt="logo">&nbsp;
          <h1 class="title text-black">Petra<span class="sub-title">Liblary&nbsp;Manager</span></h1>
        </a>
        <button type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg" aria-expanded="false">
        </button>
      </div>
    </nav>

    <body class="max-h-screen border-gray-200 bg-gray-50">
      aaa
    </body>
  </section>
</template>

<style scoped lang="scss">
// TODO:styleは共通化予定,fontsもどうにかしたい
.logo {
  max-width: 2rem;
}

.title {
  font-family: 'NotoSansJP';
  font-weight: bold;
  font-size: 2rem;

  .sub-title {
    font-family: 'NotoSansJP';
    font-weight: 300;
    font-size: 1rem;
    margin-left: 8px;
  }
}
</style>