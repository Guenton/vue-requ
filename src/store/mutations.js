const mutations = {
  increment (state) {
    state.zIndex++
  },
  newJwt (state, token) {
    state.jwt = token
  }
}

export default mutations