const getters = {
  doublezIndex: state => {
    return state.zIndex * 2
  },
  getJwt: state => {
    return state.jwt
  }
}

export default getters