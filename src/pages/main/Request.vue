<template>
  <div class="px-3">
    <transition name="fade" mode="out-in" appear>
      <Tabnav :tabType="tabType"/>
    </transition>
    <div>
      <transition name="fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </div> 
  </div>
</template>

<script>
import Tabnav from "../../components/tabnav/Tabnav"
export default {
  name: "Request",
  data() {
    return {
      tabType: "request"
    }
  },
  components: {
    Tabnav
  },
  mounted() {
    this.$router.replace("/main/request/home")
  }
}
</script>

<style>

</style>