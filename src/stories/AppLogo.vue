<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  page: {
    type: String,
    required: true
  }
})

const login = computed(() => {
  return props.page === 'login'
})
const header = computed(() => {
  return props.page === 'header'
})
</script>

<template>
  <div class="app-logo flex" :class="{ 'mb-10': login }">
    <img
      :class="{ 'login-logo': login, 'header-logo': header }"
      src="../assets/images/bookIcon.svg"
      alt="app-logo"
    />&nbsp;
    <h1 class="text-black" :class="{ 'login-title': login, 'header-title': header }">
      Petra<span
        class="hidden md:inline-block"
        :class="{ 'login-sub-title': login, 'header-sub-title': header }"
        >Library&nbsp;Manager</span
      >
    </h1>
  </div>
</template>
