<template>
  <div class="whiteshade rounded shadow border-left border-bottom">
    <mainHeader :icon="headerIcon" :text="headerText"/>
  </div>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "requestEdit",
  data() {
    return {
      headerIcon: "edit",
      headerText: "Select Requests to be Edited"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>
