import Vue from 'vue'
import Axios from 'axios';

import VueAxios from 'vue-axios'

import { cookieStorage } from 'src/common/storage'

const myApi = Axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 5000,
  withCredentials: false,
//   transformRequest: [(data) => JSON.stringify(data.data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

Vue.use(VueAxios, Axios)

// //添加请求拦截器
// myApi.interceptors.request.use(config => {
//     //在发送请求之前做某事
//     let token = cookieStorage.get('user_info').token
//     // console.log(config.headers)
//     if (token) {
//         // config.headers['Authenticate'] = "Token " + token;
//         // myApi.defaults.headers.common['Authenticate'] = "Token " + token;
        
//     } 
//     return config
// }, error => {
//     return Promise.reject(error)
// });

export default myApi
