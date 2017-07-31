import Vue from 'vue'
import App from './App'
import store from './store'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

Vue.use(Router)

/* eslint-disable no-new */
var v = new Vue({
  el: 'app',
  store: store,
  components: { App },
      mounted() {
      console.log('app init')
    // return the Promise from the action
    store.dispatch('getTodos')

    }
})
