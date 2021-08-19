<template>
    <div>
         <breadcrumb activeText="male" :subCrumb="true" subCrumbName="Fashion" />
         <productList :items="Products" subItemPath="male" />
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
            Products:store.state.Fashion.Products['male']
        }
    },
}
</script>