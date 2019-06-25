<template>
  <div>
    <mainHeader :icon="headerIcon" :text="headerText"/>
  </div>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "screeningHome",
  data() {
    return {
      headerIcon: "user-tag",
      headerText: "S&I Screening Management Section",
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>