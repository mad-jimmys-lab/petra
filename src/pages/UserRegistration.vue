<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { db } from '../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'

import ButtonBasic from '@/components/common/ButtonBasic.vue'
import errorMessage from '@/assets/ts/defs/error-message'
import MainHeader from '@/components/modules/MainHeader.vue'
import AuthorityRole from '@/assets/ts/defs/authority-role'

const auth = getAuth()
const authority = ref<string>('')
const authorityRole = ref('admin')
const email = ref<string>('')
const errorMessageList = ref<string[]>([])
const isLoading = ref<boolean>(false)
const password = ref<string>('')
const router = useRouter()
const userName = ref<string>('')

const authorityObj = ref([
  { name: '管理者', code: AuthorityRole.ADMIN.code },
  { name: '一般ユーザー', code: AuthorityRole.USER.code }
])

const userRegistration = (e: { target: HTMLButtonElement }) => {
  isLoading.value = true
  e.target.blur()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log(auth.currentUser)
      isLoading.value = false
    })
    .then(() => {
      addDoc(collection(db, 'users'), {
        user_name: userName.value,
        email: email.value,
        authority: authority.value,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
      })
    })
    .then(() => {
      const actionCodeSettings = {
        // TODO:本番環境のログイン画面のURLに変更
        url: 'http://localhost:5173/',
        handleCodeInApp: false
      }
      sendPasswordResetEmail(auth, email.value, actionCodeSettings)
        .then((resp) => {
          // メール送信成功
        })
        .catch((error) => {
          // メール送信失敗
          console.log(error)
        })

      router.push('/BookList')
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
  <MainHeader :authority-role="authorityRole" />
  <section class="login-top h-screen bg-main">
    <div :class="{ loading: isLoading }"></div>
    <h1 class="text-4xl mb-12">ユーザー登録</h1>
    <div>
      <div v-if="errorMessageList" class="text-error">
        <p v-for="(errorMessage, index) in errorMessageList" :key="index">{{ errorMessage }}</p>
      </div>
      <div class="mb-6">
        <input
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="userName"
          type="text"
          placeholder="名前"
          v-model="userName"
        />
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
      <div class="mb-4">
        <select
          v-model="authority"
          class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option disabled value="">権限を選択してください</option>
          <option v-for="obj in authorityObj" :key="obj.code" :value="obj.code">
            {{ obj.name }}
          </option>
        </select>
      </div>
    </div>
    <ButtonBasic title="新規登録" :click-event="userRegistration" />
  </section>
</template>
