<template>
  <b-nav justified tabs>
    <b-nav-item class="rounded mx-1" :active="isHomePage()">
      <router-link :class="{ 'text-success': isHomePage() }" :to=requestHomePath>
        <font-awesome-icon icon="clipboard-list"/>
      </router-link>
    </b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isAddPage()">
      <router-link :class="{ 'text-success': isAddPage() }" :to=requestAddPath>
        <font-awesome-icon icon="plus"/>
      </router-link>
    </b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isEditPage()">
      <router-link :class="{ 'text-success': isEditPage() }" :to=requestEditPath>
        <font-awesome-icon icon="edit"/>
      </router-link>
    </b-nav-item>
    <b-nav-item class="rounded mx-1" :active="isDeletePage()">
      <router-link :class="{ 'text-success': isDeletePage() }" :to=requestDeletePath>
        <font-awesome-icon icon="trash"/>
      </router-link>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "tabnavRequest",
  data() {
    return {
      requestHomePath: "/main/request/home",
      requestAddPath: "/main/request/add",
      requestEditPath: "/main/request/edit",
      requestDeletePath: "/main/request/delete",  
    }
  },
  methods: {
    isHomePage() {
      if (this.$route.path === this.requestHomePath) { return true }
      else { return false }
    },
    isAddPage() {
      if (this.$route.path === this.requestAddPath) { return true }
      else { return false }
    },
    isEditPage() {
      if (this.$route.path === this.requestEditPath) { return true }
      else { return false }
    },
    isDeletePage() {
      if (this.$route.path === this.requestDeletePath) { return true }
      else { return false }
    }
  }
}
</script>

<style>

</style>