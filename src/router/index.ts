import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../views/layout.vue'
  /*
  createWebHistory history
  createWebHashHistory hash
  */
const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      //手风琴
      {   
        path: '',
        name: 'accordion',
        component: () => import('@/views/accordion/accordion.vue')
      },
      // 多选标签
      {   
        path: '/menu',
        name: 'menu',
        component: () => import('@/views/menu/menu.vue')
      },
      //穿梭框
      {
        path: '/shuttle',
        name: 'shuttle',
        component: () => import('@/views/shuttle/shuttle.vue')
      },
      //轮播组件
      {
        path: '/carousel',
        name: 'carousel',
        component: () => import('@/views/carousel/carousel.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
