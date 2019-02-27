import { setStore } from '../util/local'
export default {
  server (state, {
    hash, data
  }) {
    state.server[hash] = data
  },
  routes (state, routes) {
    state.routes = routes
  },
  config (state, config) {
    state.config = config
  },
  asideW (state, asideW) {
    if (asideW >= 0) {
      setStore(state, 'asideW', asideW)
    }
  }
}
