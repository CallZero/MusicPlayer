import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/Home.vue'
import login from '../views/login.vue'
import Main from '../views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/Main'
    }, {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    }, {
      path: '/Main',
      component: Main
    }
  ]
})