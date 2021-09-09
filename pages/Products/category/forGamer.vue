<template>
    <div>
    <section>
      <category :products="digitalCategory" subRoute="/Products/Digital/" :products2="houseCategory" subRoute2="/Products/House/" />
    </section>
    <section>
      <breadcrumb activeText="For gamers" />
      <productList :items="Products" />
    </section>
  </div>
</template>
<script>
import category from "@/components/category.vue";
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productlist/productList.vue";
export default {
  computed: {
    digitalCategory() {
        const digitalCategory={};
        const digitalProducts=this.$store.state.categories.allCategories["Digital products"].products["laptop"];
        digitalCategory['laptop']=digitalProducts;
        return digitalCategory;
    },
    houseCategory() {
        const houseCategory={};
        const houseProducts=this.$store.state.categories.allCategories["House"].products["video-audio"];
        houseCategory['video-audio']=houseProducts;
        return houseCategory;
    },
  },
  components: {
    category,
    breadcrumb,
    productList
  },
  asyncData({store}) {
      const products={};
      const digitalProducts=store.state.Digital.Products['laptop'];
      products['laptop']=digitalProducts;
      const houseProducts=store.state.House.Products['video-audio'];
      products['video-audio']=houseProducts;
      return {
          Products:products
      }
  },
}
</script>