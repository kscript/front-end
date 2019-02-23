import axios from '../axios'
export default {
  toolList({
    state
  }){
    return axios({
      url: '/api/server.json',
      method: 'get'
    }).then(response => {
      return response.data
    })
  },
  server({
    state,
    commit
  }, hash){
    if (state.server[hash]) {
      return new Promise(resolve => {
        resolve(state.server[hash])
      })
    }
    return axios({
      url: '/md/' + hash + '.md',
      method: 'get'
    }).then(({ data }) => {
      commit('server', {
        hash,
        data 
      })
      return data
    })
  }
}
