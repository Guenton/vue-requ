<template>
  <b-container>
    <b-form novalidate>
      <b-form-row>
        <b-col class="d-none d-sm-block"></b-col>
        <b-col cols="12" md="10" lg="8">
          <b-form-row>
            <b-col>
              <b-form-group
                label="Description:"
                :state="validation.description"
                :invalid-feedback="invalidFeedback()"
                :valid-feedback="validFeedback()"
              ><b-form-textarea
                v-model="form.description"
                @focus="descriptionValidator()"
                @keyup="descriptionValidator()"
                placeholder="Describe your Request"
                rows="12"
                max-rows="40"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-form-row>
        </b-col>
        <b-col class="d-none d-sm-block"></b-col>
      </b-form-row>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "requestAddDiscription",
  data() {
    return {
      form: {
        description: ""
      },
      validation: {
        description: null
      }
    }
  },
  methods: {
    invalidFeedback() {
      if (this.form.description.length > 0) {
        let remainingChars = 50 - this.form.description.length
        return `Enter at least ${remainingChars} more characters`
      } else {
        return 'Please enter something'
      }
    },
    validFeedback() {
      return "Great!"
    },
    descriptionValidator() {
      if (this.form.description.length >= 50) {
        this.validation.description = true
        this.valStore(1)
      } else {
        this.validation.description = false
        this.valStore(0)
      }
    },
    valStore(count) {
      this.$store.commit("setRequestAddFormDescriptionValCount", count)
    }
  }
}
</script>

<style>

</style>
