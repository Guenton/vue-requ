import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// Pages Import Tree (Indented when Nested)
import Login from "./pages/Login"
import Main from "./pages/Main"
  import Request from "./pages/main/Request"
  import Case from "./pages/main/Case"
  import Screening from "./pages/main/Screening"
  import Activity from "./pages/main/Activity"
  import People from "./pages/People"
    import Agent from "./pages/people/Agent"
      import agentHome from "./pages/people/agent/agent-home"
      import agentAdd from "./pages/people/agent/agent-add"
      import agentEdit from "./pages/people/agent/agent-edit"
      import agentDelete from "./pages/people/agent/agent-delete"
    import Subject from "./pages/people/Subject"
      import subjectHome from "./pages/people/subject/subject-home"
      import subjectAdd from "./pages/people/subject/subject-add"
      import subjectEdit from "./pages/people/subject/subject-edit"
      import subjectDelete from "./pages/people/subject/subject-delete"
  import Settings from "./pages/Settings"
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
      { 
        path: "agent", 
        component: Agent,
        children: [
          { path: "home", component: agentHome },
          { path: "add", component: agentAdd },
          { path: "edit", component: agentEdit },
          { path: "delete", component: agentDelete }
        ]
      },
      { 
        path: "subject", 
        component: Subject,
        children: [
          { path: "home", component: subjectHome },
          { path: "add", component: subjectAdd },
          { path: "edit", component: subjectEdit },
          { path: "delete", component: subjectDelete }
        ]
      },
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
