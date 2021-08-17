<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <asideLayout>
            <div slot="beforeDivider">
                <item name="House products" :route="houseCategories.route" />
                <collapseItem name="Products" :visible=true id="collapse-2" :items="houseCategories.products" />
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
    houseCategories() {
      return this.$store.state.categories.allCategories['House'];
    },
  },
  components:{
      collapseItem,
      item
  }
};
</script>