<template>
  <div class="py-5">
    <b-container fluid>
    <b-row>
      <b-col lg="12" xl="7">
        <Timeline/>
      </b-col>
      <b-col lg="12" xl="5">
        <Update/>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <Statistics/>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import Timeline from "../../components/timeline/Timeline"
import Update from "../../components/update/Update"
import Statistics from "../../components/statistics/Statistics"
export default {
  name: "Home",
  components: {
    Timeline,
    Update,
    Statistics
  }
}
</script>

<style>

</style>
