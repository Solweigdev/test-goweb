<!--MOLECULES MENU-->
<template>
  <ul class="menu">
    <li v-for="(item, index) of items" :key="index" :class="[{'active': item.active}, 'menu_list']">
      <link-atoms :link="item.link" class="menu_list_item">{{item.name}}</link-atoms>
    </li>
    <hr class="menu_list">
    <li class="menu_list">
      <link-atoms link="#" class="menu_list_item">Logout</link-atoms>
    </li>
  </ul>
</template>

<script>
import Link from "@/components/atoms/Link";

export default {
  name: "Menu",

  props: {
    items: {
      type: Array
    }
  },

  components: {
    'link-atoms': Link
  },
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/variables";

.menu {
  list-style: none;
}

.menu_list {
  display: flex;
  align-items: center;
  margin: 30px 0;

  &.active {
    &::before {
      content: "\2022";
      color: $white-color;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
}

.menu_list_item {
  color: $white-color;
}
</style>