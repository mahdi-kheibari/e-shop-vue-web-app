<template>
  <div class="swiper-container" :style="{ width: width}">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <slot></slot>
    </div>
    <!-- If we need pagination -->
    <div v-if="pagination" class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev text-secondary"></div>
    <div class="swiper-button-next text-secondary"></div>
  </div>
</template>

<script>
import Swiper, { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
Swiper.use([Autoplay, EffectFade, Pagination, Navigation]);
export default {
  props: {"width":String,"danger":Boolean,"pagination":Boolean},
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable:true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "fade",
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      }
    });
  },
};
</script>
<style scoped>
.swiper-container{
    border-radius: 20px;
}
</style>
