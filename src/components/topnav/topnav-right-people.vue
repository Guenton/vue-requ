<template>
  <b-nav-item-dropdown>
    <template slot="button-content"><AccountBoxIcon /></template>
    <b-dropdown-item><router-link to="/people/agent">Agents</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/people/subject">Subjects</router-link></b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import AccountBoxIcon from "vue-material-design-icons/AccountBox"

export default {
  name: "topnavRighPeople",
  components: {
    AccountBoxIcon
  }
}
</script>

