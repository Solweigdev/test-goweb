<template>
<div class="product-detail">
  <navigation-molecules :title="product.title" />
  <div class="product-detail_content">
    <div class="product-detail_content_img">
      <img :src="product.image" :alt="product.title">
    </div>
    <div>
      <introduce-product-organisms  :product="product"/>
    </div>
  </div>
</div>
</template>

<script>
import Navigation from "@/components/molecules/Navigation";
import IntroduceProduct from "@/components/organisms/IntroduceProduct";
import {mapMutations} from "vuex";
export default {
  name: "ProductDetail",

  components: {
    'navigation-molecules': Navigation,
    'introduce-product-organisms': IntroduceProduct
  },

  beforeMount: function() {
    this.SET_DATA_IN_PRODUCT(this.$route.params.id)
  },

  computed: {
    product: function() {
      return this.$store.state.product
    }
  },

  methods: {
    ...mapMutations(['SET_DATA_IN_PRODUCT']),
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.product-detail_content {
  display: flex;
  gap: 15px;
  margin-top: 72px;

  @media only screen and (max-width: 1070px) {
      display: block;
  }
}

.product-detail_content_img {
  background-color: $white-color;
  box-shadow: 0 2px 5px #0000001A;
  border-radius: 3px;
  padding: 45px;
  max-height: 500px;
  max-width: 400px;
  min-height: 386px;
  min-width: 300px;
}

@media only screen and (max-width: 1070px) {
  .product-detail_content {
    display: block;
  }
}
</style>