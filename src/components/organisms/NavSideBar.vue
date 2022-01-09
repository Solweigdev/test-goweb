<!--ORGANISMS NAVSIDEBAR -->
<template>
  <div class="nav-side-bar">
    <img class="nav-side-bar_logo" :src="Logo" alt="Logo">
    <menu-molecules :items="items" class="nav-side-bar_menu"/>
  </div>
</template>

<script>
import Logo from '@/assets/img/Logo.svg'
import Menu from "@/components/molecules/Menu";

export default {
  name: "NavSideBar",

  data: () => ({
    Logo,
    items: [
      {'name': 'Dashboard', 'link': '#', 'active': false},
      {'name': 'Products management', 'link': '/products', 'active': true},
      {'name': 'Employees management', 'link': '#', 'active': false}
    ]
  }),

  components: {
    'menu-molecules': Menu
  }
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/variables";

.nav-side-bar {
  min-width: 350px;
  max-width: 350px;
  height: 100vh;
  background-color: $blue-color;
  position: relative;
}

.nav-side-bar_logo {
  padding: 58px 88px 0 88px;
}

.nav-side-bar_menu {
  padding: 116px 50px 0 50px;
}

@media only screen and (max-width: 1070px) {
  .nav-side-bar {
    display: none;
  }
}
</style>