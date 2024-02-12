import { createRouter, createWebHistory } from 'vue-router'
import LoginTop from '../pages/LoginTop.vue'
import BookList from '../pages/BookList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      name: 'LoginTop',
      component: LoginTop 
    },
    { 
      path: '/BookList',
      name: 'BookList',
      component: BookList 
    },
  ]
})

export default router
