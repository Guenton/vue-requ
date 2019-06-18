import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import mutations from "./mutations"
import getters from "./getters"

const store = new Vuex.Store({
  state: {
    zIndex: 0,
    jwt: null
  },
  mutations,
  getters
})

export default store