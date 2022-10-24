import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/main/HomePages/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          isLogin: true
        }
      },
      {
        path: 'params',
        name: 'Params',
        component: () => import('../views/main/Params.vue'),
        meta: {
          isLogin: true
        }
      },
      {
        path: 'ad',
        name: 'ADCategory',
        component: () => import('../views/main/ADCategory.vue'),
        meta: {
          isLogin: true
        }
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/main/Product.vue'),
        meta: {
          isLogin: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
