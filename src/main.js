// Expansion libraries
import Vue from 'vue'
import VueRouter from "vue-router"
import BootstrapVue from "bootstrap-vue"
import axios from "axios"
import VueAxios from "vue-axios"

// Css Expansion libraries
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "vue-material-design-icons/styles.css"

// Application Cores
import Core from "./Core.vue"
import LoginCore from "./core/LoginCore.vue"
import MainCore from "./core/MainCore.vue"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

// Array of Core routes
const routes = [
  { path: "/login", component: LoginCore },
  { 
    path: "/main",
    component: MainCore
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: h => h(Core)
}).$mount('#Core')
