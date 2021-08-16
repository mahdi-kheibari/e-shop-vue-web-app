<template>
    <div>
        <section>
            <category :products="products" subRoute="/Products/Fashion/"/>
        </section>
    </div>
</template>
<script>
import category from '@/components/category.vue';
export default {
    computed: {
        products() {
            return this.$store.state.categories.allCategories['Fashion and clothing'].products;
        },
    },
    components:{
        category
    }
}
</script>