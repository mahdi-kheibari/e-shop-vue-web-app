<template>
  <div>
    <div class="container">
      <section class="row">
        <div class="col-6 col-lg-8">
          <mainSwiper
            width="100%"
            height="500px"
            :danger="false"
            :pagination="true"
            class="categories"
          >
            <div v-for="i in mainSlider" :key="i.name" class="swiper-slide">
              <img :src="i.address" :alt="i.name" />
            </div>
          </mainSwiper>
        </div>
        <div class="col-6 col-lg-4">
          <div class="bg-white rounded discounts">
            <h3 class="text-danger text-center">Special discounts</h3>
            <mainSwiper
              width="100%"
              height="425px"
              :danger="true"
              :pagination="false"
            >
              <div
                v-for="i in secondSlider"
                :key="i.name"
                class="swiper-slide flex-column"
              >
                <img :src="i.address" :alt="i.name" class="second-card-img" />
                <p class="text-right">
                  {{ i.name }}
                </p>
                <div class="text-left">
                  <span class="badge rounded-pill bg-danger mt-3">{{
                    i.discountPercent
                  }}</span>
                  <span
                    class="text-decoration-line-through text-secondary mt-3"
                    >{{ i.price }}</span
                  >
                </div>
                <h5 class="text-left">{{ i.withDiscount }}</h5>
              </div>
            </mainSwiper>
            <nuxt-link to="" class="d-block btn btn-block btn-outline-danger">
              See all
            </nuxt-link>
          </div>
        </div>
      </section>
      <section class="bestsellers bg-white my-5">
        <h3 class="font-weight-bold bestsellers-title d-inline m-3 ms-2">
          Recent bestsellers
        </h3>
        <secondSwiper width="100%" height="225px">
          <div
            v-for="i in bestsellersSlider"
            :key="i.name"
            class="swiper-slide flex-column mt-1"
          >
            <img :src="i.address" :alt="i.name" />
            <p class="text-right w-100 bestsellers-name">
              {{ i.name }}
            </p>
            <span>
              {{ i.price }}
            </span>
          </div>
        </secondSwiper>
      </section>
      <section
        class="brands bg-white mb-5"
      >
        <h3 class="font-weight-bold brands-title d-inline m-3 ms-2">
          Special brands
        </h3>
        <secondSwiper width="100%" height="210px" class="Brands">
          <div
            v-for="i in SpecialBrandsSlider"
            :key="i.name"
            class="swiper-slide mt-1"
          >
            <img :src="i.address" :alt="i.name" />
          </div>
        </secondSwiper>
      </section>
    </div>
  </div>
</template>

<script>
import mainSwiper from "../components/swiper/mainSwiper.vue";
import secondSwiper from "../components/swiper/secondSwiper.vue";
export default {
  components: {
    mainSwiper,
    secondSwiper,
  },
  asyncData({ store }) {
    return {
      mainSlider: store.getters.mainSlider,
      secondSlider: store.getters.discountSlider,
      otherSliderTitle: store.getters.otherSliderTitle,
      bestsellersSlider: store.getters.bestsellersSlider,
      SpecialBrandsSlider: store.getters.SpecialBrandsSlider,
    };
  },
};
</script>
<style lang="scss">
.swiper-pagination-bullet-active {
  background: rgb(25, 135, 84) !important;
}
.slider-2 {
  width: 100%;
  height: 500px;
}
.second-card-img {
  width: 60% !important;
}
.categories,
.discounts,
.bestsellers,
.brands {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
}
.bestsellers,
.brands {
  width: 100%;
  border-radius: 8px;
  position: relative;
  &-title {
    border-bottom: #dc3545 1px solid;
  }
}
.bestsellers {
  height: 270px;
  &-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.brands{
    height: 250px;
}
</style>
