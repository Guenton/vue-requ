<template>
  <b-nav justified tabs>
    <b-nav-item class="rounded mx-1" :active="isHomePage()"><router-link :to=subjectHomePath><font-awesome-icon icon="user"/></router-link></b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isAddPage()"><router-link :to=subjectAddPath><font-awesome-icon icon="user-plus"/></router-link></b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isEditPage()"><router-link :to=subjectEditPath><font-awesome-icon icon="user-edit"/></router-link></b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isDeletePage()"><router-link :to=subjectDeletePath><font-awesome-icon icon="user-minus"/></router-link></b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "tabnavSubject",
  data() {
    return {
      subjectHomePath: "/people/subject/home",
      subjectAddPath: "/people/subject/add",
      subjectEditPath: "/people/subject/edit",
      subjectDeletePath: "/people/subject/delete",  
    }
  },
  methods: {
    isHomePage() {
      if (this.$route.path === this.subjectHomePath) { return true }
      else { return false }
    },
    isAddPage() {
      if (this.$route.path === this.subjectAddPath) { return true }
      else { return false }
    },
    isEditPage() {
      if (this.$route.path === this.subjectEditPath) { return true }
      else { return false }
    },
    isDeletePage() {
      if (this.$route.path === this.subjectDeletePath) { return true }
      else { return false }
    }
  }
}
</script>

<style>

</style>
