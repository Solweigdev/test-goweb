<template>
  <div class="components">
    <title-atoms>Atoms</title-atoms>
    <br>
    <badge-atoms>Test du badge</badge-atoms>
    <badge-atoms type="secondary">Test du badge</badge-atoms>
    <br>
    <title-atoms>Je suis un titre</title-atoms>
    <sub-title-atoms>Je suis un sous titre</sub-title-atoms>
    <paragraph-atoms>Bender, you risked your life to save me!</paragraph-atoms>
    <br>
    <button-atoms>Button</button-atoms>
    <br>
    <input-atoms />
    <hr>
    <title-atoms>Molecules</title-atoms>
    <description-product-molecules />
    <category-product-molecules />
    <price-product-molecules />

    <hr>
    <title-atoms>Organisms</title-atoms>
    <product-table-molecules :items="[{'title': 'Product name'},  {'title': 'Category'}, {'title': 'Price'}, {'title': 'Price(including VAT)'}]" />
    <introduce-product-molecules />
    <nav-side-bar-molecules />
  </div>
</template>

<script>
import Badge from "@/components/atoms/Badge";
import Title from "@/components/atoms/Title";
import SubTitle from "@/components/atoms/SubTitle";
import Paragraph from "@/components/atoms/Paragraph";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import ProductTable from "@/components/organisms/ProductTable";
import DescriptionProduct from "@/components/molecules/DescriptionProduct";
import CategoryProduct from "@/components/molecules/CategoryProduct";
import PriceProduct from "@/components/molecules/PriceProduct";
import IntroduceProduct from "@/components/organisms/IntroduceProduct";
import NavSideBar from "@/components/organisms/NavSideBar";
export default {
  name: "Component",

  components: {
    'badge-atoms': Badge,
    'title-atoms': Title,
    'sub-title-atoms': SubTitle,
    'paragraph-atoms': Paragraph,
    'button-atoms': Button,
    'input-atoms': Input,
    'product-table-molecules': ProductTable,
    'description-product-molecules': DescriptionProduct,
    'category-product-molecules': CategoryProduct,
    'price-product-molecules': PriceProduct,
    'introduce-product-molecules': IntroduceProduct,
    'nav-side-bar-molecules': NavSideBar
  }
}
</script>

<style scoped>
</style>