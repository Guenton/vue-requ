<template>
  <b-row class="mt-4 justify-content-center">
    <b-col xl="10">
      <b-input-group>
        <b-input-group-prepend is-text class="d-none d-md-inline-flex">
          <account-icon />
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
import AccountIcon from "vue-material-design-icons/Account"
export default {
  name: "loginFormUsername",
  props: [ "username" ],
  components: { AccountIcon },
  methods: {
    pushToParent(textInput) {
      this.$emit("typedUsername", textInput)
    }
  }
}
</script>
