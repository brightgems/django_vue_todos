/**
 * Created by zzmhot on 2017/3/21. * @author:zzmhot * @github:https://github.com/zzmhot * @email:zzmhot@163.com * @Date:2017/3/21 16:04 * @Copyright(©)2017 by zzmhot. *  */

import * as mutations from '../mutations/type'
import api from '../api.js'

export default {
  // We added a getTodos action for the initial load from the server
  // These URLs come straight from the Django URL router we did in Part 3

  getTodos (store) {
    return api.get('/api/todos/')
      .then((response) => store.commit('GET_TODOS', response))
      .catch((error) => store.commit('API_FAIL', error))
  },
  addTodo (store, todo) {
    return api.post('/api/todos/', todo)
      .then((response) => store.commit('ADD_TODO', response))
      .catch((error) => store.commit('API_FAIL', error))
  },
  clearTodos (store) {
    return api.delete('/api/todos/clear_todos/')
      .then((response) => store.commit('CLEAR_TODOS'))
      .catch((error) => store.commit('API_FAIL', error))
  },
  login (store, data) {
    return api.post('/api-token-auth/', data).then(
          (resp) => {
            console.log('login success')
            store.commit(mutations.SET_USER_INFO, resp.data)
            // write token to axios default headers
            var token = resp.data.token
            api.defaults.headers.common['Authorization'] = 'Token ' + token

          }
        ).catch(error => {
          console.warn('login error')
          console.log(error)
        })
  }
}
