<template>
  <b-row class="mt-xl-2 justify-content-center">
    <b-col col xl="10">
      <b-alert 
        :show="warningDismissCountDown" 
        variant="warning"
        dismissible
        @dismissed="warningDismissCountDown=0"
        @dismiss-count-down="warningCountDownChanged"
      >
        {{ warningMsg }}
        <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="warningDismissCountDown"
          height="4px"
        />
      </b-alert>
      <b-alert 
        :show="errorDismissCountDown" 
        variant="danger"
        dismissible
        @dismissed="errorDismissCountDown=0"
        @dismiss-count-down="errorCountDownChanged"
      >
        {{ errorMsg }}
        <b-progress
          variant="danger"
          :max="dismissSecs"
          :value="errorDismissCountDown"
          height="4px"
        />
      </b-alert>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "loginFormError",
  data() {
    return {
      dismissSecs: 5,
      warningDismissCountDown: 0,
      errorDismissCountDown: 0,
    }
  },
  props: [ "warningMsg", "errorMsg" ],
  watch: {
    errorMsg: function() {
      if (this.errorMsg !== "") {
        this.errorDismissCountDown = this.dismissSecs
      }
    },
    warningMsg: function() {
      if (this.warningMsg !== "") {
        this.warningDismissCountDown = this.dismissSecs
      }
    }
  },
  methods: {
    warningCountDownChanged(warningDismissCountDown) {
      this.warningDismissCountDown = warningDismissCountDown
    },
    errorCountDownChanged(errorDismissCountDown) {
      this.errorDismissCountDown = errorDismissCountDown
    }
  }
}
</script>