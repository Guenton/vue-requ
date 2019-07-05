const getters = {
  doublezIndex: state => {
    return state.zIndex * 2
  },
  getJwt: state => {
    return state.jwt
  },
  getRequestAddFormTab: state => {
    return state.request.addFormTab
  },
  getRequestAddFormStep: state => {
    return state.request.addFormStep
  }
}

export default getters