import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import config from '../config/runtime'

let $axios = axios.create({
  baseURL: config.publicPath,
  timeout: 15000,
  transformRequest: [function (data) {
    return data instanceof FormData ? data : qs.stringify(data)
  }]
})

let loadUI = null;
let vm = Vue.prototype;
// 添加请求拦截器
$axios.interceptors.request.use(function (config) {
  loadUI = vm.$loading && vm.$loading({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.1)'
  })
  return config
}, function (error) {
  loadUI && loadUI.close()
  vm.$msgbox({
    type: 'error',
    title: '错误提示',
    message: error.message,
    center: true,
    timer: 3000
  }).then(() => {
  }).catch(() => {
  })
  return Promise.reject(error)
})
  
// 添加响应拦截器
$axios.interceptors.response.use(function (response) {
  loadUI && loadUI.close()
  return Promise.resolve(response)
}, function (error) {
  loadUI && loadUI.close()
  vm.$msgbox({
      type: 'error',
      title: '错误提示',
      message: error.message,
      center: true,
      timer: 3000
  }).then(() => {
  }).catch(() => {
  })
  return Promise.reject(error)
})
export const service = {
  install () {
    Vue.prototype.$axios = $axios
  }
}
export default $axios
