<template>
  <b-nav justified tabs>
    <b-nav-item class="rounded mx-1" :active="isHomePage()"><router-link :to=agentHomePath><font-awesome-icon icon="user-tie"/></router-link></b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isAddPage()"><router-link :to=agentAddPath><font-awesome-icon icon="user-plus"/></router-link></b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isEditPage()"><router-link :to=agentEditPath><font-awesome-icon icon="user-edit"/></router-link></b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isDeletePage()"><router-link :to=agentDeletePath><font-awesome-icon icon="user-minus"/></router-link></b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "tabnavAgent",
  data() {
    return {
      agentHomePath: "/people/agent/home",
      agentAddPath: "/people/agent/add",
      agentEditPath: "/people/agent/edit",
      agentDeletePath: "/people/agent/delete",  
    }
  },
  methods: {
    isHomePage() {
      if (this.$route.path === this.agentHomePath) { return true }
      else { return false }
    },
    isAddPage() {
      if (this.$route.path === this.agentAddPath) { return true }
      else { return false }
    },
    isEditPage() {
      if (this.$route.path === this.agentEditPath) { return true }
      else { return false }
    },
    isDeletePage() {
      if (this.$route.path === this.agentDeletePath) { return true }
      else { return false }
    }
  }
}
</script>

<style>

</style>
