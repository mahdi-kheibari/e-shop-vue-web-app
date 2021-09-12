<template>
    <div>
         <breadcrumb activeText="video-audio" :subCrumb="true" subCrumbName="House" />
         <productList :items="Products" subItemPath="video-audio" />
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
            Products:store.state.House.Products['video-audio']
        }
    },
}
</script>