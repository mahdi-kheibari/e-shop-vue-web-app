<template>
  <div :class="['layout',{'rtl':$i18n.locale==='fa'}]">
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
.rtl{
    direction: rtl !important;
    .input-group-prepend{
        margin-left: -3px !important;
    }
    .list-unstyled{
        padding-right: 0 !important;
    }
    .alert{
        text-align: right !important;
    }
    .btn-toggle-nav a{
        margin-right: 1.25rem !important;
        margin-left: 0 !important;
    }
    .swiper-slide-rtl{
        margin-left:6px !important;
        margin-right:0px !important;
    }
    .icon-rtl{
        transform:rotate(180deg);
    }
}
</style>

