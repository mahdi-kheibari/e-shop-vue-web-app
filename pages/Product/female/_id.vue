<template>
  <singleProduct 
    :product="product"
    :similarProducts="similarProducts"
    :params="$route.params.id"
    subCrumbName="female"
    forBreadcrumbFa="زنانه"
    subPath="Fashion"
   />
</template>
<script>
import singleProduct from "@/components/singleProduct.vue";
export default {
  validate({ params, store }) {
    return store.state.Fashion.Products["female"].some(
      (product) => product.id === params.id
    );
  },
  asyncData({ params, store }) {
    const product = store.state.Fashion.Products["female"].find(
      (item) => item.id === params.id
    );
    return {
      product,
       similarProducts:store.state.Fashion.Products["female"]
    };
  },
  components:{
      singleProduct
  }
};
</script>
