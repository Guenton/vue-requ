<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h2Header :text="h2HeaderText"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-card class="shadow">
          <b-table striped hover :items="items"></b-table>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import h2Header from "../header/h2-header"
export default {
  name: "Changes",
  data() {
    return {
      h2HeaderText: "Global Updates",
      items: [
        { agent: "MerceD", item: "Case 2019-185", action: "Opened a case with LiberiaD as Lead" },
        { agent: "CasilioW", item: "Screening 2019-335", action: "Assigned a Screening to CandelariaR" },
        { agent: "CasilioW", item: "Screening 2019-336", action: "Assigned a Screening to BrooksG" },
        { agent: "CasilioW", item: "Screening 2019-337", action: "Assigned a Screening to KroonH" },
        { agent: "CasilioW", item: "Screening 2019-338", action: "Assigned a Screening to LiberiaD" },
        { agent: "CasilioW", item: "Screening 2019-339", action: "Assigned a Screening to ArrindellF" },
        { agent: "CasilioW", item: "Screening 2019-340", action: "Assigned a Screening to CleofaD" },
        { agent: "LiberiaD", item: "Case 2019-180", action: "Requested to close the case" },
        { agent: "BrooksG", item: "Case 2019-175", action: "Requested to close the case" },
        { agent: "CandelariaR", item: "Activity 2019-013", action: "Requested to close the activity" },
        { agent: "CleofaD", item: "Activity 2019-014", action: "Requested to close the activity" },
        { agent: "TeubenW", item: "Case 2019-186", action: "Opened a case with KroonH as Lead" },
      ],
    }
  },
  components: {
    h2Header
  }
}
</script>

<style>

</style>
