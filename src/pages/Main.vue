<template>
  <div class="main-wallpaper">
    <Topnav :barType="barType"/>
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Topnav from "../components/topnav/Topnav"

export default {
  name: "Main",
  data() {
    return {
      barType: "main"
    }
  },
  components: {
    Topnav
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
  /* background-image: url("../img/main-wallpaper.jpg"); */
  background-image: linear-gradient(to bottom right, white, #1f70a7);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  filter: progid: DXImageTransform.Microsoft.AlphaImageLoader(src='../img/main-wallpaper.jpg', sizingMethod='scale');
}
</style>