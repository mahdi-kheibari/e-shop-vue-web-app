<template>
    <div>
        <breadcrumb activeText="mobile" :subCrumb="true" subCrumbName="Digital" />
        <productList :items="Products" subItemPath="mobile" />
    </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productlist/productList.vue";
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