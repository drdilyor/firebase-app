import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from '@/firebase'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Settings from '../views/Settings.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: true},
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {requiresAuth: true},
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser) {
    next('/login')
  }
  else {
    next()
  }
})

export default router
