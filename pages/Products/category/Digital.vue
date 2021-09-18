<template>
  <categoryPage
      :productsCategory="productsCategory"
      :productsItems="Products"
      subRoute="/Products/Digital/"
      :activeText="$t('header.subCategories[0]')"
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
