// Plugin libraries
import Vue from 'vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import BootstrapVue from "bootstrap-vue"
import axios from "axios"
import VueAxios from "vue-axios"
import { library } from "@fortawesome/fontawesome-svg-core"
import { 
  faHome, faUsers, faUserTie, faUser, faCog, faUserCog, faPowerOff, faClipboardList,
  faBriefcase, faUserTag, faFileAlt, faKey
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from "@fortawesome/vue-fontawesome"

// Css Expansion libraries
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Font Awesome libraries
library.add(
  faHome, faUsers, faUserTie, faUser, faCog, faUserCog, faPowerOff, faClipboardList,
  faBriefcase, faUserTag, faFileAlt, faKey
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

// Application Cores
import core from "./Core"
import router from "./Router"

new Vue({
  router,
  render: h => h(core)
}).$mount("#Core")
