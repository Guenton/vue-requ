<template>
  <b-nav-item-dropdown right>
    <template slot="button-content"><SettingsIcon /></template>
    <b-dropdown-item><router-link to="/settings/">Settings</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/settings/rights">Rights</router-link></b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item><router-link to="/login">Sign Out</router-link></b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import SettingsIcon from "vue-material-design-icons/Settings"

export default {
  name: "topnavRightSettings",
  components: {
    SettingsIcon
  }
}
</script>
