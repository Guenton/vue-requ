<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "activityEdit",
  data() {
    return {
      headerIcon: "edit",
      headerText: "Select Activity to be Edited"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
