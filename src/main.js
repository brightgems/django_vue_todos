import Vue from 'vue'
import App from './App'
import store from './store'
// import './assets/bootstrap.min.css'

/* eslint-disable no-new */
var v = new Vue({
  el: 'body',
  store: store,
  components: { App }
})
// This should be the only new line ***
v.$store.dispatch('getTodos')
