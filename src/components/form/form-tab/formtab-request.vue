<template>
  <b-tabs no-body>
    <b-tab title="General" class="rounded" :active="isGeneral()" @click="changeTab('General')"></b-tab>
    <b-tab title="Submitter" class="rounded" :active="isSubmitter()" @click="changeTab('Submitter')"></b-tab>
    <b-tab title="Description" class="rounded" :active="isDescription()" @click="changeTab('Description')"></b-tab>
    <b-tab title="Attach" class="rounded" :active="isAttach()" @click="changeTab('Attach')"></b-tab>
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
    },
    isGeneral() { return this.currentTab() === "General" ? true : false },
    isSubmitter() { return this.currentTab() === "Submitter" ? true : false },
    isDescription() { return this.currentTab() === "Description" ? true : false },
    isAttach() { return this.currentTab() === "Attach" ? true : false },
    currentTab() {return this.$store.getters.getRequestAddFormTab }
  }
}
</script>

<style>

</style>
