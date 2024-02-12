<script setup lang="ts">
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
const errMsg = ref('');
const auth = getAuth();

function login() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log(auth.currentUser);
      router.push('/BookList');
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        //メールアドレスが違うエラー
        case "auth/invalid-email":
          errMsg.value = "メールアドレスが不正です";
          break;
        //ユーザーが存在しないエラー
        case "auth/user-not-found":
          errMsg.value = "ユーザーが見つかりません";
          break;
        //パスワードが違うエラー
        case "auth/wrong-password":
          errMsg.value = "パスワードが間違っています";
          break;
      }
    });
}

</script>

<template>
  <section class="h-screen">
    <!-- TODO:logoもコンポーネント化したい、画像でよい気もしている -->
    <div class="flex mb-10">
      <img class="logo" src="../assets/images/bookIcon.svg" alt="logo">&nbsp;
      <h1 class="title text-black">Petra<span class="sub-title">Liblary&nbsp;Manager</span></h1>
    </div>
    <div>
      <div class="mb-4">
        <input
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email" type="email" placeholder="メールアドレス" v-model="email">
      </div>
      <div class="mb-4">
        <input
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password" type="password" placeholder="パスワード" v-model="password">
      </div>
      <p v-if="errMsg">{{ errMsg }}</p>
    </div>
    <!-- TODO:ボタンはコンポーネント化する -->
    <button
      class="mt-8 bg-black hover:bg-black_hover text-white font-bold py-3 px-24 rounded focus:outline-none focus:shadow-outline"
      @click="login">Login</button>
  </section>
</template>

<style scoped lang="scss">
// TODO:styleは共通化予定,fontsもどうにかしたい
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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