<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <asideLayout>
            <div slot="beforeDivider">
                <item name="All products" route="All" />
                <collapseItem name="Products" :visible=true id="collapse-1" :items="allCategories" />
            </div>
            <div slot="afterDivider">
                <item name="Special discount" route="Discounts" />
                <item name="Electronic needs" route="Electronic" />
                <item name="For gamers" route="forGamer" />
                <item name="Special brands" route="Brands" />
            </div>
        </asideLayout>
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