export default {
  server (state, {
    hash, data
  }) {
    state.server[hash] = data
  }
}
