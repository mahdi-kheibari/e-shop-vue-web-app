<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="h-100 d-block">
            <asideLayout>
                <div slot="beforeDivider">
                    <item name="All products" route="/Products/category/All" />
                    <collapseItem name="Products" :visible=true id="collapse-1" :items="allCategories" />
                </div>
                <div slot="afterDivider">
                    <item name="Special discount" route="/Products/category/Discounts" />
                    <item name="Electronic needs" route="/Products/category/Electronic" />
                    <item name="For gamers" route="/Products/category/forGamer" />
                    <item name="Special brands" route="/Products/category/Brands" />
                </div>
            </asideLayout>
        </div>
      </div>
      <div class="col-10">
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