<!--MOLECULES NAVIGATION-->
<template>
<div class="navigation">
  <a href="/product"><arrow-left-icons class="navigation_icon" /></a>
  <title-icons>{{ title }}</title-icons>
</div>
</template>

<script>
import ArrowLeft from "@/components/icons/ArrowLeft";
import Title from "@/components/atoms/Title";
export default {
  name: "Navigation",

  props: {
    title: {
      type: String,
      required: true
    }
  },

  components: {
    'arrow-left-icons': ArrowLeft,
    'title-icons': Title
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  gap: 50px;
}
.navigation_icon {
  width: 25px;
}
</style>