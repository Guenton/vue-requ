<template>
  <div class="py-3">
    <b-progress :max="max" :value="value()" variant="success" striped animated></b-progress>
  </div>
</template>

<script>
export default {
  name: "StepProgress",
  data() {
    return {
      max: 100
    }
  },
  props: [ "totalStep", "currentStep" ],
  computed: {
    stepSize() {
      return this.max / this.totalStep
    },
  },
  methods: {
    value() {
      return this.stepSize * this.currentStep
    }
  }
}
</script>

<style>

</style>
