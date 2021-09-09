<template>
  <div class="d-flex mb-1 breadcrumb bg-light">
    <nuxt-link to="/" exact>
        Home
    </nuxt-link>
    <span class="breadcrumb-divider">/</span>
    <nuxt-link to="/Products" exact >
        Products
    </nuxt-link>
    <span class="breadcrumb-divider">/</span>
    <nuxt-link v-if="subCrumb" :to="'/Products/category/'+subCrumbName" exact >
        {{subCrumbName}}
    </nuxt-link>
    <nuxt-link v-if="subCrumbSingle" :to="'/Products/'+subPath+'/'+subCrumbName" exact >
        {{subCrumbName}}
    </nuxt-link>
    <span v-if="subCrumb || subCrumbSingle" class="breadcrumb-divider">/</span>
    <span class="text-muted">
      {{ activeText }}
    </span>
  </div>
</template>
<script>
export default {
  props: { activeText: String,subCrumb:Boolean,subCrumbSingle:Boolean,subPath:String,subCrumbName:String },
};
</script>
<style scoped>
.breadcrumb-divider{
    color: #6c757d;
    padding: 0 0.5rem;
}
</style>
