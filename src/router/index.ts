import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '../pages/TopPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      name: 'TopPage',
      component: TopPage 
    },
  ]
})

export default router
