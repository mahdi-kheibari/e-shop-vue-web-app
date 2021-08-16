<template>
    <div>
        <section>
            <category :products="products" subRoute="/Products/House/"/>
        </section>
    </div>
</template>
<script>
import category from '@/components/category.vue';
export default {
    computed: {
        products() {
            return this.$store.state.categories.allCategories['House'].products;
        },
    },
    components:{
        category
    }
}
</script>