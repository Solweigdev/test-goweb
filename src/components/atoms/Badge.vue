<!-- ATOMIC BADGE -->
<template>
  <div :class="`badge badge-${type}`">
    <slot /><!--  SLOT REPLACE BY PARENTS DATA-->
  </div>
</template>

<script>
export default {
  name: "Badge",

  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
}
</script>

<style lang="scss">
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/_variables.scss";

.badge {
  padding: 6px 13px;
  border-radius: 90px;
  color: $white-color;
  display: inline-block;
}

.badge-primary {
  background-color: $green-color;
}

.badge-secondary {
  background-color: $orange-color;
}
</style>