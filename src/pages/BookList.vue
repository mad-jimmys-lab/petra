<script setup lang="ts">
import { ref } from 'vue'
import MainHeader from '@/components/modules/MainHeader.vue'

// 以下、権限はfirebaseから取得してくる
const authorityRole = ref('admin')
</script>

<template>
  <MainHeader :authority-role="authorityRole" />
  <section class="book-list">
    <body class="h-screen" style="background-color: #f1f1f1; padding-top: 64px">
      test
    </body>
  </section>
</template>
