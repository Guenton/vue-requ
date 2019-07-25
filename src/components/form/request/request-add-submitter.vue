<template>
  <b-container>
    <b-form novalidate>

      <b-form-row>
        <b-col class="d-none d-sm-block"></b-col>
        <b-col cols="12" md="10" lg="8">

          <b-form-row>
            <b-col>
              <b-form-group
                label="First Name:"
                :state="validation.firstName"
                :invalid-feedback="tooShortFeedback()"
                :valid-feedback="validFeedback()"
              ><b-form-input 
                v-model="form.firstName" 
                @focus="firstNameValidator()" 
                @keyup="firstNameValidator()"
                :state="validation.firstName" 
                trim 
              />
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group
                label="Last Name:"
                :state="validation.lastName"
                :invalid-feedback="tooShortFeedback()"
                :valid-feedback="validFeedback()"
              ><b-form-input 
                v-model="form.lastName" 
                @focus="lastNameValidator()" 
                @keyup="lastNameValidator()" 
                :state="validation.lastName" 
                trim 
              /></b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group
                label="Email:"
                :state="validation.email"
                :invalid-feedback="invalidEmail()"
                :valid-feedback="validFeedback()"
              ><b-form-input 
                v-model="form.email" 
                @focus="emailValidator()" 
                @keyup="emailValidator()" 
                :state="validation.email" 
                trim 
              /></b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group
                label="Department:"
                :state="validation.department"
                :invalid-feedback="tooShortFeedback()"
                :valid-feedback="validFeedback()"
              ><b-form-input 
                v-model="form.department" 
                @focus="departmentValidator()" 
                @keyup="departmentValidator()" 
                :state="validation.department" 
                trim 
              /></b-form-group>
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
  name: "requestAddSubmitter",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      },
      validation: {
        firstName: null,
        lastName: null,
        email: null,
        department: null,
      },
      emailRegex: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    }
  },
  methods: {
    firstNameValidator() {
      if (this.form.firstName.length >= 2) {
        this.validation.firstName = true
        this.valStore()
      } else {
        this.validation.firstName = false
        this.valStore()
      }
    },
    lastNameValidator() {
      if (this.form.lastName.length >= 2) {
        this.validation.lastName = true
        this.valStore()
      } else {
        this.validation.lastName = false
        this.valStore()
      }
    },
    emailValidator() {
      if (this.emailRegex.test(this.form.email)) {
        this.validation.email = true
        this.valStore()
      } else {
        this.validation.email = false
        this.valStore()
      }
    },
    departmentValidator() {
      if (this.form.department.length >= 3) {
        this.validation.department = true
        this.valStore()
      } else {
        this.validation.department = false
        this.valStore()
      }
    },
    validFeedback() {
      return "Great!"
    },
    tooShortFeedback() {
      return "Too short!"
    },
    invalidEmail() {
      return "Please use a valid Email"
    },
    validCount() {
      let count = this.validation.firstName + this.validation.lastName + this.validation.email + this.validation.department
      return count
    },
    valStore() {
      let count = this.validCount()
      this.$store.commit("setRequestAddFormSubmitterValCount", count)
    }
  }
}
</script>

<style>

</style>
