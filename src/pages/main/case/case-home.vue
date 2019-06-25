<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "caseHome",
  data() {
    return {
      headerIcon: "briefcase",
      headerText: "S&I Case Management section"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>