<!--ORGANISMS INTRODUCE PRODUCT -->
<template>
<div class="introduce-product">
  <div class="introduce-product_left">
    <description-product-molecules  />
    <price-product-molecules />
  </div>
  <category-product-molecules class="introduce-product_right" />
</div>
</template>

<script>
import DescriptionProduct from "@/components/molecules/DescriptionProduct";
import CategoryProduct from "@/components/molecules/CategoryProduct";
import PriceProduct from "@/components/molecules/PriceProduct";

export default {
  name: "IntroduceProduct",

  components: {
    'description-product-molecules': DescriptionProduct,
    'category-product-molecules': CategoryProduct,
    'price-product-molecules': PriceProduct
  }
}
</script>

<style lang="scss" scoped>
.introduce-product {
  display: flex;
  gap: 30px;

  @media only screen and (max-width: 1070px) {
      flex-direction: column;
  }
}

.introduce-product_left {
  flex: 3;
  display: grid;
  gap: 30px;

  @media only screen and (max-width: 1070px) {
    order: 2;
  }
}

.introduce-product_right{
  flex: 1;

  @media only screen and (max-width: 1070px) {
    order: 1;
  }
}


</style>