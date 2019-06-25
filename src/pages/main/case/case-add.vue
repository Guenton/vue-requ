<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "caseAdd",
  data() {
    return {
      headerIcon: "plus",
      headerText: "Submit new Case"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
