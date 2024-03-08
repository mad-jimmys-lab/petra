import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/sass/app.scss'
import router from './router'
import './firebase/firebase'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
