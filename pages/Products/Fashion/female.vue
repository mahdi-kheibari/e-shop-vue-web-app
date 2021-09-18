<template>
    <div>
         <breadcrumb :activeText="$i18n.locale==='en'?'female':'زنانه'" :subCrumb="true" :subCrumbName="$t('header.subCategories[1]')" subCrumbPath="Fashion" />
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