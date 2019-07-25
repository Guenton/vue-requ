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
    let steps = 
      state.request.addForm.valCount.general +
      state.request.addForm.valCount.submitter +
      state.request.addForm.valCount.description +
      state.request.addForm.valCount.attach
    return steps
  },
  getRequestAddFormGeneralValCount: state => {
    return state.request.addForm.valCount.general
  },
  getRequestAddFormSubmitterValCount: state => {
    return state.request.addForm.valCount.submitter
  }
}

export default getters