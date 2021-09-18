<template>
    <div>
         <breadcrumb :activeText="$i18n.locale==='en'?'male':'مردانه'" :subCrumb="true" :subCrumbName="$t('header.subCategories[1]')" subCrumbPath="Fashion" />
         <productList :items="Products" subItemPath="male" />
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
            Products:store.state.Fashion.Products['male']
        }
    },
}
</script>