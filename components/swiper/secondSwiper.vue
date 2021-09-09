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
      slidesPerView:6,
      spaceBetween:10
    });
  },
};
</script>
<style lang="scss" scoped>
.swiper-slide{
    border-radius: 8px;
    margin-right: 6px !important;
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),transform .2s cubic-bezier(.4,0,1,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1);
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
        transform: translateY(-2px);
    }
}
</style>
