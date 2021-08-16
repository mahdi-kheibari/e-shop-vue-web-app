<template>
    <div>
        <section>
            <category :products="products" subRoute="/Products/Beauty/"/>
        </section>
    </div>
</template>
<script>
import category from '@/components/category.vue';
export default {
    computed: {
        products() {
            return this.$store.state.categories.allCategories['Beauty and health'].products;
        },
    },
    components:{
        category
    }
}
</script>