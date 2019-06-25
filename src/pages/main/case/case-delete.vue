<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "caseDelete",
  data() {
    return {
      headerIcon: "trash",
      headerText: "Select Cases to submitted for deletion"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>