<template>
  <div>
    <Formtab :tabType="tabType"/>
    <div class="bg-white rounded shadow">
      <b-container>
        <b-row>
          <!-- Back Button -->
          <b-col align-self="center" cols="1" class="p-3 d-none d-md-block">
            <h1 
              v-show="!isGeneral()" 
              :class="{ 'text-secondary': isGeneral(), 'text-primary': !isGeneral() }"
              class="cMouse"
            ><font-awesome-icon icon="arrow-alt-circle-left"/></h1>
          </b-col>
          <!-- Form Pages -->
          <b-col cols="12" md="10" class="pt-3">
            <transition name="fade" mode="out-in" appear>
              <component :is="currentSubForm()" />
            </transition>
          </b-col>

          <!-- Forward Button -->
          <b-col align-self="center" cols="1" class="p-3 d-none d-md-block">
            <h1 
              v-show="!isAttach()" 
              :class="{ 'text-secondary': !validGeneral(), 'text-primary': validGeneral() }"
              class="cMouse"
            ><font-awesome-icon icon="arrow-alt-circle-right"/></h1>
          </b-col>

        </b-row>
        <!-- Reset Entire Form -->
        <b-row align-h="end" class="py-3">
          <b-col cols="2">
            <b-button variant="danger"><font-awesome-icon icon="trash"/></b-button>
          </b-col>
        </b-row>
      
      </b-container>
    </div>
  </div>
</template>

<script>
import Formtab from "../form-tab/Formtab"
import requestAddGeneral from "./request-add-general"
import requestAddSubmitter from "./request-add-submitter"
import requestAddDescription from "./request-add-description"
import requestAddAttach from "./request-add-attach"

export default {
  name: "RequestAddForm",
  data() {
    return {
      tabType: "request",
      header: {
        generalText: "General",
        generalIcon: "clipboard-list"
      }
    }
  },
  components: {
    requestAddGeneral,
    requestAddSubmitter,
    requestAddDescription,
    requestAddAttach,
    Formtab
  },
  methods: {
    currentTab() {return this.$store.getters.getRequestAddFormTab },
    stateGeneralValidation() {return this.$store.getters.getRequestAddFormGeneralValCount },
    validGeneral() { return this.stateGeneralValidation() === 3 ? true : false },
    isGeneral() { return this.currentTab() === "General" ? true : false },
    isSubmitter() { return this.currentTab() === "Submitter" ? true : false },
    isDescription() { return this.currentTab() === "Description" ? true : false },
    isAttach() { return this.currentTab() === "Attach" ? true : false },

    currentSubForm() {
      switch (this.currentTab()) {
        case "General":
          return "requestAddGeneral"
        case "Submitter":
          return "requestAddSubmitter"
        case "Description":
          return "requestAddDescription"
        case "Attach":
          return "requestAddAttach"
        default:
          return "requestAddGeneral"
      }
    }
  },
}
</script>

<style>
.cMouse.text-primary :hover {
  cursor: pointer;
}
</style>
