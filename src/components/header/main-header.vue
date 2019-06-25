<template>
  <b-container fluid>
    <b-row align-v="center" class="pt-3 pb-4">
      <b-col cols="2" class="px-4"><h1 class="text-success"><font-awesome-icon :icon="icon"/></h1></b-col>
      <b-col cols="8" class="text-center"><h1>{{ text }}</h1></b-col>
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
