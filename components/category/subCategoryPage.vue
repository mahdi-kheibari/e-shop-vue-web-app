<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-xl-2 d-none d-lg-block">
                <asideLayout>
                    <div slot="beforeDivider">
                        <item :name="topItemName" :route="subCategoryItems.route" />
                        <collapseItem :name="$tc('header.categoriesSm',2)" :visible=true id="collapse-2" :items="subCategoryItems.products" />
                    </div>
                </asideLayout>
            </div>
            <div class="col-12 col-lg-9 col-xl-10">
                <slot></slot>
            </div>
        </div>
        <categoryListSm
            :products="subCategoryItems.products"
        />
  </div>
</template>
<script>
import collapseItem from '@/components/aside/collapseItem.vue';
import categoryListSm from "@/components/category/categoryListSm.vue";
import item from '@/components/aside/item.vue';
export default {
    props:['subCategoryItems','topItemName'],
    components:{
        collapseItem,
        categoryListSm,
        item
    }
}
</script>