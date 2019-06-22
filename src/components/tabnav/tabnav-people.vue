<template>
  <b-nav justified tabs>
    <b-nav-item class="rounded mx-1" :active="isHomePage()">
      <router-link :class="{ 'text-success': isHomePage() }" :to=homePath>
        <font-awesome-icon :icon="iconPicker()"/>
      </router-link>
    </b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isAddPage()">
      <router-link :class="{ 'text-success': isAddPage() }" :to=addPath>
        <font-awesome-icon icon="user-plus"/>
      </router-link>
    </b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isEditPage()">
      <router-link :class="{ 'text-success': isEditPage() }" :to=editPath>
        <font-awesome-icon icon="user-edit"/>
      </router-link>
    </b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isDeletePage()">
      <router-link :class="{ 'text-success': isDeletePage() }" :to=deletePath>
        <font-awesome-icon icon="user-minus"/>
      </router-link>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "tabnavPeople",
  data() {
    return {
      homePath: "",
      addPath: "",
      editPath: "",
      deletePath: "" 
    }
  },
  props: [
    "section",
  ],
  mounted() {
    this.homePath = "/people/" + this.section + "/home"
    this.addPath = "/people/" + this.section + "/add"
    this.editPath = "/people/" + this.section + "/edit"
    this.deletePath = "/people/" + this.section + "/delete" 
  },
  methods: {
    iconPicker() {
      switch (this.section) {
        case "agent":
          return "user-tie"
        case "subject":
          return "user"
        default:
          return "skull-crossbones"
      }
    },
    isHomePage() {
      if (this.$route.path === this.homePath) { return true }
      else { return false }
    },
    isAddPage() {
      if (this.$route.path === this.addPath) { return true }
      else { return false }
    },
    isEditPage() {
      if (this.$route.path === this.editPath) { return true }
      else { return false }
    },
    isDeletePage() {
      if (this.$route.path === this.deletePath) { return true }
      else { return false }
    }
  }
}
</script>

<style>

</style>