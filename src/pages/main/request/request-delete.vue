<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "requestDelete",
  data() {
    return {
      headerIcon: "trash",
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