<template>
    <categoryPage
      :productsCategory="productsCategory"
      :productsItems="Products"
      subRoute="/Products/Beauty/"
      :activeText="$i18n.locale==='en'?'Beauty and health':'زیبایی و سلامت'"
    />
</template>
<script>
import categoryPage from "@/components/category/categoryPage.vue";
export default {
  computed: {
    productsCategory() {
      return this.$store.state.categories.allCategories["Beauty and health"].products;
    },
  },
  components: {
    categoryPage,
  },
  asyncData({ store }) {
    const beautyProducts = store.state.Beauty.Products;
    return {
      Products: beautyProducts,
    };
  },
};
</script>
