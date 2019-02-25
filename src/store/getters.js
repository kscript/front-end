import { getStore, getLocal } from '../util/local'
export default {
  server (state) {
    return state.server
  },
  asideW (state) {
    let asideW = getLocal('asideW')
    return asideW === null ? state.asideW : ~~asideW
  }
}
