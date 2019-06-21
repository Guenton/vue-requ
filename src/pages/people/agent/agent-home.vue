<template>
  <b-container>
    <b-row align-v="end" class="py-3">
      <b-col cols="12" md="4"><h1>Agents</h1></b-col>
      <b-col cols="12" md="8" class="pb-2"><em>There are currently {{ agentsInDB }} Agents in the Database</em></b-col>
    </b-row>
    <b-row>
      <b-table hover :items="agentTableData" :fields="agentTableFields">
        
        <template slot="showDetails" slot-scope="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">
            {{ row.detailsShowing ? "Hide" : "Show"}} Details
          </b-button>
        </template>

        <template slot="row-details" slot-scope="row">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>User:</b></b-col>
              <b-col>{{ row.item.userName }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Full Name:</b></b-col>
              <b-col>{{ row.item.firstName }}  {{ row.item.lastName }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Location:</b></b-col>
              <b-col>{{ row.item.domain }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Title:</b></b-col>
              <b-col>{{ row.item.title }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Email:</b></b-col>
              <b-col>{{ row.item.email }}</b-col>
            </b-row>
          </b-card>
        </template>

      </b-table>
    </b-row>
  </b-container>
</template>

<script>
import * as agentJSON from "../../../components/js/AgentJSON.json"

export default {
  name: "agentHome",
  data() {
    return {
      agentsInDB: agentJSON.ttlagent,
      agentTableFields:
      [
        { key: "firstName", sortable: true },
        { key: "lastName", sortable: true },
        { key: "title", sortable: true },
        { key: "authLevel", sortable: true },
        { key: "showDetails", sortable: false }
      ],
      agentTableData: agentJSON.data
    }
  }
}
</script>

<style>

</style>
