<script setup lang="ts">
import { ref } from 'vue'
// import { getBookImage } from '@/services/liblary'
import TestAxios from './components/TestAxios.vue'
import TestPinia from './components/TestPinia.vue'
const BOOK_IMAGE_URL = 'https://iss.ndl.go.jp/thumbnail/';


const isbnCode = ref();
const bookImageUrl = ref();
const searchBookImage = () => {
  const url = BOOK_IMAGE_URL + isbnCode.value;
  bookImageUrl.value = url;
  console.log(bookImageUrl.value);
  // getBookImage(isbnCode.value);
  // console.log(testImage.value);
}

// const testImage = computed(() => {
//   return 'https://iss.ndl.go.jp/thumbnail/' + isbnCode.value;
// })

</script>

<template>
  <section class="h-screen bg-white dark:bg-gray-800 text-white">

    <TestAxios />
    <TestPinia />

    <div class="w-full max-w-xs mx-auto mt-6">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            ISBNコード
          </label>
          <input v-model="isbnCode"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="isbncode" type="text" placeholder="例）9784297126353" maxlength="13">
        </div>
        <div class="flex items-center justify-between">
          <button @click="searchBookImage"
            class="w-full mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            送信
          </button>
        </div>
      </form>
    </div>

    <div v-if="bookImageUrl">
      <img :src="bookImageUrl.value" alt="typescript">
    </div>

  </section>
</template>