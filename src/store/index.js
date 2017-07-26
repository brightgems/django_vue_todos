
import Vue from 'vue'
import Vuex from 'vuex'
//引入模块
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './states'

Vue.use(Vuex) // only required if you're using modules.
              // We're using modules, so there you go.

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
