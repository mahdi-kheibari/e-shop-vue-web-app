<template>
  <singleProduct 
    :product="product"
    :similarProducts="similarProducts"
    :params="$route.params.id"
    subCrumbName="makeup"
    forBreadcrumbFa="آرایشی"
    subPath="Beauty"
   />
</template>
<script>
import singleProduct from "@/components/singleProduct.vue";
export default {
  validate({ params, store }) {
    return store.state.Beauty.Products["makeup"].some(
      (product) => product.id === params.id
    );
  },
  asyncData({ params, store }) {
    const product = store.state.Beauty.Products["makeup"].find(
      (item) => item.id === params.id
    );
    return {
      product,
       similarProducts:store.state.Beauty.Products["makeup"]
    };
  },
  components:{
      singleProduct
  }
};
</script>
