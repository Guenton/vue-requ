<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "agentAdd",
  data() {
    return {
      headerIcon: "user-plus",
      headerText: "Submit new Agent"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
