<template>
  <b-container>
    <b-form novalidate>
      <b-form-row>
        <b-col class="d-none d-sm-block"></b-col>
        <b-col cols="12" md="10" lg="8">
          <b-form-row>
            <b-col>
              <b-form-group
                label="Title:"
                :state="validation.title"
                :invalid-feedback="invalidTitle()"
                :valid-feedback="validFeedback()"
              ><b-form-input v-model="form.title" @focus="titleValidator()" @keyup="titleValidator()" :state="validation.title" trim />
              </b-form-group>
            </b-col>
          </b-form-row>
          
          <b-form-row>
            <b-col>
              <b-form-group label="Type:">
                <b-form-radio-group
                  v-model="form.type"
                  :options="typeRadio.options"
                  :state="validation.type"
                  @input="typeHandler()"
                  stacked
                >
                  <b-form-invalid-feedback :state="validation.type">Please select one</b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validation.type">Accepted: {{ form.type }} </b-form-valid-feedback>
                </b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group label="Priority:">
                <b-form-radio-group
                  v-model="form.priority"
                  :options="priority.options"
                  :state="validation.priority"
                  @input="priorityHandler()"
                  stacked  
                >
                  <b-form-invalid-feedback :state="validation.priority">Please select one</b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validation.priority">Accepted: {{ form.priority }} Priority</b-form-valid-feedback>
                </b-form-radio-group>
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
  name: "requestAddGeneral",
  data() {
    return {
      form: {
        title: "",
        type: null,
        priority: null
      },
      validation: {
        title: null,
        type: null,
        priority: null,
      },
      typeRadio: {
        options: [
          { text: "Cash Discrepancies", value: "Cash Discrepancies" },
          { text: "Online Banking Fraud", value: "Online Banking Fraud" },
          { text: "Internal Fraud", value: "Internal Fraud" },
          { text: "Screening and Due Diligence", value: "Screening and Due Diligence" },
          { text: "Other", value: "Other" }
        ],
      },
      priority: {
        options: [
          { text: "Normal", value: "Normal" },
          { text: "High", value: "High" }
        ]
      },
    }
  },
  methods: {
    titleValidator() {
      if (this.form.title.length >= 10) {
        this.validation.title = true
        this.valStore()
      } else {
        this.validation.title = false
        this.valStore()
      }
    },
    invalidTitle() {
      if (this.form.title.length > 0) {
        let remainingChars = 10 - this.form.title.length
        return `Enter at least ${remainingChars} more characters`
      } else {
        return 'Please enter something'
      }
    },
    typeHandler() {
      if (this.form.type !== null) {
        this.validation.type = true
        this.valStore()
      } else {
        this.validation.type = false
        this.valStore()
      }
    },
    priorityHandler() {
      if (this.form.priority !== null) {
        this.validation.priority = true
        this.valStore()
      } else {
        this.validation.priority = false
        this.valStore()
      }
    },
    validFeedback() {
      return "Great!"
    },
    validCount() {
      let count = this.validation.title + this.validation.type + this.validation.priority
      return count
    },
    valStore() {
      let count = this.validCount()
      this.$store.commit("setRequestAddFormGeneralValCount", count)
    }
  }
}
</script>

<style>

</style>
