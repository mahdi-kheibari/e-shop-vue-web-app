<template>
    <div>
         <breadcrumb activeText="makeup" :subCrumb="true" subCrumbName="Beauty" />
         <productList :items="Products" subItemPath="makeup" />
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
            Products:store.state.Beauty.Products['makeup']
        }
    },
}
</script>