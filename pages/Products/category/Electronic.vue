<template>
  <categoryPage
      :productsCategory="digitalCategory"
      :productsCategory2="houseCategory"
      :productsItems="Products"
      subRoute="/Products/Digital/"
      subRoute2="/Products/House/"
      :activeText="$tc('categoryAside.footer',1)"
    />
</template>
<script>
import categoryPage from "@/components/category/categoryPage.vue";
export default {
  computed: {
    digitalCategory() {
        return this.$store.state.categories.allCategories["Digital products"].products;
    },
    houseCategory() {
        return this.$store.state.categories.allCategories["House"].products;
    },
  },
  components: {
    categoryPage,
  },
  asyncData({store}) {
      const products={};
      const digitalProducts=store.state.Digital.Products;
      const houseProducts=store.state.House.Products;
      for ( let key in digitalProducts) {
          products[key]=digitalProducts[key]
      }
      for ( let key in houseProducts) {
          products[key]=houseProducts[key]
      }
      return {
          Products:products
      }
  },
}
</script>