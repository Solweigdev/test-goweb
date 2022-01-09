<!--MOLECULES CATEGORY PRODUCT-->
<template>
<div class="category-product">
  <sub-title-atoms>Category</sub-title-atoms>
  <badge-atoms :type="product.category === 'men\'s clothing' ? 'primary' : 'secondary'">{{ product.category }}</badge-atoms>
</div>
</template>

<script>
import SubTitle from "@/components/atoms/SubTitle";
import Badge from "@/components/atoms/Badge";
export default {
  name: "CategoryProduct",

  components: {
    'sub-title-atoms': SubTitle,
    'badge-atoms': Badge
  },

  computed: {
    // GET PRODUCT STORE VUEX
    product: function() {
      return this.$store.state.product
    }
  },
}
</script>