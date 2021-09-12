<template>
    <div>
         <breadcrumb activeText="female" :subCrumb="true" subCrumbName="Fashion" />
         <productList :items="Products" subItemPath="female" />
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
            Products:store.state.Fashion.Products['female']
        }
    },
}
</script>