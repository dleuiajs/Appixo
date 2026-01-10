import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/apps/:appTypePlural',
      name: 'apps',
      component: () => import('../views/AppsView.vue'),
      props: true,
    },
    {
      path: '/apps/:appTypePlural/:appName',
      name: 'app',
      component: () => import('../views/AppDetail.vue'),
      props: true,
    },
  ],
})

export default router
