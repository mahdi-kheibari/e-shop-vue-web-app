<template>
  <div class="d-flex mb-1">
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
    <span v-if="subCrumb" class="breadcrumb-divider">/</span>
    <span class="text-secondary">
      {{ activeText }}
    </span>
  </div>
</template>
<script>
export default {
  props: { activeText: String,subCrumb:Boolean,subCrumbName:String },
};
</script>
<style scoped>
.breadcrumb-divider{
    color: #6c757d;
    padding: 0 0.5rem;
}
</style>
