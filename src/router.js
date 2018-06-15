import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Account from './views/Account.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: false }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }
    }
  ]
})
