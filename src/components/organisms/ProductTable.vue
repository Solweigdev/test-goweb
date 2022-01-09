<!--ORGANISMS PRODUCT TABLE-->
<template>
  <table class="product-table">
    <thead>
    <tr>
      <th v-for="(item, index) of items" :key="index">
        <paragraph-atoms class="product-table_title">{{ item.title }}</paragraph-atoms>
      </th>
    </tr>
    </thead>
    <tbody>
    <template v-if="products">
      <tr v-for="(product, index) of products" :key="index" @click="handleLinkDetailProduct(product)">
        <td>
          <paragraph-atoms class="product-table_item_name">{{ product.title }}</paragraph-atoms>
        </td>
        <td>
          <badge-atoms :type="product.category === 'men\'s clothing' ? 'primary' : 'secondary'">{{ product.category }}</badge-atoms>
        </td>
        <td>
          <paragraph-atoms>{{ product.price }}€</paragraph-atoms>
        </td>
        <td>
          <paragraph-atoms>{{ Math.round(parseFloat(product.price)/0.80) }}€</paragraph-atoms>
        </td>
      </tr>
    </template>
    <template v-else>
      <div class="product-table_loader">
        <loader-atoms  />
      </div>
    </template>

    </tbody>
  </table>
</template>

<script>
import Paragraph from "@/components/atoms/Paragraph";
import Badge from "@/components/atoms/Badge";
import Loader from "@/components/atoms/Loader";

export default {
  name: "ProductTable",

  props: {
    products: {
      required: true
    }
  },

  data: () => ({
    items: [{'title': 'Product name'}, {'title': 'Category'}, {'title': 'Price'}, {'title': 'Price(including VAT)'}],
  }),

  components: {
    'paragraph-atoms': Paragraph,
    'badge-atoms': Badge,
    'loader-atoms': Loader
  },

  methods: {
    handleLinkDetailProduct: function(content) {
      window.location = `/product/${content.id}`
    }
  },
}
</script>

<style lang="scss" scoped>
//CALL GLOBAL VARIABLE OF APP
@import "src/scss/variables";

.product-table {
  position: relative;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
  width: 100%;
  border: none;
  white-space: nowrap;

  * {
    border: none;
  }
}

.product-table thead tr {
  background-color: $blue-color;
  color: $white-color;
  text-align: left;
  font-weight: bold;
}

.product-table th, .product-table td {
  padding: 15px 12px;
}

.product-table th:nth-last-child(1), .product-table td:nth-last-child(1) {
  text-align: right;
}

.product-table th:nth-last-child(2), .product-table td:nth-last-child(2) {
  text-align: right;
}

.product-table tbody:before {
  /* This doesn't work because of border-collapse */
  line-height:2em;
  content:".";
  color:white; /* bacground color */
  display:block;
}

.product-table tbody tr {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
}

.product-table_title {
  color: $white-color;
  font-weight: bold;
}

.product-table_item_name {
  font-weight: bold;
}

.product-table_loader {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
}
</style>