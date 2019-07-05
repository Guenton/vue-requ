<template>
  <div class="whiteshade rounded shadow border-left border-bottom">
    <mainHeader :icon="headerIcon" :text="headerText"/>
  </div>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
export default {
  name: "requestHome",
  data() {
    return {
      headerIcon: "clipboard-list",
      headerText: "S&I Request Management Section",
    }
  },
  components: {
    mainHeader
  }
}
</script>

<style>

</style>