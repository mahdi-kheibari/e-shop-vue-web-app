<template>
    <div>
        <breadcrumb activeText="mobile" :subCrumb="true" subCrumbName="Digital" />
        <productList :items="Products" />
    </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productList.vue";
export default {
    components:{
        breadcrumb,
        productList
    },
    asyncData({store}) {
        return {
            Products:store.state.Digital.Products['mobile']
        }
    },
}
</script>