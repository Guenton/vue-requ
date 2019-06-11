<template>
  <div class="login-wallpaper">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "../components/login/LoginForm"
export default {
  name: "LoginCore",
  components: {
    LoginForm
  }
}
</script>

<style>
.login-wallpaper {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  position: fixed;
  background-image: url("../img/login-wallpaper.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  filter: progid: DXImageTransform.Microsoft.AlphaImageLoader(src='../img/login-wallpaper.jpg', sizingMethod='scale');
}
</style>