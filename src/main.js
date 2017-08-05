import Vue from 'vue'
import App from './App'
import store from './store'
import Router from 'vue-router'
import Login from './pages/user/Login.vue'
import Home from './pages/Home.vue'
import {cookieStorage} from 'src/common/storage'
// import { sync } from 'vuex-router-sync'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // NProgress.start();
  if (to.path == '/login') {
    cookieStorage.remove('user_info')
  }
  let user = cookieStorage.get('user_info')
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})


/* eslint-disable no-new */
export default new Vue({
  el: 'app',
  store: store,
  router: router,
  components: { App },
  mounted () {
    console.log('app init')
    // return the Promise from the action
    store.dispatch('getTodos')
  }
})
