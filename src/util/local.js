import config from '../../config/runtime'
export const setLocal = function (key, data) {
  if (data instanceof Object) {
    data = JSON.stringify(data)
  }
  localStorage.setItem(config.local_pre + key, data)
}
export const getLocal = function (key) {
  let data = localStorage.getItem(config.local_pre + key)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}
export const getStore = function (state, key) {
  return state[key] === undefined || isEmpty(state[key]) ? getLocal(key) : state[key]
}
export const setStore = function (state, key, val) {
  state[key] = val
  setLocal(key, val)
  return state
}
export const isEmpty = function (obj) {
  if (obj instanceof Object) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return true
    }
  }
  return false
}
export default {
  isEmpty,
  getLocal,
  setLocal,
  getStore,
  setStore
}
