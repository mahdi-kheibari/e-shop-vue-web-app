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
            <nuxt-link v-for="i in mainSlider" :key="i.name" :to="'/Products/category/'+i.route" class="swiper-slide">
              <img :src="i.address" :alt="i.name" />
            </nuxt-link>
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
              <nuxt-link
                v-for="i in discountSlider"
                :key="i.name"
                :to="'/Product/'+i.category+'/'+i.id"
                class="swiper-slide flex-column link-dark text-decoration-none"
              >
                <img :src="i.images[0].address" :alt="i.name" class="second-card-img" />
                <p class="text-right">
                  {{ i.name }}
                </p>
                <div class="text-left">
                  <span class="badge rounded-pill bg-danger mt-3">{{
                    i.discount
                  }}</span>
                  <span
                    class="text-decoration-line-through text-secondary mt-3"
                    >{{ i.price }}</span
                  >
                </div>
                <h5 class="text-left">{{ i.realPrice }}</h5>
              </nuxt-link>
            </mainSwiper>
            <nuxt-link to="/Products/category/Discounts" class="d-block btn btn-block btn-outline-danger">
              See all
            </nuxt-link>
          </div>
        </div>
      </section>
      <section class="bestsellers bg-white my-5">
        <div class="d-flex justify-content-between align-items-baseline">
            <h3 class="font-weight-bold bestsellers-title d-inline m-2">
            Recent bestsellers
            </h3>
            <nuxt-link to="" class="btn btn-outline-success me-1">
                See all
            </nuxt-link>    
        </div>
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
        <div class="d-flex justify-content-between align-items-baseline">
            <h3 class="font-weight-bold brands-title d-inline m-2">
                Special brands
            </h3>
            <nuxt-link to="" class="btn btn-outline-success me-1">
                See all
            </nuxt-link>    
        </div>
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
    const products = [];
    function filteredProduct(product) {
        const Products = product;
        for (let key in Products) {
            const filtered=Products[key].filter((item)=>
            item.special===true
            ).map((item)=>{
                return {
                    ...item,
                    category:key
                }
            });
            products.push(...filtered);
        } 
    }
    const allProducts={
        Digital:store.state.Digital.Products,
        Fashion:store.state.Fashion.Products,
        Beauty:store.state.Beauty.Products,
        House:store.state.House.Products
    };
    for (let key in allProducts) {
        filteredProduct(allProducts[key]);
    }
    const discountSlider=[]
    for (let step = 0; step < 3; step++) {
        discountSlider.push(products[Math.floor(Math.random()*products.length)]);
    }
    return {
      discountSlider,
      mainSlider: store.getters.mainSlider,
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
  height: 285px;
  &-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.brands{
    height: 265px;
}
</style>
