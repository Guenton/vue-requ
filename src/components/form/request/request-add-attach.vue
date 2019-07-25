<template>
  <b-container>
    <b-form novalidate>
      
      <b-form-row>
        <b-col class="d-none d-sm-block"></b-col>
        <b-col cols="12" md="10" lg="8">
          <b-form-row>
            <b-form-file
              v-model="form.files"
              :state="validation.files"
              @input="fileValidator()"
              placeholder="Choose a file..."
              drop-placeholder="Drop file here..."
              accept="image/*, audio/*, video/*, application/pdf, application/xml"
              multiple            
            >
            </b-form-file>
            <b-form-invalid-feedback :state="validation.files">Please attach at least one file</b-form-invalid-feedback>
            <b-form-valid-feedback :state="validation.files">Accepted: {{ form.files.length }} files</b-form-valid-feedback>
          </b-form-row>
          <b-form-row class="mt-2">Selected files:
            <ul>
              <li v-for="file in form.files" v-bind:key="file.id">
                {{ file.name }}
              </li>
            </ul>
          </b-form-row>
        </b-col>
        <b-col class="d-none d-sm-block"></b-col>
      </b-form-row>

    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "requestAddAttach",
  data() {
    return {
      form: {
        files: []
      },
      validation: {
        files: null
      }
    }
  },
  methods: {
    fileValidator() {
      if (this.form.files.length > 0) {
        this.validation.files = true
        this.valStore()
      } else {
        this.validation.files = false
        this.valStore()
      }
    },
    validCount() {
      let count = this.validation.files
      return count
    },
    valStore() {
      let count = this.validCount()
      this.$store.commit("setRequestAddFormAttachValCount", count)
    }
  }
}
</script>

<style>

</style>
