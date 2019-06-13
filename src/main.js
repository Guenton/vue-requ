// Plugin libraries
import Vue from 'vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import BootstrapVue from "bootstrap-vue"
import axios from "axios"
import VueAxios from "vue-axios"

// Css Expansion libraries
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "vue-material-design-icons/styles.css"

// Application Cores
import core from "./Core"
import router from "./Router"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(core)
}).$mount("#Core")
