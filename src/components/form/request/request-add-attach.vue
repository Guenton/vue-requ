<template>
  <b-container>
    <b-form novalidate>
      
      <b-form-row>
        <b-col class="d-none d-sm-block"></b-col>
        <b-col cols="12" md="10" lg="8">
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
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
      file: null
    }
  }
}
</script>

<style>

</style>
