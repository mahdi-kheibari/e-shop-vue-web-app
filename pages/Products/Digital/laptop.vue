<template>
    <div>
         <breadcrumb activeText="laptop" :subCrumb="true" subCrumbName="Digital" />
         <productList :items="Products" subItemPath="laptop" />
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
            Products:store.state.Digital.Products['laptop']
        }
    },
}
</script>