<template>
  <b-navbar-nav>
    <b-button variant="outline-success" v-if="isRequestPage()"><router-link :to=requestPath><font-awesome-icon icon="clipboard-list"/> Requests</router-link></b-button>
    <b-nav-item v-else><router-link :to=requestPath><font-awesome-icon icon="clipboard-list"/> Requests</router-link></b-nav-item>

    <b-button variant="outline-success" v-if="isCasePage()"><router-link :to=casePath><font-awesome-icon icon="briefcase"/> Cases</router-link></b-button>
    <b-nav-item v-else><router-link :to=casePath><font-awesome-icon icon="briefcase"/> Cases</router-link></b-nav-item>

    <b-button variant="outline-success" v-if="isScreeningPage()"><router-link :to=screeningPath><font-awesome-icon icon="user-tag"/> Screening</router-link></b-button>
    <b-nav-item v-else><router-link :to=screeningPath><font-awesome-icon icon="user-tag"/> Screening</router-link></b-nav-item>

    <b-button variant="outline-success" v-if="isActivityPage()"><router-link :to=activityPath><font-awesome-icon icon="file-alt"/> Activity</router-link></b-button>
    <b-nav-item v-else><router-link :to=activityPath><font-awesome-icon icon="file-alt"/> Activity</router-link></b-nav-item>

  </b-navbar-nav>
</template>

<script>
export default {
  name: "topnavLinksMain",
  data() {
    return {
      requestPath: "/main/request/home",
      casePath: "/main/case",
      screeningPath: "/main/screening",
      activityPath: "/main/activity",
    }
  },
  methods: {
    isRequestPage() {
      if (this.$route.path.startsWith("/main/request")) { return true }
      else { return false }
    },
    isCasePage() {
      if (this.$route.path.startsWith("/main/case")) { return true }
      else { return false }
    },
    isScreeningPage() {
      if (this.$route.path.startsWith("/main/screening")) { return true }
      else { return false }
    },
    isActivityPage() {
      if (this.$route.path.startsWith("/main/activity")) { return true }
      else { return false }
    }
  }
}
</script>
