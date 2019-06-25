<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "activityAdd",
  data() {
    return {
      headerIcon: "plus",
      headerText: "Submit new Activity"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
