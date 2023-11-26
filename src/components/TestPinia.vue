<script setup lang="ts">
import { computed } from 'vue'
import { useCountStore } from '@/stores/index'
const countUp = useCountStore()
const countString = computed(() => {
  return String(countUp.count)
})
</script>

<template>
  <div class="flex items-center justify-center">
    <button @click="countUp.increment"
      class="py-4 px-6 font-bold font-mono rounded-md transition-all text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:text-black dark:bg-blue-400 dark:hover:bg-blue-500 dark:active:bg-blue-600">
      Count Up
    </button>
    <button @click="countUp.resetCount"
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
</template>