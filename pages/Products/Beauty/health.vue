<template>
    <div>
         <breadcrumb activeText="health" :subCrumb="true" subCrumbName="Beauty" />
         <productList :items="Products" subItemPath="health" />
    </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productList/productList.vue";
export default {
    components:{
        breadcrumb,
        productList
    },
    asyncData({store}) {
        return {
            Products:store.state.Beauty.Products['health']
        }
    },
}
</script>