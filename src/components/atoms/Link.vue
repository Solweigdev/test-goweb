<!--ATOMIC LINK-->
<template>
  <a class="link" :href="link">
    <slot/><!--  SLOT REPLACE BY PARENTS DATA-->
  </a>
</template>

<script>
export default {
  name: "Link",

  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/variables";

.link {
  color: $white-color;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
}
</style>