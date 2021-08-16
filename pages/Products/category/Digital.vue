<template>
    <div>
        <section>
            <category :products="products" subRoute="/Products/Digital/"/>
        </section>
    </div>
</template>
<script>
import category from '@/components/category.vue';
export default {
    computed: {
        products() {
            return this.$store.state.categories.allCategories['Digital products'].products;
        },
    },
    components:{
        category
    }
}
</script>