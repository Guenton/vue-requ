const mutations = {
  incZindex (state) {
    state.zIndex++
  },
  setJwt (state, token) {
    state.jwt = token
  },

  // Request State Mutations
  setRequestAddFormTab (state, tab) {
    state.request.addForm.tab = tab
  },
  setRequestAddFormGeneralValCount (state, count) {
    state.request.addForm.valCount.general = count
  },
  setRequestAddFormSubmitterValCount (state, count) {
    state.request.addForm.valCount.submitter = count
  },
  setRequestAddFormDescriptionValCount (state, count) {
    state.request.addForm.valCount.description = count
  },
  setRequestAddFormAttachValCount (state, count) {
    state.request.addForm.valCount.attach = count
  },
  
}

export default mutations