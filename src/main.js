// Plugin libraries
import "core-js"
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import axios from "axios"
import VueAxios from "vue-axios"

// Css Expansion libraries
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from "@fortawesome/vue-fontawesome"
import { 
  faHome, faUsers, faUserTie, faUser, faCog, faUserCog, faPowerOff, faClipboardList,
  faBriefcase, faUserTag, faFileAlt, faKey, faUserPlus, faUserEdit, faUserMinus,
  faUserSecret, faPlus, faEdit, faTrash, faSkullCrossbones
} from "@fortawesome/free-solid-svg-icons"

// Font Awesome Global Registration
library.add(
  faHome, faUsers, faUserTie, faUser, faCog, faUserCog, faPowerOff, faClipboardList,
  faBriefcase, faUserTag, faFileAlt, faKey, faUserPlus, faUserEdit, faUserMinus,
  faUserSecret, faPlus, faEdit, faTrash, faSkullCrossbones
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

// Application Cores
import core from "./Core"
import router from "./Router"
import store from "./store/store"

new Vue({
  router,
  store,
  render: h => h(core)
}).$mount("#Core")
