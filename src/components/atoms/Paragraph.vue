<!--ATOMIC PARAGRAPH-->
<template>
<p class="paragraph">
  <slot /><!--  SLOT REPLACE BY PARENTS DATA-->
</p>
</template>

<script>
export default {
  name: "Paragraph"
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/variables";

.paragraph {
  color: $grey-color;
  font-size: 16px;
}
</style>