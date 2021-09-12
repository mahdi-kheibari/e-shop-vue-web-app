<template>
  <div class="swiper-container-4" :style="{ width: width, height: height }">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper px-2">
      <!-- Slides -->
      <slot></slot>
    </div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper, {Scrollbar } from "swiper";
Swiper.use([Scrollbar]);
export default {
  props: {"width":String, "height":String},
  mounted() {
    new Swiper(".swiper-container-4", {
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide:true
      },
      slidesPerView:'auto',
      spaceBetween:10
    });
  },
};
</script>