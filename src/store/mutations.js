import { setStore } from '../util/local'
export default {
  server (state, {
    hash, data
  }) {
    state.server[hash] = data
  },
  asideW (state, asideW) {
    if (asideW >= 0) {
      setStore(state, 'asideW', asideW)
    }
  }
}
