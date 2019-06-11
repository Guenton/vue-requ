<template>
  <div id="Core">
    <router-view></router-view>
  </div>
</template>

<script>
// import sessionRedirectHandler from "./components/js/session-isAuth";

export default {
  name: "Core",
  // created() {
  //   if (sessionRedirectHandler()) {
  //     this.$router.push("/main");
  //   } else {
  //     this.$router.push("/login");
  //   }
  // },
}
</script>

<style>
body {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;
    overflow: hidden;
    margin: 0;
}
</style>