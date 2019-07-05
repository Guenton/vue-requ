const mutations = {
  incZindex (state) {
    state.zIndex++
  },
  setJwt (state, token) {
    state.jwt = token
  },
  setRequestAddFormTab (state, tab) {
    state.request.addFormTab = tab
  },
  setRequestAddFormStep (state, step) {
    state.request.addFormStep = step
  }
}

export default mutations