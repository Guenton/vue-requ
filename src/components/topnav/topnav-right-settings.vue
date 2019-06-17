<template>
  <b-nav-item-dropdown right>
    <template slot="button-content"><font-awesome-icon icon="cog" size="lg"/></template>
    <b-dropdown-item><router-link to="/settings/"><font-awesome-icon icon="cog"/> Settings</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/settings/rights"><font-awesome-icon icon="user-cog"/> Rights</router-link></b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item><router-link to="/login"><font-awesome-icon icon="power-off"/> Sign Out</router-link></b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>

export default {
  name: "topnavRightSettings"
}
</script>
