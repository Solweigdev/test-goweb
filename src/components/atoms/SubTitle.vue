<!--ATOMIC SUBTITLE-->
<template>
<h2 class="sub-title">
  <slot /><!--  SLOT REPLACE BY PARENTS DATA-->
</h2>
</template>

<script>
export default {
  name: "SubTitle"
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/variables";

.sub-title {
  font-size: $size-lg;
  color: $blue-color;
}
</style>