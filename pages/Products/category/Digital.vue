<template>
  <categoryPage
      :productsCategory="productsCategory"
      :productsItems="Products"
      subRoute="/Products/Digital/"
      activeText="Digital products"
    />
</template>
<script>
import categoryPage from "@/components/category/categoryPage.vue";
export default {
  computed: {
    productsCategory() {
      return this.$store.state.categories.allCategories["Digital products"].products;
    },
  },
  components: {
    categoryPage
  },
  asyncData({store}) {
      const digitalProducts=store.state.Digital.Products;
      return {
          Products:digitalProducts
      }
  },
};
</script>
