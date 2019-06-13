<template>
  <div class="shadow">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand><router-link to="/main"><HomeIcon /></router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Populate Links depending on current screen -->
        <transition name="fade" mode="out-in" appear>
          <template v-if="isMain()"><topnavLinksMain/></template>
        </transition>
        <transition name="fade" mode="out-in" appear>
          <template v-if="isPeople()"><topnavLinksPeople/></template>
        </transition>
        <transition name="fade" mode="out-in" appear>
          <template v-if="isSettings()"><topnavLinksSettings/></template>
        </transition>
        <!-- TopNav Right Side Elements -->
        <topnavRight />
      </b-collapse>     

    </b-navbar>
  </div>
</template>

<script>
import HomeIcon from "vue-material-design-icons/Home"

import topnavLinksPeople from "./topnav-links-people"
import topnavLinksSettings from "./topnav-links-settings"
import topnavLinksMain from "./topnav-links-main"
import topnavRight from "./topnav-right"

export default {
  name: "Topnav",
  props: [ "barType" ],
  components: {
    topnavLinksPeople,
    topnavLinksSettings,
    topnavLinksMain,
    topnavRight,
    HomeIcon,
  },
  methods: {
    isMain() { 
      if (this.barType === "main") { return true } 
      else { return false } 
    },
    isPeople() { 
      if (this.barType === "people") { return true } 
      else { return false } 
     },
    isSettings() { 
      if (this.barType === "settings") { return true } 
      else { return false } 
    },
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: none;
  color: inherit;
}
</style>
