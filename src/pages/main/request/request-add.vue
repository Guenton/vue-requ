<template>
  <mainHeader :icon="headerIcon" :text="headerText"/>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "requestAdd",
  data() {
    return {
      headerIcon: "plus",
      headerText: "Submit new Request"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
