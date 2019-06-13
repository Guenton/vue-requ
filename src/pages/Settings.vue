<template>
  <div class="settings-wallpaper">
    <Topnav :barType="barType"/>
    <router-view />
  </div>
</template>

<script>
import Topnav from "../components/topnav/Topnav"

export default {
  name: "Settings",
  data() {
    return {
      barType: "settings"
    }
  },
  components: {
    Topnav
  }
}
</script>

<style>
.settings-wallpaper {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  position: fixed;
  background-image: linear-gradient(to bottom right, white, indigo);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  filter: progid: DXImageTransform.Microsoft.AlphaImageLoader(src='../img/main-wallpaper.jpg', sizingMethod='scale');
}
</style>