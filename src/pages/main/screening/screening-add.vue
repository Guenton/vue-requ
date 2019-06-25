<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "screeningAdd",
  data() {
    return {
      headerIcon: "plus",
      headerText: "Submit new Screening"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
