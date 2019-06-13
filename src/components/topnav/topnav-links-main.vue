<template>
  <b-navbar-nav>
    <b-nav-item><router-link to="/main/request">Requests</router-link></b-nav-item>
    <b-nav-item><router-link to="/main/case">Cases</router-link></b-nav-item>
    <b-nav-item><router-link to="/main/screening">Screening</router-link></b-nav-item>
    <b-nav-item><router-link to="/main/activity">Activity</router-link></b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "topnavLinksMain"
}
</script>
