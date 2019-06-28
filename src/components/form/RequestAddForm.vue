<template>
  <div class="whiteshade rounded shadow">
    <b-container>

      <div>
        <formRowHeader :text="header.generalText" :icon="header.generalIcon"/>
        <b-row>
          <b-col cols="12">
            <requestAdd1/>
          </b-col>
        </b-row>
      </div>
        
      
    </b-container>
  </div>
  
</template>

<script>
import formRowHeader from "./form-row-header"
import requestAdd1 from "./request-add-1"
export default {
  name: "RequestAddForm",
  data() {
    return {
      header: {
        generalText: "General",
        generalIcon: "clipboard-list"
      }
    }
  },
  components: {
    formRowHeader,
    requestAdd1
  }
}
</script>

<style>

</style>
