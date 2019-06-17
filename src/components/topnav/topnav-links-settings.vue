<template>
  <b-navbar-nav>
    <b-button variant="outline-success" v-if="isSettingsPage()"><router-link :to=settingsPath><font-awesome-icon icon="cog"/> Settings</router-link></b-button>
    <b-nav-item v-else><router-link :to=settingsPath><font-awesome-icon icon="cog"/> Settings</router-link></b-nav-item>

    <b-button variant="outline-success" v-if="isRightsPage()"><router-link :to=rightsPath><font-awesome-icon icon="user-cog"/> Rights</router-link></b-button>
    <b-nav-item v-else><router-link :to=rightsPath><font-awesome-icon icon="user-cog"/> Rights</router-link></b-nav-item>
    
  </b-navbar-nav>
</template>

<script>
export default {
  name: "topnavLinksSettings",
  data() {
    return {
      settingsPath: "/settings",
      rightsPath: "/settings/rights",
    }
  },
  methods: {
    isSettingsPage() {
      if (this.$route.path === this.settingsPath) { return true }
      else { return false }
    },
    isRightsPage() {
      if (this.$route.path === this.rightsPath) { return true }
      else { return false }
    }
  }
}
</script>