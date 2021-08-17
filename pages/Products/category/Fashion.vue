<template>
    <div>
        <section>
            <category :products="productsCategory" subRoute="/Products/Fashion/"/>
        </section>
        <section>
            <breadcrumb activeText="Fashion and clothing" />
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
            return this.$store.state.categories.allCategories['Fashion and clothing'].products;
        },
    },
    components:{
        category,
        breadcrumb,
        productList
    },
    asyncData({store}) {
        const products=[];
        const fashionProducts=store.state.Fashion.Products;
        for ( let key in fashionProducts) {
            products.push(...fashionProducts[key]);
        }
        return {
            Products:products
        }
    },
}
</script>