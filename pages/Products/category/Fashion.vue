<template>
    <categoryPage
      :productsCategory="productsCategory"
      :productsItems="Products"
      subRoute="/Products/Fashion/"
      :activeText="$i18n.locale==='en'?'Fashion and clothing':'مد و پوشاک'"
    />
</template>
<script>
import categoryPage from '@/components/category/categoryPage.vue';
export default {
    computed: {
        productsCategory() {
            return this.$store.state.categories.allCategories['Fashion and clothing'].products;
        },
    },
    components:{
        categoryPage,
    },
    asyncData({store}) {
        const fashionProducts=store.state.Fashion.Products;
        return {
            Products:fashionProducts
        }
    },
}
</script>