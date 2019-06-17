<template>
  <b-nav-item-dropdown>
    <template slot="button-content"><font-awesome-icon icon="users" size="lg"/></template>
    <b-dropdown-item><router-link to="/people/agent"><font-awesome-icon icon="user-tie"/> - Agents</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/people/subject"><font-awesome-icon icon="user"/> - Subjects</router-link></b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>

export default {
  name: "topnavRighPeople",
}
</script>

