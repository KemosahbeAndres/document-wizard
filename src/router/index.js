import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../pages/DashboardPage.vue'),

    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        hideNavbar: true
      }
    }
  ],
})

export default router
