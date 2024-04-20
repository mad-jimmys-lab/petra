<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  clickEvent: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <!-- TODO:tsの謎エラー出ているけど動いているので一旦無視します。余裕あったら調査予定 -->
  <button
    class="mt-8 bg-black hover:bg-black_hover text-white font-bold py-3 px-24 rounded focus:outline-none focus:shadow-outline"
    @click="clickEvent"
    id="loginBtn"
  >
    {{ title }}
  </button>
</template>

<style scoped lang="scss"></style>
