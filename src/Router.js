import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// Pages
import Login from "./pages/Login"
import Main from "./pages/Main"
import People from "./pages/People"
import Settings from "./pages/Settings"

// Main-nested pages
import Request from "./pages/main/Request"
import Case from "./pages/main/Case"
import Screening from "./pages/main/Screening"
import Activity from "./pages/main/Activity"

// People-nested pages
import Agent from "./pages/people/Agent"
import Subject from "./pages/people/Subject"

// Settings-nested pages
import Rights from "./pages/settings/Rights"

// Page Routes
const routes = [
  { 
    path: "/login", 
    component: Login 
  },
  { 
    path: "/main",
    component: Main,
    children: [
      { path: "request", component: Request },
      { path: "case", component: Case },
      { path: "screening", component: Screening },
      { path: "activity", component: Activity },
    ]
  },
  {
    path: "/people",
    component: People,
    children: [
      { path: "agent", component: Agent },
      { path: "subject", component: Subject },
    ]
  },
  {
    path :"/settings",
    component: Settings,
    children: [
      { path: "rights", component: Rights }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router;
