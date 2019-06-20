<template>
  <div>
    <b-navbar type="" variant="" class="pb-0">
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
import tabnavAgent from "./tabnav-agent"
import tabnavSubject from "./tabnav-subject"

export default {
  name: "Tabnav",
  props: [ "tabType" ],
  components: {
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
    isActivity() { 
      if (this.tabType === "activity") { return true } 
      else { return false } 
    },
    isCase() { 
      if (this.tabType === "case") { return true } 
      else { return false } 
    },
    isRequest() { 
      if (this.tabType === "request") { return true } 
      else { return false } 
    },
    isScreening() { 
      if (this.tabType === "secreening") { return true } 
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
