<template>
    <categoryPage
      :productsCategory="productsCategory"
      :productsItems="Products"
      subRoute="/Products/House/"
      :activeText="$i18n.locale==='en'?'House':'خانه'"
    />
</template>
<script>
import categoryPage from '@/components/category/categoryPage.vue';
export default {
    computed: {
        productsCategory() {
            return this.$store.state.categories.allCategories['House'].products;
        },
    },
    components:{
        categoryPage,
    },
    asyncData({store}) {
        const houseProducts=store.state.House.Products;
        return {
            Products:houseProducts
        }
    },
}
</script>