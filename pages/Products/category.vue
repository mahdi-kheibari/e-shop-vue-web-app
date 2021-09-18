<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-xl-2 d-none d-lg-block">
        <div class="h-100 d-block">
            <asideLayout>
                <div slot="beforeDivider">
                    <item :name="$t('categoryAside.allProducts')" route="/Products/category/All" />
                    <collapseItem :name="$tc('header.categoriesSm',2)" :visible=true id="collapse-1" :items="allCategories" />
                </div>
                <div slot="afterDivider">
                    <item :name="$t('indexPage.discounts')" route="/Products/category/Discounts" />
                    <item :name="$tc('categoryAside.footer',1)" route="/Products/category/Electronic" />
                    <item :name="$tc('categoryAside.footer',2)" route="/Products/category/forGamer" />
                    <item :name="$t('indexPage.brands')" route="/Products/category/Brands" />
                </div>
            </asideLayout>
        </div>
      </div>
      <div class="col-12 col-lg-9 col-xl-10">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>
<script>
import collapseItem from '@/components/aside/collapseItem.vue';
import item from '@/components/aside/item.vue';
export default {
  computed: {
    allCategories() {
      return this.$store.state.categories.allCategories;
    },
  },
  components:{
      collapseItem,
      item
  }
};
</script>