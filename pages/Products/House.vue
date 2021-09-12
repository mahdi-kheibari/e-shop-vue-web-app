<template>
  <subCategoryPage :subCategoryItems="houseCategories">
    <nuxt-child></nuxt-child>
  </subCategoryPage>
</template>
<script>
import subCategoryPage from "@/components/category/subCategoryPage.vue";
export default {
  computed: {
    houseCategories() {
      return this.$store.state.categories.allCategories['House'];
    },
  },
  components:{
      subCategoryPage
  }
};
</script>