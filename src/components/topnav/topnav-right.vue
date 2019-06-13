<template>
  <b-navbar-nav class="ml-auto">
    <topnavRightPeople />
    <topnavRightSettings />
    <topnavRightSearch />
  </b-navbar-nav>
</template>

<script>
import topnavRightPeople from "./topnav-right-people"
import topnavRightSettings from "./topnav-right-settings"
import topnavRightSearch from "./topnav-right-search"

export default {
  name: "topnavRight",
  components: {
    topnavRightPeople,
    topnavRightSettings,
    topnavRightSearch
  }
}
</script>
