<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "screeningEdit",
  data() {
    return {
      headerIcon: "edit",
      headerText: "Select Screenings to be Edited"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
