<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <asideLayout>
            <div slot="beforeDivider">
                <item name="Digital products" :route="fashionCategories.route" />
                <collapseItem name="Products" :visible=true id="collapse-2" :items="fashionCategories.products" />
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
    fashionCategories() {
      return this.$store.state.categories.allCategories['Fashion and clothing'];
    },
  },
  components:{
      collapseItem,
      item
  }
};
</script>