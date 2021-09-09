<template>
    <div>
        <section>
            <category :products="productsCategory" subRoute="/Products/House/"/>
        </section>
        <section>
            <breadcrumb activeText="House" />
            <productList :items="Products" />
        </section>
    </div>
</template>
<script>
import category from '@/components/category.vue';
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productlist/productList.vue";
export default {
    computed: {
        productsCategory() {
            return this.$store.state.categories.allCategories['House'].products;
        },
    },
    components:{
        category,
        breadcrumb,
        productList
    },
    asyncData({store}) {
        const products=[];
        const houseProducts=store.state.House.Products;
        // for ( let key in houseProducts) {
        //     products.push(...houseProducts[key]);
        // }
        return {
            Products:houseProducts
        }
    },
}
</script>