<template>
  <singleProduct 
    :product="product"
    :similarProducts="similarProducts"
    :params="$route.params.id"
    subCrumbName="mobile"
    forBreadcrumbFa="گوشی موبایل"
    subPath="Digital"
   />
</template>
<script>
import singleProduct from "@/components/singleProduct.vue";
export default {
  validate({ params, store }) {
    return store.state.Digital.Products["mobile"].some(
      (product) => product.id === params.id
    );
  },
  asyncData({ params, store }) {
    const product = store.state.Digital.Products["mobile"].find(
      (item) => item.id === params.id
    );
    return {
      product,
       similarProducts:store.state.Digital.Products["mobile"]
    };
  },
  components:{
      singleProduct
  }
};
</script>
