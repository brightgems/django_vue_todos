/**
 * Created by zzmhot on 2017/3/21. * @author:zzmhot * @github:https://github.com/zzmhot * @email:zzmhot@163.com * @Date:2017/3/21 16:04 * @Copyright(©)2017 by zzmhot. *  */

import * as actions from './type'
import * as mutations from './type'
import api from '../api.js'

const apiRoot = 'http://localhost:4000'

export default {
  // 设置用户信息和登录
  [actions.SET_USER_INFO] ( { commit }, userinfo) {
    commit(mutations.SET_USER_INFO, userinfo)
  }, 
  // We added a getTodos action for the initial load from the server
  // These URLs come straight from the Django URL router we did in Part 3
  getTodos(store) {
    return api.get(apiRoot + '/api/todos/')
      .then((response) => store.commit('GET_TODOS', response))
      .catch((error) => store.commit('API_FAIL', error))
  }, 
  addTodo(store, todo) {
    return api.post(apiRoot + '/api/todos/', todo)
      .then((response) => store.commit('ADD_TODO', response))
      .catch((error) => store.commit('API_FAIL', error))
  }, 
  clearTodos(store) {
    return api.delete(apiRoot + '/api/todos/clear_todos/')
      .then((response) => store.commit('CLEAR_TODOS'))
      .catch((error) => store.commit('API_FAIL', error))
  },
}
