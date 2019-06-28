<template>
  <b-row class="py-3">
    <b-col cols="1">
      <h5 class="text-success"><font-awesome-icon :icon="icon"/></h5>
    </b-col>
    <b-col cols="11">
      <h5>{{ text }}</h5>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "formRowHeader",
  props: [ "icon", "text" ]
}
</script>

<style>

</style>
