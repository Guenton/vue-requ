<template>
  <div>
    <b-navbar type="" variant="" class="pb-0">
      <transition name="fade" mode="out-in" appear>
        <template v-if="isHome()"><tabnavHome :section="tabType"/></template>
      </transition>
      <transition name="fade" mode="out-in" appear>
        <template v-if="isAgent()"><tabnavAgent/></template>
      </transition>
      <transition name="fade" mode="out-in" appear>
        <template v-if="isSubject()"><tabnavSubject/></template>
      </transition>
    </b-navbar>
  </div>
</template>

<script>
import tabnavHome from "./tabnav-home"
import tabnavAgent from "./tabnav-agent"
import tabnavSubject from "./tabnav-subject"

export default {
  name: "Tabnav",
  props: [ "tabType" ],
  components: {
    tabnavHome,
    tabnavAgent,
    tabnavSubject
  },
  methods: {
    isAgent() { 
      if (this.tabType === "agent") { return true } 
      else { return false } 
    },
    isSubject() { 
      if (this.tabType === "subject") { return true } 
      else { return false } 
    },
    isHome() {
      if 
      (
        this.tabType === "request" || 
        this.tabType === "cases" || 
        this.tabType === "secreening" || 
        this.tabType === "activity"
      ) 
      { return true } else { return false } 
    }
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
