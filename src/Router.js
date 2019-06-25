import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// Pages Import Tree (Indented when Nested)
import Login from "./pages/Login"
import Main from "./pages/Main"
  import Home from "./pages/main/Home"
  import Request from "./pages/main/Request"
    import requestHome from "./pages/main/request/request-home"
    import requestAdd from "./pages/main/request/request-add"
    import requestEdit from "./pages/main/request/request-edit"
    import requestDelete from "./pages/main/request/request-delete"
  import Case from "./pages/main/Case"
    import caseHome from "./pages/main/case/case-home"
    import caseAdd from "./pages/main/case/case-add"
    import caseEdit from "./pages/main/case/case-edit"
    import caseDelete from "./pages/main/case/case-delete"
  import Screening from "./pages/main/Screening"
    import screeningHome from "./pages/main/screening/screening-home"
    import screeningAdd from "./pages/main/screening/screening-add"
    import screeningEdit from "./pages/main/screening/screening-edit"
    import screeningDelete from "./pages/main/screening/screening-delete"
  import Activity from "./pages/main/Activity"
    import activityHome from "./pages/main/activity/activity-home"
    import activityAdd from "./pages/main/activity/activity-add"
    import activityEdit from "./pages/main/activity/activity-edit"
    import activityDelete from "./pages/main/activity/activity-delete"
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
      {
        path: "home",
        component: Home
      },
      { 
        path: "request",
        component: Request,
        children: [
          { path: "home", component: requestHome },
          { path: "add", component: requestAdd },
          { path: "edit", component: requestEdit },
          { path: "delete", component: requestDelete }
        ]
      },
      { 
        path: "case", 
        component: Case,
        children: [
          { path: "home", component: caseHome },
          { path: "add", component: caseAdd },
          { path: "edit", component: caseEdit },
          { path: "delete", component: caseDelete }
        ] 
      },
      { 
        path: "screening",
        component: Screening,
        children: [
          { path: "home", component: screeningHome },
          { path: "add", component: screeningAdd },
          { path: "edit", component: screeningEdit },
          { path: "delete", component: screeningDelete }
        ]
      },
      { 
        path: "activity",
        component: Activity,
        children: [
          { path: "home", component: activityHome },
          { path: "add", component: activityAdd },
          { path: "edit", component: activityEdit },
          { path: "delete", component: activityDelete }
        ]
      },
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
