<template>
  <div>
    <appHeader />
    <nuxt />
    <appFooter />
  </div>
</template>
<script>
import appHeader from "@/components/shared/appHeader.vue";
import appFooter from "@/components/shared/appFooter.vue";
export default {
  components: {
    appHeader,
    appFooter,
  },
};
</script>
<style>
body{
 background: rgb(248, 249, 250) !important;
}
</style>
