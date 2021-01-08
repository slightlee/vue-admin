import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login/index'

// 路由配置
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
