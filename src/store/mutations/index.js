/**
 * Created by zzmhot on 2017/3/21.
 *
 * @author: zzmhot
 * @github: https://github.com/zzmhot
 * @email: zzmhot@163.com
 * @Date: 2017/3/21 16:04
 * @Copyright(©) 2017 by zzmhot.
 *
 */
import * as type from './type'
import {cookieStorage} from 'src/common/storage'

export default {
  // 设置用户信息和是否登录
  [type.SET_USER_INFO](state, userinfo) {
    state.user_info = userinfo || {}
    if (userinfo === null) {
      cookieStorage.remove('user_info')
    } else {
      cookieStorage.set('user_info', userinfo)
    }
  },
  // Keep in mind that response is an HTTP response
  // returned by the Promise.
  // The mutations are in charge of updating the client state.
  'GET_TODOS': function (state, response) {
    state.todos = response.body.results
  },
  'ADD_TODO': function (state, response) {
    state.todos.push(response.body)
  },
  'CLEAR_TODOS': function (state) {
    const todos = state.todos
    todos.splice(0, todos.length)
  },
  // Note that we added one more for logging out errors.
  'API_FAIL': function (state, response) {
    state.error = response.body
  }
}
