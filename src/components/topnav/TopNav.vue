<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"><HomeIcon /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Requests</b-nav-item>
          <b-nav-item href="#">Cases</b-nav-item>
          <b-nav-item href="#">Activity</b-nav-item>
          <b-nav-item href="#">Screening</b-nav-item>
        </b-navbar-nav>
        <!-- TopNav Right Side -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown>
            <template slot="button-content"><AccountBoxIcon /></template>
            <b-dropdown-item href="#">Agents</b-dropdown-item>
            <b-dropdown-item href="#">Subjects</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><SettingsIcon /></template>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
            <b-dropdown-item href="#">Rights</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import SettingsIcon from "vue-material-design-icons/Settings"
import HomeIcon from "vue-material-design-icons/Home"
import AccountBoxIcon from "vue-material-design-icons/AccountBox"
export default {
  name: "TopNav",
  components: {
    SettingsIcon,
    HomeIcon,
    AccountBoxIcon
  }
}
</script>

