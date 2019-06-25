<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h2Header :text="h2HeaderText" class="pt-4"/>
      </b-col>
    </b-row>
    <b-card class="shadow">
      <b-row>
      <b-col md="12" lg="6" xl="3">
        <h4>Requests</h4>
        <p><strong>Unnasigned: </strong><em>2</em></p>
        <p><strong>Open: </strong><em>8</em></p>
        <p><strong>Close-Pending: </strong><em>2</em></p>
        <p><strong>Closed </strong><em>967</em></p>
        <p><strong>Total </strong><em>979</em></p>
      </b-col>
      <b-col md="12" lg="6" xl="3">
        <h4>Users</h4>
        <p><strong>Users Logged in: </strong><em>3</em></p>
        <p><strong>Your time Logged in: </strong><em>02:45</em></p>
        <p><strong>Your last Token renewal: </strong><em>02:45 ago</em></p>
        <p><strong>Your previous log in: </strong><em>June 24, 2019 at 8:14am</em></p>
        <p><strong>Total time spent in ReQu this month: </strong><em>27:04</em></p>
      </b-col>
      <b-col md="12" lg="6" xl="3">
        <h4>System</h4>
        <p><strong>Server Load: </strong><em>light</em></p>
        <p><strong>Users Logged in: </strong><em>3</em></p>
        <p><strong>Server Up-Time </strong><em>3 days 12 hours 45 minutes</em></p>
        <p><strong>Last Server Down-Time</strong><em>June 22, 2019</em></p>
        <p><strong>Total Server Lifetime</strong><em>3 Years, 2 Months, 16 Days, 12hours, 8 minutes</em></p>
      </b-col>
      <b-col md="12" lg="6" xl="3">
        <h4>Personal</h4>
        <p><strong>Items Open in your name: </strong><em>16</em></p>
        <p><strong>Items Close-Pending in your name: </strong><em>1</em></p>
        <p><strong>Items Closed in your name: </strong><em>286</em></p>
        <p><strong>Items in your name this year: </strong><em>86</em></p>
        <p><strong>Remarks: </strong><em>Your item closing time is below average</em></p>
      </b-col>
    </b-row>
    </b-card>
    
  </b-container>
</template>

<script>
import h2Header from "../header/h2-header"
export default {
  name: "Statistics",
  data() {
    return {
      h2HeaderText: "Global Statistics"
    }
  },
  components: {
    h2Header
  }
}
</script>

<style>

</style>
