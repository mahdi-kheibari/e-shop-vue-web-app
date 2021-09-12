<template>
  <subCategoryPage :subCategoryItems="fashionCategories">
    <nuxt-child></nuxt-child>
  </subCategoryPage>
</template>
<script>
import subCategoryPage from "@/components/category/subCategoryPage.vue";
export default {
  computed: {
    fashionCategories() {
      return this.$store.state.categories.allCategories["Fashion and clothing"];
    },
  },
  components: {
    subCategoryPage
  },
};
</script>
