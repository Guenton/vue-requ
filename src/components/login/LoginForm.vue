<template>
  <b-container class="login-container">
    <b-form @submit="onEnteryKeySubmit">
      <loginFormImg />
      <login-form-username :username="form.username" @typedUsername="receiveUsername($event)" />
      <login-form-password :password="form.password" @typedPassword="receivePassword($event)" />
      <login-form-error :warningMsg="warningMsg" :errorMsg="errorMsg" />
      <login-form-submit-button @submitted="onMouseClickSubmit"/>
    </b-form>
  </b-container>
</template>

<script>
  import loginFormImg from "./login-form-img"
  import loginFormUsername from "./login-form-username"
  import loginFormPassword from "./login-form-password"
  import loginFormSubmitButton from "./login-form-submit-button"
  import loginFormError from "./login-form-error"
  import loginResHandler from "../js/login-res-handler"
  import { loginAPI } from "../js/api-map"

  export default {
    name: "LoginForm",
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        loginJSON: {},
        warningMsg: "",
        errorMsg: "",
      }
    },
    components: {
      loginFormImg,
      loginFormUsername,
      loginFormPassword,
      loginFormSubmitButton,
      loginFormError
    },
    methods: {
      receiveUsername(text) {
        this.form.username = text;
      },
      receivePassword(text) {
        this.form.password = text;
      },
      onEnteryKeySubmit(evt) {
        evt.preventDefault()
        this.onMouseClickSubmit()
      },
      onMouseClickSubmit() {
        this.loginJSON = JSON.stringify(this.form)
        this.postAxios();
        this.onReset();
      },
      onReset() {
        this.form.username = "";
        this.form.password = "";
        this.show = false
        this.$nextTick(() => { this.show = true })
      },
      postAxios() {
        this.axios.post(loginAPI, this.loginJSON)
        .then(res => {
          let response = loginResHandler(res)
          this.responseHandler(response)
        })
        .catch(err => {
          this.errorMsg = `Failed to Connect: ${err}`
        })
      },
      responseHandler(res) {
        if (res.valid) {
          this.$router.push("/main");
        } else {
          this.warningMsg = res.msg;
        }
      }
    }
  }
</script>

<style>
.login-container {
    height: 60%;
    top: 18%;
    bottom: 22%;
    width: 23%;
    left: 0;
    float: center;
    min-height: 275px;
    min-width: 200px;
    border-radius: 0 20px 20px 0;
    background-color: white;
    position: absolute;
}
 .cLoginSiLogo {
    margin: 5%;
}
</style>
