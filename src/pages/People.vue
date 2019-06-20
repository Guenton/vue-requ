<template>
  <div class="people-wallpaper">
    <Topnav :barType="barType"/>
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Topnav from "../components/topnav/Topnav"

export default {
  name: "People",
  data() {
    return {
      barType: "people"
    }
  },
  components: {
    Topnav
  }
}
</script>

<style>
.people-wallpaper {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  position: fixed;
  background-image: linear-gradient(to bottom right, white, #1f70a7);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  filter: progid: DXImageTransform.Microsoft.AlphaImageLoader(src='../img/main-wallpaper.jpg', sizingMethod='scale');
}
.whiteshade {
 background-color: rgba(255,255,255,0.9)
}
</style>