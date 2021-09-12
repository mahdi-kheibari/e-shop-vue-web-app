<template>
  <div class="swiper-container-2" :style="{ width: width, height: height }">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper px-2">
      <!-- Slides -->
      <slot></slot>
    </div>
    <!-- If we need navigation buttons -->
        <div class="swiper-button-prev text-secondary"></div>
        <div class="swiper-button-next text-secondary"></div>
  </div>
</template>

<script>
import Swiper, {Navigation} from "swiper";
Swiper.use([Navigation]);
export default {
  props: {"width":String, "height":String},
  mounted() {
    new Swiper(".swiper-container-2", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView:6,
      spaceBetween:10
    });
  },
};
</script>
