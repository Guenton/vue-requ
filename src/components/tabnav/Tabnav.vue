<template>
  <div>
    <b-navbar type="" variant="" class="pb-0">
      <transition name="fade" mode="out-in" appear>
        <template v-if="isHome()"><tabnavHome :section="tabType"/></template>
      </transition>
      <transition name="fade" mode="out-in" appear>
        <template v-if="isPeople()"><tabnavPeople :section="tabType"/></template>
      </transition>
    </b-navbar>
  </div>
</template>

<script>
import tabnavHome from "./tabnav-home"
import tabnavPeople from "./tabnav-people"

export default {
  name: "Tabnav",
  props: [ "tabType" ],
  components: {
    tabnavHome,
    tabnavPeople
  },
  methods: {
    isHome() {
      if 
      (
        this.tabType === "request" || 
        this.tabType === "cases" || 
        this.tabType === "secreening" || 
        this.tabType === "activity"
      ) 
      { return true } else { return false } 
    },
    isPeople() {
      if 
      (
        this.tabType === "agent" || 
        this.tabType === "subject"
      ) 
      { return true } else { return false } 
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
