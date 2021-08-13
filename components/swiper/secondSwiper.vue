<template>
  <div class="swiper-container-2" :style="{ width: width, height: height }">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <slot></slot>
    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev text-success"></div>
    <div class="swiper-button-next text-success"></div>
  </div>
</template>

<script>
import Swiper, {Navigation } from "swiper";
Swiper.use([Navigation]);
export default {
  props: ["width", "height"],
  mounted() {
    new Swiper(".swiper-container-2", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView:5,
      spaceBetween:10
    });
  },
};
</script>
