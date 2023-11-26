<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTest } from '@/services/test'

const testData = ref();

onMounted(() => {
  test()
})

const test = async () => {
  testData.value = await getTest()
}
</script>

<template>
  <div v-for="data in testData" :key="data.id">
    <div class="bg-blue-400 p-4 mb-4 text-center text-black">
      {{ data.title }}
    </div>
  </div>
</template>