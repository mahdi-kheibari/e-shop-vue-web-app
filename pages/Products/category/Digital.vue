<template>
  <div>
    <section>
      <category :products="productsCategory" subRoute="/Products/Digital/" />
    </section>
    <section>
      <breadcrumb activeText="Digital products" />
      <productList :items="Products" />
    </section>
  </div>
</template>
<script>
import category from "@/components/category.vue";
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productlist/productList.vue";
export default {
  computed: {
    productsCategory() {
      return this.$store.state.categories.allCategories["Digital products"].products;
    },
  },
  components: {
    category,
    breadcrumb,
    productList
  },
  asyncData({store}) {
      const products=[];
      const digitalProducts=store.state.Digital.Products;
    //   for ( let key in digitalProducts) {
    //       products.push(...digitalProducts[key]);
    //   }
      return {
          Products:digitalProducts
      }
  },
};
</script>
