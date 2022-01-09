<!--ATOMIC TITLE-->
<template>
<h1 class="title">
  <slot /><!--  SLOT REPLACE BY PARENTS DATA-->
</h1>
</template>

<script>
export default {
  name: "Title"
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/variables";

.title {
  font-size: $size-xl;
  color: $blue-color;
  font-weight: bold;
}
</style>