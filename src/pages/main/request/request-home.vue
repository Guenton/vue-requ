<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "requestHome",
  data() {
    return {
      headerIcon: "clipboard-list",
      headerText: "Select Requests to submitted for Deletion"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>