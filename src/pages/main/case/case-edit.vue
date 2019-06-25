<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "caseEdit",
  data() {
    return {
      headerIcon: "edit",
      headerText: "Select cases to be modified"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
