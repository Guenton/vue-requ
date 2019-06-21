<template>
  <b-container>
    <b-row align-v="end" class="py-3">
      <b-col cols="12" md="4"><h1>Agents</h1></b-col>
      <b-col cols="12" md="8" class="pb-2"><em>There are currently {{ agentsInDB }} Agents in the Database</em></b-col>
    </b-row>
    <b-row>
      <b-table hover :items="agents"></b-table>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "agentHome",
  data() {
    return {
      agentsInDB: 0,
      agents: [
        { agent: "brooksg", firstName: "Guenton", lastName: "Brooks" }
      ]
    }
  }
}
</script>

<style>

</style>
