<template>
  <singleProduct 
    :product="product"
    :similarProducts="similarProducts"
    :params="$route.params.id"
    subCrumbName="male"
    forBreadcrumbFa="مردانه"
    subPath="Fashion"
   />
</template>
<script>
import singleProduct from "@/components/singleProduct.vue";
export default {
  validate({ params, store }) {
    return store.state.Fashion.Products["male"].some(
      (product) => product.id === params.id
    );
  },
  asyncData({ params, store }) {
    const product = store.state.Fashion.Products["male"].find(
      (item) => item.id === params.id
    );
    return {
      product,
       similarProducts:store.state.Fashion.Products["male"]
    };
  },
  components:{
      singleProduct
  }
};
</script>
