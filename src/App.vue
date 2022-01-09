<template>
  <div id="app">
    <nav-side-bar-organisms />
    <div class="app_wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavSideBar from "@/components/organisms/NavSideBar";
import {mapActions} from "vuex";
export default {
  components: {
    'nav-side-bar-organisms': NavSideBar
  },

  methods: {
    ...mapActions(['FetchLimitProduct'])
  },

  mounted: function() {
    this.FetchLimitProduct()
  },
}
</script>

<style lang="scss">
@import 'css-init/src/init';

#app {
  display: flex;
}

.app_wrapper {
  width: 100%;
  padding: 45px;
  margin-top: 50px;
}
</style>
