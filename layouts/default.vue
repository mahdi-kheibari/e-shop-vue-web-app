<template>
  <div class="layout">
    <div class="content">
        <appHeader />
        <nuxt />
    </div>
    <appFooter class="footer" />
  </div>
</template>
<script>
import appHeader from "@/components/shared/appHeader/appHeader.vue";
import appFooter from "@/components/shared/appFooter.vue";
export default {
  mounted(){
    this.$store.commit("changeWidth",window.innerWidth);
    this.$nextTick(() => {
          window.addEventListener('resize',()=>{ this.$store.commit("changeWidth",window.innerWidth);});
    })
  },
  components: {
    appHeader,
    appFooter,
  },
};
</script>
<style lang="scss">
#__layout,#__nuxt{
    height: 100%;
}
.layout{
    min-height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    .content{
        flex: 1 0 auto;
    }
    .footer{
        flex-shrink: 0;
    }
}
</style>

