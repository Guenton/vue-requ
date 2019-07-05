<template>
  <b-container>
    <b-form novalidate>
      
      <b-form-row>
        <b-col>
          <b-form-group
            label="Title:"
            :state="validation.title"
            :invalid-feedback="invalidTitle"
            :valid-feedback="validFeedback"
          ><b-form-input v-model="form.title" @change=titleValidator :state="validation.title" trim />
          </b-form-group>
        </b-col>
      </b-form-row>
      
      <b-form-row>
        <b-col>
          <b-form-group label="Type:">
            <b-form-radio-group
              v-model="form.type"
              :options="typeRadio.options"
              stacked
              :state="validation.type"
            >
              <b-form-invalid-feedback :state="validation.type">Please select one</b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation.type">Thank you</b-form-valid-feedback>
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
              stacked
              :state="validation.priority"
            >
              <b-form-invalid-feedback :state="validation.priority">Please select one</b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation.priority">Thank you</b-form-valid-feedback>
            </b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-form-row>
            
    </b-form>
    
  </b-container>
</template>

<script>

export default {
  name: "requestAdd1",
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
  computed: {
    state() {
      return this.form.title.length >= 4 ? true : false
    },
    invalidTitle() {
      if (this.form.title.length > 4) {
        return ''
      } else if (this.form.title.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter something'
      }
    },
    validFeedback() {
      return this.state === true ? 'Thank you' : ''
    }
  },
  methods: {
    titleValidator() {
      if (this.form.title.length >= 4) {
        this.validation.title = true
      } else {
        this.validation.title = false
      }
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.title = ""
      this.form.type = null
      this.form.priority = null
    }
  }
}
</script>

<style>

</style>
