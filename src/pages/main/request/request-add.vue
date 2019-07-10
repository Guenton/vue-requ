<template>
  <div>
    <div class="whiteshade rounded shadow border-left border-bottom">
      <mainHeader :icon="header.icon" :text="header.text"/>
    </div>
    <b-container>
      <b-row>
        <b-col cols="12" class="pt-3">
          <h2Header :text="header.h2Text"/>
        </b-col>
      </b-row>
      <b-row class="whiteshade rounded shadow py-2 mb-3">
        <b-col>
          <StepProgress :totalStep=progress.totalStep :currentStep=progress.currentStep />
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
import h2Header from "../../../components/header/h2-header"
import RequestAddForm from "../../../components/form//request/RequestAddForm"
import StepProgress from "../../../components/progressbar/StepProgress"
export default {
  name: "requestAdd",
  data() {
    return {
      header: {
        icon: "plus",
        text: "Submit new Request",
        h2Text: "Request Form",
      },
      progress: {
        totalStep: 4,
        currentStep: 1
      }
    }
  },
  components: {
    mainHeader,
    h2Header,
    RequestAddForm,
    StepProgress
  }
}
</script>

<style>

</style>
