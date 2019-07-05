<template>
  <div>
    <Formtab :tabType="tabType"/>
    <div class="bg-white rounded shadow">
      <b-container>

        <!-- Form Steps -->
        <b-row>
          <b-col cols="12" class="pt-3">
            <requestAdd1/>
          </b-col>
        </b-row>

        <!-- Form Navigation Buttons -->
        <b-row>
          <b-col>

          </b-col>
        </b-row>

        <!-- Reset Entire Form -->
        <b-row align-h="end" class="py-3">
          <b-col cols="2">
            <b-button variant="danger"><font-awesome-icon icon="trash"/></b-button>
          </b-col>
        </b-row>
      
      </b-container>
    </div>
  </div>
</template>

<script>
import Formtab from "./form-tab/Formtab"
import requestAdd1 from "./request-add-1"
export default {
  name: "RequestAddForm",
  data() {
    return {
      tabType: "request",
      header: {
        generalText: "General",
        generalIcon: "clipboard-list"
      }
    }
  },
  components: {
    requestAdd1,
    Formtab
  }
}
</script>

<style>

</style>
