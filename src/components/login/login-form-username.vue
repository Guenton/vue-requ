<template>
  <b-row class="mt-4 justify-content-center">
    <b-col xl="10">
      <b-input-group>
        <b-input-group-prepend is-text class="d-none d-md-inline-flex">
          <font-awesome-icon icon="user"/>
        </b-input-group-prepend>
        <b-form-input 
          :value="username" 
          placeholder="Username" 
          type="text" 
          @change="pushToParent($event)" 
        />
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "loginFormUsername",
  props: [ "username" ],
  methods: {
    pushToParent(textInput) {
      this.$emit("typedUsername", textInput)
    }
  }
}
</script>
