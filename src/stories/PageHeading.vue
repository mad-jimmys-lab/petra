<script setup lang="ts">
const props = defineProps({
  page: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="page-hedding-wrapper">
    <label class="page-heading">{{ props.page }}</label>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables/font' as font;
@use '@/assets/scss/variables/colors' as colors;
@use '@/assets/scss/variables/media' as media;

.page-hedding-wrapper {
  width: 80vw;
  margin: 20px auto;

  @include media.mq(tab) {
    margin: 50px auto;
  }

  .page-heading {
    color: colors.$font-main;
    font-size: font.$font-size-20;
    font-weight: bold;
  }
}
</style>
