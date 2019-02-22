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
    state
  }, hash){
    return axios({
      url: '/md/' + hash + '.md',
      method: 'get'
    }).then(response => {
      return response.data
    })
  }
}
