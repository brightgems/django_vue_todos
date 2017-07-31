import Vue from 'vue'
import Axios from 'axios';

import VueAxios from 'vue-axios'

import { cookieStorage } from 'src/common/storage'

Axios.defaults.timeout = 5000;
Axios.defaults.headers.post['Content-Type'] = 'application/json;';
Axios.defaults.baseURL = 'http://localhost:4000/';

Vue.use(VueAxios, Axios)

//添加请求拦截器
Axios.interceptors.request.use(config => {
    //在发送请求之前做某事
    let token = cookieStorage.get('user_info').token
    if (token) {
        Axios.defaults.headers.common['Authenticate'] = "Token " + token;
    } else {
        Axios.defaults.headers.common['Authorization'] = "";
        console.log(config)
    }
    return config
}, error => {
    return Promise.reject(error)
});

export default Axios
// export default {
//     get(url, request) {
//         return Axios.get(url, request)
//             .then((response) => Promise.resolve(response))
//             .catch((error) => Promise.reject(error))
//     },
//     post(url, request) {
//         return Axios.post(url, request)
//             .then((response) => Promise.resolve(response))
//             .catch((error) => Promise.reject(error))
//     },
//     patch(url, request) {
//         return Axios.patch(url, request)
//             .then((response) => Promise.resolve(response))
//             .catch((error) => Promise.reject(error))
//     },
//     delete(url, request) {
//         return Axios.delete(url, request)
//             .then((response) => Promise.resolve(response))
//             .catch((error) => Promise.reject(error))
//     }
// }
