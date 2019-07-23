const getters = {
  doublezIndex: state => {
    return state.zIndex * 2
  },
  getJwt: state => {
    return state.jwt
  },
  getRequestAddFormTab: state => {
    return state.request.addForm.tab
  },
  getRequestAddFormStep: state => {
    let reducer = (previousValue, currentValue) => previousValue + currentValue
    let step = state.request.addform.valCount.reduce(reducer)
    return step
  },
  getRequestAddFormGeneralValCount: state => {
    return state.request.addForm.valCount.general
  },
  getRequestAddFormSubmitterValCount: state => {
    return state.request.addForm.valCount.submitter
  }
}

export default getters