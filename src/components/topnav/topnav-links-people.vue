<template>
  <b-navbar-nav>
    <b-button variant="outline-success" v-if="isAgentPage()"><router-link :to=agentPath><font-awesome-icon icon="user-tie"/> Agents</router-link></b-button>
    <b-nav-item v-else><router-link :to=agentPath><font-awesome-icon icon="user-tie"/> Agents</router-link></b-nav-item>

    <b-button variant="outline-success" v-if="isSubjectPage()"><router-link :to=subjectPath><font-awesome-icon icon="user"/> Subjects</router-link></b-button>
    <b-nav-item v-else><router-link :to=subjectPath><font-awesome-icon icon="user"/> Subjects</router-link></b-nav-item>
    
  </b-navbar-nav>
</template>

<script>
export default {
  name: "topnavLinksPeople",
  data() {
    return {
      agentPath: "/people/agent/home",
      subjectPath: "/people/subject/home",
    }
  },
  methods: {
    isAgentPage() {
      if (this.$route.path.startsWith("/people/agent")) { return true }
      else { return false }
    },
    isSubjectPage() {
      if (this.$route.path.startsWith("/people/subject")) { return true }
      else { return false }
    }
  }
}
</script>