<template>
    <subCategoryPage :topItemName="$t('header.subCategories[0]')" :subCategoryItems="digitalCategories">
        <nuxt-child></nuxt-child>
    </subCategoryPage>
</template>
<script>
import subCategoryPage from "@/components/category/subCategoryPage.vue";
export default {
  computed: {
    digitalCategories() {
      return this.$store.state.categories.allCategories['Digital products'];
    },
  },
  components:{
      subCategoryPage,
  }
};
</script>