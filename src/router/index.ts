import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import LoginTop from '../pages/LoginTop.vue'
import BookList from '../pages/BookList.vue'
import UserRegistration from '../pages/userRegistration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginTop',
      component: LoginTop
    },
    {
      path: '/UserRegistration',
      name: 'UserRegistration',
      component: UserRegistration
    },
    {
      path: '/BookList',
      name: 'BookList',
      component: BookList,
      meta: { requiresAuth: true }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
