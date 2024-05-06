<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import AppLogo from '@/components/common/AppLogo.vue'
import ButtonBasic from '@/components/common/ButtonBasic.vue'

import errorMessage from '@/assets/ts/defs/error-message'

const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()
const errorMessageList = ref<string[]>([])
const auth = getAuth()
const isLoading = ref<boolean>(false)

const userRegistration = (e: { target: HTMLButtonElement }) => {
  isLoading.value = true
  e.target.blur()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log(auth.currentUser)
      router.push('/BookList')
      isLoading.value = false
    })
    .catch((error) => {
      console.log(error.code)
      errorMessageList.value = []
      // TODO: 分岐に入らないエラーがありそう（firebase側の調査が必要）
      switch (error.code) {
        // メールアドレスが違うエラー
        case 'auth/invalid-email':
          errorMessageList.value.push(errorMessage.INVALID_EMAIL)
          break
        // ユーザーが存在しないエラー
        case 'auth/user-not-found':
          errorMessageList.value.push(errorMessage.USER_NOT_FOUND)
          break
        // パスワードが違うエラー
        case 'auth/wrong-password':
          errorMessageList.value.push(errorMessage.WRONG_PASSWORD)
          break
        // パスワード未入力エラー
        case 'auth/missing-password':
          errorMessageList.value.push(errorMessage.MISSING_PASSWORD)
          break
      }
      isLoading.value = false
    })
}
</script>

<template>
  <section class="login-top h-screen">
    <div :class="{ loading: isLoading }"></div>
    <AppLogo page="login" />
    <div>
      <div v-if="errorMessageList" class="text-error">
        <p v-for="(errorMessage, index) in errorMessageList" :key="index">{{ errorMessage }}</p>
      </div>
      <div class="mb-4">
        <input
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email"
          type="email"
          placeholder="メールアドレス"
          v-model="email"
        />
      </div>
      <div class="mb-4">
        <input
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password"
          type="password"
          placeholder="パスワード"
          v-model="password"
        />
      </div>
    </div>
    <ButtonBasic title="SignUp" :click-event="userRegistration" />
  </section>
</template>
