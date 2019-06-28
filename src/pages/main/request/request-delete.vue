<template>
  <div class="whiteshade rounded shadow border-left border-bottom">
    <mainHeader :icon="headerIcon" :text="headerText"/>
  </div>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "requestDelete",
  data() {
    return {
      headerIcon: "trash",
      headerText: "Select Requests to submitted for deletion"
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>