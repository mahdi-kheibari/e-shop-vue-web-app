<template>
  <categoryPage
      :productsCategory="digitalCategory"
      :productsCategory2="houseCategory"
      :productsItems="Products"
      subRoute="/Products/Digital/"
      subRoute2="/Products/House/"
      :activeText="$tc('categoryAside.footer',2)"
    />
</template>
<script>
import categoryPage from "@/components/category/categoryPage.vue";
export default {
  computed: {
    digitalCategory() {
        const digitalCategory={};
        const digitalProducts=this.$store.state.categories.allCategories["Digital products"].products["laptop"];
        digitalCategory['laptop']=digitalProducts;
        return digitalCategory;
    },
    houseCategory() {
        const houseCategory={};
        const houseProducts=this.$store.state.categories.allCategories["House"].products["video-audio"];
        houseCategory['video-audio']=houseProducts;
        return houseCategory;
    },
  },
  components: {
    categoryPage,
  },
  asyncData({store}) {
      const products={};
      const digitalProducts=store.state.Digital.Products['laptop'];
      products['laptop']=digitalProducts;
      const houseProducts=store.state.House.Products['video-audio'];
      products['video-audio']=houseProducts;
      return {
          Products:products
      }
  },
}
</script>