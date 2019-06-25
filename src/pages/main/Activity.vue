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
  name: "Activity",
  data() {
    return {
      tabType: "activity"
    }
  },
  components: {
    Tabnav
  },
  mounted() {
    this.$router.replace("/main/activity/home")
  }
}
</script>

<style>

</style>