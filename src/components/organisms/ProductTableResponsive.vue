<!--ORGANISMS PRODUCT TABLE RESPONSIVE-->
<template>
  <div>
    <template v-if="products">
      <table class="product-table" v-for="(product, index) of products" :key="index" @click="handleLinkDetailProduct(product)">
        <thead>
        <tr>
          <th>
            <paragraph-atoms class="product-table_title">{{ product.title }}</paragraph-atoms>
          </th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <badge-atoms :type="product.category === 'men\'s clothing' ? 'primary' : 'secondary'">{{ product.category }}</badge-atoms>
            </td>
          </tr>
        <tr>
          <td>
            <paragraph-atoms>{{ product.price }}€</paragraph-atoms>
          </td>
        </tr>
        <tr>
          <td>
            <paragraph-atoms>{{ Math.round(parseFloat(product.price)/0.80) }}€</paragraph-atoms>
          </td>
        </tr>
        </tbody>
      </table>
    </template>

    <template v-else>
      <div class="product-table_loader">
        <loader-atoms  />
      </div>
    </template>
  </div>

</template>

<script>
import Paragraph from "@/components/atoms/Paragraph";
import Badge from "@/components/atoms/Badge";
import Loader from "@/components/atoms/Loader";

export default {
  name: "ProductTableResponsive",

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
  margin-top: 30px;

  * {
    border: none;
  }
}

.product-table thead tr {
  background-color: $blue-color;
  color: $white-color;
  text-align: center;
  font-weight: bold;
}

.product-table th, .product-table td {
  padding: 15px 12px;
  width: 100%;
}

.product-table th:nth-last-child(1), .product-table td:nth-last-child(1) {
  text-align: center;
}

.product-table th:nth-last-child(2), .product-table td:nth-last-child(2) {
  text-align: center;
}

.product-table tbody:before {
  /* This doesn't work because of border-collapse */
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