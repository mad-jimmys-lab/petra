<script setup lang="ts">
import { ref } from 'vue'
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems, Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { Cog6ToothIcon, UserCircleIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const isAdmin = ref(true)

const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}

// const isSP = computed(() => {
//   return window.matchMedia && window.matchMedia('(min-device-width: 640px)').matches;
// });

</script>

<template>
  <section>
    <!-- ヘッダーをコンポーネント化する -->
    <Disclosure as="nav" class="bg-gray-50 shadow">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <!-- TODO:ロゴをコンポーネント化する -->
              <a href="#" class="flex">
                <img class="logo" src="../assets/images/bookIcon.svg" alt="logo">&nbsp;
                <h1 class="title text-black hidden sm:inline-block">Petra<span
                    class="sub-title">Library&nbsp;Manager</span>
                </h1>
              </a>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- ログインしている人の名前 -->
            <!-- スマホのみ表示 -->
            <button type="button" @click="openModal"
              class="relative sm:hidden bg-gray-50 text-black hover:text-gray-400 text-sm">
              <UserCircleIcon class="h-6 w-6" aria-hidden="true" />
            </button>
            <!-- デスクトップのみ表示 -->
            <div class="hidden sm:inline-block hover:text-gray-400">
              <button type="button" @click="openModal">
                <label>Kazuya</label>&nbsp;
                <label>Tomoda</label>
              </button>
            </div>
            <!-- 管理者権限を持つユーザーのみ表示。設定ボタン dropdown -->
            <Menu v-if="isAdmin" as="div" class="relative ml-3">
              <div>
                <MenuButton class="relative flex rounded-full bg-gray-50 text-black hover:text-gray-400 text-sm">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <Cog6ToothIcon class="h-6 w-6" aria-hidden="true" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">ユーザー登録</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">ユーザー管理</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">書籍登録</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                  プロフィール
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm">
                    <label class="text-gray-500">名前：</label>&nbsp;<span>Kazuya</span>&nbsp;<span>Tomoda</span>
                  </p>
                  <p class="text-sm">
                    <label class="text-gray-500">権限：</label>&nbsp;<span>管理者</span>
                  </p>
                </div>
                <div class="mt-4">
                  <button type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal">
                    閉じる
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </section>
</template>

<style scoped lang="scss">
// TODO:styleは共通化予定,fontsもどうにかしたい
.logo {
  max-width: 2rem;
}

.title {
  font-family: 'NotoSansJP';
  font-weight: bold;
  font-size: 2rem;

  .sub-title {
    font-family: 'NotoSansJP';
    font-weight: 300;
    font-size: 1rem;
    margin-left: 8px;
  }
}
</style>
