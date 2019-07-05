<template>
  <b-tabs no-body>
    <b-tab title="General" class="rounded" active @click="changeTab('General')"></b-tab>
    <b-tab title="Information" class="rounded" @click="changeTab('Information')"></b-tab>
    <b-tab title="Description" class="rounded" @click="changeTab('Description')"></b-tab>
    <b-tab title="Comments" class="rounded" @click="changeTab('Comments')"></b-tab>
  </b-tabs>
</template>

<script>
export default {
  name: "formtabRequest",
  data() {
    return {
      formAddTab: "General",
    }
  },
  methods: {
    changeTab(newTab) {
      this.formAddTab = newTab
      this.$store.commit("setRequestAddFormTab", this.formAddTab)
      alert(this.$store.getters.getRequestAddFormTab)
    },
  }
}
</script>

<style>

</style>
