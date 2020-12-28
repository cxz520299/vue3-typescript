import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import layout from '../views/layout.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {   
        path: '',
        name: 'accordion',
        component: () => import('@/views/accordion/accordion.vue')
      },
      {   
        path: '/menu',
        name: 'menu',
        component: () => import('@/views/menu/menu.vue')
      },
      {
        path: '/shuttle',
        name: 'shuttle',
        component: () => import('@/views/shuttle/shuttle.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
