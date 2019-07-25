<template>
  <div>
    <div class="whiteshade rounded shadow border-left">
      <mainHeader :icon="header.icon" :text="header.text"/>
    </div>
    <b-container>
      <b-row class="whiteshade rounded shadow py-1 my-3">
        <b-col>
          <StepProgress :totalStep=progress.totalStep :currentStep="progressStep" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <RequestAddForm/>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import mainHeader from "../../../components/header/main-header"
import RequestAddForm from "../../../components/form//request/RequestAddForm"
import StepProgress from "../../../components/progressbar/StepProgress"
export default {
  name: "requestAdd",
  data() {
    return {
      header: {
        icon: "plus",
        text: "Submit new Request",
      },
      progress: {
        totalStep: 9,
        currentStep: 1
      }
    }
  },
  components: {
    mainHeader,
    RequestAddForm,
    StepProgress
  },
  computed: {
    progressStep() {
      return this.$store.getters.getRequestAddFormStep
    }
  }
}
</script>

<style>

</style>
