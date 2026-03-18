import DataLoad from '@/views/DataLoad.vue'
import DogData from '@/views/DogData.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DataLoad
    },
    {
      path: '/dog/:id',
      name: 'DogData',
      component: DogData
    }
  ],
})

export default router
