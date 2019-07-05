<template>
  <div>
    <b-navbar type="" variant="" class="pb-0">
      <transition name="fade" mode="out-in" appear>
        <template v-if="isRequest()"><formtabRequest /></template>
      </transition>
      <transition name="fade" mode="out-in" appear>
        <template v-if="isCase()"><h1>in development</h1></template>
      </transition>
    </b-navbar>
  </div>
</template>

<script>
import formtabRequest from "./formtab-request"

export default {
  name: "Formtab",
  props: [ "tabType" ],
  components: {
    formtabRequest
  },
  methods: {
    isRequest() {
      if (this.tabType === "request")
      { return true } else { return false } 
    },
    isCase() {
      if (this.tabType === "case") 
      { return true } else { return false } 
    },
    isScreening() {
      if (this.tabType === "screening") 
      { return true } else { return false } 
    },
    isActivity() {
      if (this.tabType === "activity") 
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

</style>
