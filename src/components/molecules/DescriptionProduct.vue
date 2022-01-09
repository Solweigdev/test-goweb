<!--MOLECULES DESCRIPTION-->
<template>
  <div class="description-product">
    <sub-title-atoms>Description</sub-title-atoms>
    <paragraph-atoms>{{product.description}}</paragraph-atoms>
  </div>
</template>

<script>
import SubTitle from "@/components/atoms/SubTitle";
import Paragraph from "@/components/atoms/Paragraph";

export default {
  name: "DescriptionProduct",

  components: {
    'sub-title-atoms': SubTitle,
    'paragraph-atoms': Paragraph
  },

  computed: {
    // GET PRODUCT STORE VUEX
    product: function() {
      return this.$store.state.product
    }
  },
}
</script>