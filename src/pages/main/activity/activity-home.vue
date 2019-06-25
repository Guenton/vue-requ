<template>
  <div>
    <mainHeader :icon="headerIcon" :text="headerText"/>
  </div>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "activityHome",
  data() {
    return {
      headerIcon: "file-alt",
      headerText: "S&I Activity Management Section",
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>