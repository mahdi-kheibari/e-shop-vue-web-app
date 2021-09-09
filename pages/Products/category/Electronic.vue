<template>
    <div>
    <section>
      <category :products="digitalCategory" subRoute="/Products/Digital/" :products2="houseCategory" subRoute2="/Products/House/" />
    </section>
    <section>
      <breadcrumb activeText="Electronic needs" />
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
        return this.$store.state.categories.allCategories["Digital products"].products;
    },
    houseCategory() {
        return this.$store.state.categories.allCategories["House"].products;
    },
  },
  components: {
    category,
    breadcrumb,
    productList
  },
  asyncData({store}) {
      const products={};
      const digitalProducts=store.state.Digital.Products;
      const houseProducts=store.state.House.Products;
      for ( let key in digitalProducts) {
          products[key]=digitalProducts[key]
      }
      for ( let key in houseProducts) {
          products[key]=houseProducts[key]
      }
      return {
          Products:products
      }
  },
}
</script>