<template>
  <div class="main-wallpaper">
    <TopNav />
  </div>
</template>

<script>
import TopNav from "../components/topnav/TopNav"

export default {
  name: "MainCore",
  components: {
    TopNav
  }
}
</script>

<style>
.main-wallpaper {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  position: fixed;
  background-image: url("../img/main-wallpaper.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  filter: progid: DXImageTransform.Microsoft.AlphaImageLoader(src='../img/main-wallpaper.jpg', sizingMethod='scale');
}
</style>