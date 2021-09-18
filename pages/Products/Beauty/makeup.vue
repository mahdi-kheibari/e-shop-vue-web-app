<template>
    <div>
         <breadcrumb :activeText="$i18n.locale==='en'?'makeup':'آرایشی'" :subCrumb="true" :subCrumbName="$t('header.subCategories[2]')" subCrumbPath="Beauty" />
         <productList :items="Products" subItemPath="makeup" />
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
            Products:store.state.Beauty.Products['makeup']
        }
    },
}
</script>