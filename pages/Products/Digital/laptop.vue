<template>
    <div>
         <breadcrumb :activeText="$i18n.locale==='en'?'laptop':'لپ تاپ'" :subCrumb="true" :subCrumbName="$t('header.subCategories[0]')" subCrumbPath="Digital" />
         <productList :items="Products" subItemPath="laptop" />
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
            Products:store.state.Digital.Products['laptop']
        }
    },
}
</script>