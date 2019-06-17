<template>
  <b-row class="mt-4 justify-content-center">
    <b-col xl="10">
      <b-input-group>
        <b-input-group-prepend is-text class="d-none d-md-inline-flex">
          <font-awesome-icon icon="key"/>
        </b-input-group-prepend>
        <b-form-input 
          :value="password" 
          placeholder="Password" 
          type="password" 
          @change="pushToParent($event)" 
        />
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "loginFormUsername",
  props: [ "password" ],
  methods: {
    pushToParent(textInput) {
      this.$emit("typedPassword", textInput)
    }
  }
}
</script>
