import axios from '../axios'
import runtime from '../../config/runtime'
let configDispatch = null;
export default {
  config ({
    state,
    commit
  }, refresh) {
    if (!refresh && state.config) {
      return new Promise(resolve => {
        resolve(state.config)
      })
    }
    return axios({
      url: runtime.configPath,
      method: 'get'
    }).then(response => {
      commit('config', response.data)
      return response.data
    })
  },
  routes ({
    dispatch,
    state,
    commit
  }, refresh) {
    return (configDispatch = configDispatch || dispatch('config')).then(() => {
      if (!refresh && state.routes.length) {
        return state.routes
      }
      return axios({
        url: state.config.routes,
        method: 'get'
      }).then(response => {
        commit('routes', response.data)
        return response.data
      })
    })
  },
  server ({
    dispatch,
    state,
    commit
  }, hash) {
    return (configDispatch = configDispatch || dispatch('config')).then(() => {
      if (state.server[hash]) {
        return state.server[hash]
      }
      return axios({
        url: state.config.server.path + hash + state.config.server.ext,
        method: 'get'
      }).then(({ data }) => {
        commit('server', {
          hash,
          data 
        })
        return data
      })
    })
  }
}
