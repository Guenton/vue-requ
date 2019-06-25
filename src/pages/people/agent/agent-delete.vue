<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "agentDelete",
  data() {
    return {
      headerIcon: "user-minus",
      headerText: "Select Requests to submitted for deletion"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>