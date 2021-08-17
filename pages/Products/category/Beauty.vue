<template>
    <div>
        <section>
            <category :products="productsCategory" subRoute="/Products/Beauty/"/>
        </section>
        <section>
            <breadcrumb activeText="Beauty and health" />
            <productList :items="Products" />
        </section>
    </div>
</template>
<script>
import category from '@/components/category.vue';
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productList.vue";
export default {
    computed: {
        productsCategory() {
            return this.$store.state.categories.allCategories['Beauty and health'].products;
        },
    },
    components:{
        category,
        breadcrumb,
        productList
    },
    asyncData({store}) {
        const products=[];
        const beautyProducts=store.state.Beauty.Products;
        for ( let key in beautyProducts) {
            products.push(...beautyProducts[key]);
        }
        return {
            Products:products
        }
    },
}
</script>