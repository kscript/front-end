import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

let $axios = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/': '/front-tools',
  timeout: 15000,
  transformRequest: [function (data) {
    return data instanceof FormData ? data : qs.stringify(data)
  }]
})

// 添加请求拦截器
$axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
  
// 添加响应拦截器
$axios.interceptors.response.use(function (response) {
  return Promise.resolve(response)
}, function (error) {
  return Promise.reject(error)
})
export const service = {
  install () {
    Vue.prototype.$axios = $axios
  }
}
export default $axios
