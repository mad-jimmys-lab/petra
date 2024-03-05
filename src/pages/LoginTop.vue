<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import errorMessageUtil from '@/assets/ts/error-message-util';
import AppLogo from '@/components/common/AppLogo.vue';

const email = ref('');
const password = ref('');
const router = useRouter();
const errorMessageList = ref<string[]>([]);
const auth = getAuth();
const isLoading = ref(false);

function login(e: any) {
  isLoading.value = true
  e.target.blur()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log(auth.currentUser);
      router.push('/BookList');
      isLoading.value = false
    })
    .catch((error) => {
      console.log(error.code)
      console.log(errorMessageList.value)
      errorMessageList.value = []
      // TODO: 分岐に入らないエラーがありそう（firebase側の調査が必要）
      switch (error.code) {
        //メールアドレスが違うエラー
        case "auth/invalid-email":
          errorMessageList.value.push(errorMessageUtil.INVALID_EMAIL);
          break;
        //ユーザーが存在しないエラー
        case "auth/user-not-found":
          errorMessageList.value.push(errorMessageUtil.USER_NOT_FOUND);
          break;
        //パスワードが違うエラー
        case "auth/wrong-password":
          errorMessageList.value.push(errorMessageUtil.WRONG_PASSWORD);
          break;
        //パスワード未入力エラー
        case "auth/missing-password":
          errorMessageList.value.push(errorMessageUtil.MISSING_PASSWORD);
          break;
      }
      isLoading.value = false
    });
}

</script>

<template>
  <section class="h-screen">
    <div :class="{ loading: isLoading }"></div>
    <AppLogo />
    <div>
      <div v-if="errorMessageList" class="error-message">
        <p v-for="(errorMessage, index) in errorMessageList" :key="index">{{ errorMessage }}</p>
      </div>
      <div class="mb-4">
        <input
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email" type="email" placeholder="メールアドレス" v-model="email">
      </div>
      <div class="mb-4">
        <input
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password" type="password" placeholder="パスワード" v-model="password">
      </div>
    </div>
    <!-- TODO:ボタンはコンポーネント化する -->
    <button
      class="mt-8 bg-black hover:bg-black_hover text-white font-bold py-3 px-24 rounded focus:outline-none focus:shadow-outline"
      @click="login" id="loginBtn">Login</button>
  </section>
</template>

<style scoped lang="scss">
// TODO:styleは共通化予定,fontsもどうにかしたい
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .loading {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    opacity: 0.75;
    z-index: 1;
  }

  .error-message {
    color: red;
  }
}
</style>