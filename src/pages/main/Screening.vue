<template>
  <div class="px-3">
    <transition name="fade" mode="out-in" appear>
      <Tabnav :tabType="tabType"/>
    </transition>
    <div class="whiteshade rounded border-left border-bottom">
      <transition name="fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </div> 
  </div>
</template>

<script>
import Tabnav from "../../components/tabnav/Tabnav"
export default {
  name: "Screening",
  data() {
    return {
      tabType: "screening"
    }
  },
  components: {
    Tabnav
  },
  mounted() {
    this.$router.replace("/main/screening/home")
  }
}
</script>

<style>

</style>