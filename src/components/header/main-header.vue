<template>
  <b-container fluid>
    <b-row align-v="center" class="py-3">
      <b-col cols="2" class="px-4"><h1 class="text-success"><font-awesome-icon :icon="icon"/></h1></b-col>
      <b-col cols="8"><em>{{ text }}</em></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "mainHeader",
  props: [
    "text",
    "icon"
  ]
}
</script>

<style>

</style>
