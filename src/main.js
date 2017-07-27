import Vue from 'vue'
import App from './App'
import store from './store'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

Vue.use(Router)

/* eslint-disable no-new */
var v = new Vue({
  el: 'body',
  store: store,
  components: { App }
})
