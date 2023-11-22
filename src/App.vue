<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCount } from '@/stores/count'
const countUp = useCount()
const countString = computed(() => {
  return String(countUp.count)
})
</script>

<template>
  <section class="h-screen bg-white dark:bg-gray-800 text-white">
    <header>
      <div class="wrapper">
        <HelloWorld msg="Hello world!!" />
        <nav
          class="mb-10 py-4 px-6 font-bold font-mono transition-all text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:text-black dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:active:bg-yellow-600">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about" class="ml-4">About</RouterLink>
        </nav>
      </div>
    </header>

    <div class="flex items-center justify-center">
      <button @click="countUp.increment"
        class="py-4 px-6 font-bold font-mono rounded-md transition-all text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:text-black dark:bg-blue-400 dark:hover:bg-blue-500 dark:active:bg-blue-600">
        Count Up
      </button>
      <button @click="countUp.clearCount"
        class="ml-4 py-4 px-6 font-bold font-mono rounded-md transition-all text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:text-black dark:bg-blue-400 dark:hover:bg-blue-500 dark:active:bg-blue-600">
        Reset
      </button>
      <p
        class="ml-4 py-4 px-6 font-mono rounded-md transition-all text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:text-black dark:bg-red-400 dark:hover:bg-red-500 dark:active:bg-red-600">
        Count: {{ countUp.count }}</p>
      <p
        class="ml-4 py-4 px-6 font-mono rounded-md transition-all text-white bg-red-700 hover:bg-red-800 active:bg-red-900 dark:text-black dark:bg-red-400 dark:hover:bg-red-500 dark:active:bg-red-600">
        DoubleCount: {{ countUp.double }}</p>
      <p
        class="ml-4 py-4 px-6 font-mono rounded-md transition-all text-white bg-red-700 hover:bg-red-800 active:bg-red-900 dark:text-black dark:bg-red-400 dark:hover:bg-red-500 dark:active:bg-red-600">
        Count(String): {{ countString }}</p>
    </div>
    <RouterView />
  </section>
</template>@/store/count@/store/count