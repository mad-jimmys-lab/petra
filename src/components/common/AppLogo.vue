<script setup lang="ts"></script>

<template>
  <div class="flex mb-10">
    <img class="logo" src="../../assets/images/bookIcon.svg" alt="app-logo">&nbsp;
    <h1 class="title text-5xl md:text-7xl text-black">Petra<span
        class="sub-title hidden md:inline-block">Library&nbsp;Manager</span></h1>
  </div>
</template>

<style scoped lang="scss">
.logo {
  max-width: 3rem;
}

.title {
  font-family: 'NotoSansJP';
  font-weight: bold;

  .sub-title {
    font-family: 'NotoSansJP';
    font-weight: 300;
    font-size: 2rem;
    margin-left: 8px;
  }
}

@media (min-width: 768px) {
  .logo {
    max-width: 4.5rem;
  }
}
</style>