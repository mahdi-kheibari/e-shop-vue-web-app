<template>
  <div class="swiper-container-3" :style="{ width: width,height:'100%'}">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper my-4">
      <!-- Slides -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: {"width":String},
  mounted() {
    new Swiper(".swiper-container-3", {
      slidesPerView:'auto',
      spaceBetween:10,
      freeMode: {
        enabled:true,
        sticky:true,
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.swiper-wrapper{
    height: 286px !important;
}
</style>
