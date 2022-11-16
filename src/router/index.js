import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/About.vue')
      },
   
    
  ]
})

export default router