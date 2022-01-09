<!--ATOMIC LOADER-->
<template>
  <div class="loader">
    <div class="loader_big-circle">
      <div class="loader_small-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "../../scss/variables";

.loader_big-circle {
  width: 8rem;
  height: 8rem;
  border: 5px solid $blue-color;
  border-radius: 50%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  border-color: $blue-color transparent $blue-color $blue-color;
  animation: bigcircle 1.2s linear infinite;
}
.loader_small-circle {
  position:relative;
  width: 5rem;
  height: 5rem;
  border: 5px solid $blue-color;
  border-radius: 50%;
  border-color: $blue-color $blue-color transparent $blue-color;
}

//Animation loop for loader
@keyframes bigcircle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>