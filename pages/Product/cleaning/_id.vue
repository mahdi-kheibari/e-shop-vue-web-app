<template>
  <singleProduct 
    :product="product"
    :similarProducts="similarProducts"
    :params="$route.params.id"
    subCrumbName="cleaning"
    forBreadcrumbFa="نظافت"
    subPath="House"
   />
</template>
<script>
import singleProduct from "@/components/singleProduct.vue";
export default {
  validate({ params, store }) {
    return store.state.House.Products["cleaning"].some(
      (product) => product.id === params.id
    );
  },
  asyncData({ params, store }) {
    const product = store.state.House.Products["cleaning"].find(
      (item) => item.id === params.id
    );
    return {
      product,
       similarProducts:store.state.House.Products["cleaning"]
    };
  },
  components:{
      singleProduct
  }
};
</script>
