<template>
  <div>
    <section>
      <categoryList
        v-if="getWidth>=768"
        :products="productsCategory"
        :products2="productsCategory2 ? productsCategory2 : undefined"
        :subRoute="subRoute"
        :subRoute2="subRoute2 ? subRoute2 : undefined"
      />
      <categoryListSm
        v-else
        :products="productsCategory"
        :products2="productsCategory2 ? productsCategory2 : undefined"
        :subRoute="subRoute"
        :subRoute2="subRoute2 ? subRoute2 : undefined"
      />
    </section>
    <section>
      <breadcrumb :activeText="activeText" :class="{'pt-0':getWidth<768}" />
      <productList :items="productsItems" />
    </section>
  </div>
</template>
<script>
import categoryList from "@/components/category/categoryList.vue";
import categoryListSm from "@/components/category/categoryListSm.vue";
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productList/productList.vue";
import {mapGetters} from 'vuex';
export default {
  props: [
    "productsCategory",
    "productsCategory2",
    "subRoute",
    "subRoute2",
    "activeText",
    "productsItems",
  ],
  components: {
    categoryList,
    categoryListSm,
    breadcrumb,
    productList,
  },
  computed:{
      ...mapGetters(['getWidth']),
  }
};
</script>
<style lang="scss" scoped>
.category-list-sm{
    height: 4rem;
}
</style>
