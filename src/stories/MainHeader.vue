<script setup lang="ts">
import { computed, ref } from 'vue'
import { Cog6ToothIcon, Bars3Icon } from '@heroicons/vue/24/outline'
import AppLogo from './AppLogo.vue'
import AuthorityRole from '@/assets/ts/defs/authority-role'

const props = defineProps({
  authorityRole: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)

const hasAuthorityByAdmin = computed<boolean>(() => {
  return props.authorityRole === AuthorityRole.ADMIN.name
})

const openPanel = (): void => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="main-header w-screen">
    <nav>
      <div class="header-row p-4">
        <router-link to="/BookList">
          <AppLogo page="header" />
        </router-link>
        <button
          v-if="hasAuthorityByAdmin"
          type="button"
          class="header-item"
          aria-controls="menu"
          aria-expanded="false"
          @click="openPanel"
        >
          <Cog6ToothIcon class="header-link hidden md:inline-block h-8 w-8" aria-hidden="true" />
          <Bars3Icon class="header-link md:hidden h-8 w-8" aria-hidden="true" />
        </button>
      </div>
      <div v-if="isOpen" class="header-menu" id="menu" aria-hidden="true">
        <ul class="p-4 text-center md:text-left">
          <!-- TODO:router-linkはpathが出来次第修正予定 -->
          <li class="header-link mb-2">
            <router-link to="/">ユーザー登録</router-link>
          </li>
          <li class="header-link mb-2">
            <router-link to="/">ユーザー管理</router-link>
          </li>
          <li class="header-link">
            <router-link to="/">書籍登録</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
