<!--ATOMIC INPUT-->
<template>
  <div class="input-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <input :type="type" :value="value" v-model="inputVal">
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    type: {
      default: 'text'
    },
    value: {
      default: ''
    }
  },

  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/variables";

input {
  border: 1px solid $blue-color;
  color: $grey-color;
  padding: 10px  35px 10px 14px;
  position: relative;
  width: 100%;
  display: inline-block;
}

input:focus {
  border: 1px solid $blue-color;
}

.input-icon {
  position: relative;
}

.input-icon svg {
  position: absolute;
  right: 10px;
  top: 6px;
  pointer-events: none;
  width: 25px;
  height: 25px;
  color: $grey-color;
  z-index: 999;
}
</style>