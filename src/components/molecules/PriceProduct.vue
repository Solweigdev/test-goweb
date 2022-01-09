<!--MOLECULES PRICE PRODUCT-->
<template>
<div class="price-product">
  <sub-title-atoms>Price</sub-title-atoms>
  <div class="price-product_content">
      <!--    PRICE CHANGE REALTIME VAT PRICE WITH V-MODEL-->
    <input-atoms v-model="form.price" :value="product.price" />
    <!--  CONVERT TO VAT PRICE-->
    <paragraph-atoms>Price (including VAT): {{Math.round(parseFloat(form.price)/0.80) }}€</paragraph-atoms>
  </div>
  <button-atoms @click="handleUpdatePrice">Update Product</button-atoms>
</div>
</template>

<script>
import {mapActions} from "vuex";
import SubTitle from "@/components/atoms/SubTitle";
import Paragraph from "@/components/atoms/Paragraph";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

export default {
  name: "PriceProduct",

  data: () => ({
    form: {}
  }),

  components: {
    'sub-title-atoms': SubTitle,
    'paragraph-atoms': Paragraph,
    'input-atoms': Input,
    'button-atoms': Button
  },

  mounted: function() {
    this.form = this.product
  },

  computed: {
    // GET PRODUCT STORE VUEX
    product: function() {
      return this.$store.state.product
    }
  },

  methods: {
    ...mapActions(['UpdatePriceProduct' ]),
    // UPDATE PRODUCT
    handleUpdatePrice: function() {
      this.UpdatePriceProduct(this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
.price-product_content {
  display: flex;
  gap: 90px;
  align-items: center;
  margin: 15px 0;
}
</style>