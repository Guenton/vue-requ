<template>
  <b-row class="mt-4 justify-content-center">
    <b-col col xl="10">
      <b-button block variant="success" @click="submitted">
        <b-row>
          <b-col col sm="2" class="d-none d-md-block">
            <KeyIcon />
          </b-col>
          <b-col>Submit</b-col>
        </b-row>
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import KeyIcon from "vue-material-design-icons/Key"
export default {
  name: "loginFormSubmitButton",
  props: [ "username" ],
  components: { KeyIcon },
  methods: {
    submitted() {
      this.$emit("submitted")
    }
  }
}
</script>