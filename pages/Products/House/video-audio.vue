<template>
    <div>
         <breadcrumb :activeText="$i18n.locale==='en'?'video-audio':'صوتی تصویری'" :subCrumb="true" :subCrumbName="$t('header.subCategories[3]')" subCrumbPath="House" />
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