<template>
  <b-row class="mt-4 justify-content-center">
    <b-col col xl="10">
      <b-button block variant="success" @click="submitted">
        <b-row>
          <b-col col sm="2" class="d-none d-md-block">
            <font-awesome-icon icon="power-off"/>
          </b-col>
          <b-col>Submit</b-col>
        </b-row>
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "loginFormSubmitButton",
  props: [ "username" ],
  methods: {
    submitted() {
      this.$emit("submitted")
    }
  }
}
</script>