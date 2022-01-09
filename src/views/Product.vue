<template>
<div class="product">
  <title-atoms class="product_wrapper_title">Products management</title-atoms>
  <product-table-organisms class="product_wrapper_table" :products="products" />
  <product-table-responsive-organisms class="product_wrapper_table_responsive" :products="products" />
</div>
</template>

<script>
import ProductTable from "@/components/organisms/ProductTable";
import ProductTableResponsive from "@/components/organisms/ProductTableResponsive";
import Title from "@/components/atoms/Title";
export default {
  name: "Product",

  components: {
    'product-table-organisms': ProductTable,
    'product-table-responsive-organisms': ProductTableResponsive,
    'title-atoms': Title,
  },

  computed: {
    products: function() {
      return this.$store.state.products
    }
  },
}
</script>

<style lang="scss" scoped>
.product_wrapper_title {
  text-align: center;
}
.product_wrapper_table {
  margin-top: 66px;

  @media only screen and (max-width: 1070px) {
    display: none;
  }
}

.product_wrapper_table_responsive {
  display: none;
  @media only screen and (max-width: 1070px) {
    display: block;
  }
}
</style>