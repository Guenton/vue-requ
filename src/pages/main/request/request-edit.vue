<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "requestEdit",
  data() {
    return {
      headerIcon: "edit",
      headerText: "Select Requests to be Edited"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
