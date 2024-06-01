<script setup lang="ts">
import { ref } from 'vue'
import MainHeader from '@/components/modules/MainHeader.vue'
import PageHeading from '@/components/common/PageHeading.vue'

const pageHeading = '書籍一覧'

// 以下、権限はfirebaseから取得してくる
const authorityRole = ref('admin')
</script>

<template>
  <MainHeader :authority-role="authorityRole" />
  <section class="book-list">
    <body class="h-screen">
      <PageHeading :page="pageHeading"></PageHeading>
    </body>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/variables/media' as media;

.book-list {
  background-color: colors.$bg-main;
  padding-top: 64px;

  // mediaquery test
  @include media.mq(tab) {
    background-color: aqua;
  }

  @include media.mq(pc) {
    background-color: red;
  }
}
</style>
