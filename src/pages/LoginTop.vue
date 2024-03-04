<script setup lang="ts">
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import errorMassageUtil from '@/assets/ts/error-massage-util';

const email = ref('');
const password = ref('');
const router = useRouter();
const errMsgs = ref<string[]>([]);
const auth = getAuth();

const isLoading = ref(false)

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
      console.log(errMsgs.value)
      errMsgs.value = []
      // TODO: 分岐に入らないエラーがありそう（firebase側の調査が必要）
      switch (error.code) {
        //メールアドレスが違うエラー
        case "auth/invalid-email":
          errMsgs.value.push(errorMassageUtil.INVALID_EMAIL);
          break;
        //ユーザーが存在しないエラー
        case "auth/user-not-found":
          errMsgs.value.push(errorMassageUtil.USER_NOT_FOUND);
          break;
        //パスワードが違うエラー
        case "auth/wrong-password":
          errMsgs.value.push(errorMassageUtil.WRONG_PASSWORD);
          break;
        //パスワード未入力エラー
        case "auth/missing-password":
          errMsgs.value.push(errorMassageUtil.MISSING_PASSWORD);
          break;
      }
      isLoading.value = false
    });
}

</script>

<template>
  <section class="h-screen">
    <div :class="{ loading: isLoading }"></div>
    <!-- TODO:logoもコンポーネント化したい、画像でよい気もしている -->
    <div class="flex mb-10">
      <img class="logo" src="../assets/images/bookIcon.svg" alt="logo">&nbsp;
      <h1 class="title text-black">Petra<span class="sub-title">Library&nbsp;Manager</span></h1>
    </div>
    <div>
      <div v-if="errMsgs" class="error-massage">
        <p v-for="errMsg in errMsgs" :key="errMsg">{{ errMsg }}</p>
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

  .error-massage {
    color: red;
  }
}

.logo {
  max-width: 5rem;
}

.title {
  font-family: 'NotoSansJP';
  font-weight: bold;
  font-size: 5rem;

  .sub-title {
    font-family: 'NotoSansJP';
    font-weight: 300;
    font-size: 2rem;
    margin-left: 8px;
  }
}
</style>