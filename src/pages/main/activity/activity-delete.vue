<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "activityDelete",
  data() {
    return {
      headerIcon: "trash",
      headerText: "Select Activities to submitted for deletion"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>