<template>
  <div id="Core">
    <router-view />
  </div>
</template>

<script>
// import sessionRedirectHandler from "./components/js/session-isAuth";

export default {
  name: "core",
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.whiteshade {
 background-color: rgba(255,255,255,0.9)
}
</style>