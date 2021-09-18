<template>
  <subCategoryPage :topItemName="$t('header.subCategories[2]')" :subCategoryItems="beautyCategories">
    <nuxt-child></nuxt-child>
  </subCategoryPage>
</template>
<script>
import subCategoryPage from "@/components/category/subCategoryPage.vue";
export default {
  computed: {
    beautyCategories() {
      return this.$store.state.categories.allCategories['Beauty and health'];
    },
  },
  components:{
    subCategoryPage
  }
};
</script>