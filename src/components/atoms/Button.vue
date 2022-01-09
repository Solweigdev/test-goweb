<!-- ATOMIC BUTTON -->
<template>
<button :class="`button button-${type}`" @click="handleClick">
  <slot /><!--  SLOT REPLACE BY PARENTS DATA-->
</button>
</template>

<script>
export default {
  name: "Button",

  props: {
    type: {
      default: 'primary'
    }
  },

  methods: {
    // When user click on the button  | Send event to parent
    handleClick: function() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/variables";

.button {
  padding: 10px 14px;
  color: $white-color;
  font-size: $size;
  border-radius: 3px;
  margin: 0;
  border: none;
  width: auto;
  cursor: pointer;
}

.button-primary {
  background-color: $blue-color;
}
</style>