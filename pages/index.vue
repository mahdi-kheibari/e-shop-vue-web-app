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
          <div class="bg-white discounts py-2 d-flex flex-column align-items-center">
            <h2 class="text-danger text-center">Special discounts</h2>
            <mainSwiper
              width="100%"
              height="400px"
              :danger="true"
              :pagination="false"
            >
              <nuxt-link
                v-for="i in discountSlider"
                :key="i.name"
                :to="'/Product/'+i.category+'/'+i.id"
                class="swiper-slide justify-content-start flex-column link-dark"
              >
                <div class="second-card-img mx-auto">
                    <img :src="i.images[0].address" :alt="i.name"/>
                </div>
                <div class="my-auto d-flex flex-column align-items-center">
                    <span class="text-center mx-2 mb-0 font-18">
                    {{ i.name }}
                    </span>
                    <div class="text-left mt-3">
                        <span class="font-16 badge text-white rounded-pill bg-danger">
                            {{i.discount}}
                        </span>
                        <span
                            class="font-14 text-muted text-decoration-line-through text-secondary"
                            >{{ i.realPrice }}</span
                        >
                    </div>
                    <div class="text-left font-18 font-weight-bold">{{ i.price }} <span class="font-16 font-weight-normal">toman</span></div>
                </div>
              </nuxt-link>
            </mainSwiper>
            <nuxt-link to="/Products/category/Discounts" class="text-primary mt-auto">
              <span class="font-20 discount-btn">See all</span>
            </nuxt-link>
          </div>
        </div>
      </section>
      <section class="bestSellers bg-white mt-section">
        <div class="brands-header d-flex justify-content-between align-items-baseline">
            <h2 class="bestSellers-title d-inline py-2 font-20">
                Recent bestsellers
            </h2>
        </div>
        <secondSwiper width="100%" height="330px">
          <nuxt-link
            v-for="i in bestSellerSlider"
            :key="i.name"
            :to="'/Product/'+i.category+'/'+i.id"
            class="swiper-slide flex-column pt-1 pb-3 px-3 bestSeller"
          >
            <div class="bestSeller-img mx-auto">
                <img :src="i.images[0].address" :alt="i.name" />
            </div>
            <div class="bestSeller-caption my-auto text-center d-flex flex-column align-items-center justify-content-between">
                <p :class="[{'caption_nameTwoLine':!i.special},{'caption_nameOneLine':i.special},'text-left','mx-2','mb-0','font-14']">
                {{ i.name }}
                </p>
                <div v-if="i.special" class="mt-3">
                    <span class="font-14 badge text-white rounded-pill bg-danger">
                        {{i.discount}}
                    </span>
                    <span
                        class="font-14 text-muted text-decoration-line-through text-secondary"
                        >{{ i.realPrice }}</span
                    >
                </div>
                <div class="font-16 font-weight-bold">{{i.price}} <span class="font-14 font-weight-normal">toman</span></div>
            </div>
          </nuxt-link>
        </secondSwiper>
      </section>
      <section
        class="brands bg-white mt-section"
      >
        <div class="d-flex justify-content-between brands-header align-items-baseline">
            <h2 class="brands-title d-inline py-2 font-20">
                Special brands
            </h2>
            <nuxt-link to="/Products/category/Brands" class="mr-1">
                <button class="btn btn-primary text-white">
                    See all
                </button>
            </nuxt-link>    
        </div>
        <secondSwiper width="100%" height="163px">
          <nuxt-link
            v-for="i in SpecialBrandsSlider"
            :key="i.name"
            :to="'Products/category/Brands#'+i.name"
            class="swiper-slide mt-1 px-2 mr-0 brand"
          >
            <div class="brand-img mx-auto">
                <img :src="i.address" :alt="i.name" />
            </div>
          </nuxt-link>
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
    const bestProducts=[];
    function filteredProduct(Products) {
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

            const best=Products[key].map((item)=>{
                return {
                    ...item,
                    category:key
                }
            });
            bestProducts.push(...best);
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
        const random=products[Math.floor(Math.random()*products.length)];
        if(!discountSlider.some(item=>item.id===random.id)){
            discountSlider.push(random);
        }
    }
    const bestSellerSlider=[]
    for (let step = 0; step < 8; step++) {
        const random=bestProducts[Math.floor(Math.random()*bestProducts.length)];
        if(!bestSellerSlider.some(item=>item.id===random.id)){
            bestSellerSlider.push(random);
        }
    }
    return {
      discountSlider,
      bestSellerSlider,
      mainSlider: store.getters.mainSlider,
      otherSliderTitle: store.getters.otherSliderTitle,
      SpecialBrandsSlider: store.getters.SpecialBrandsSlider,
    };
  },
};
</script>
<style lang="scss">
@mixin sliderImg{
      width: 100% !important;
      height: 100% !important;
      object-fit: contain !important;
      object-position: center;
      margin: auto;
}
@mixin line-clamp($line){
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: $line;
    -webkit-box-orient: vertical; 
}
@mixin secondSliderItem($item){
    .#{$item}{
        &-caption{
            height:90px ;
        }
        &-img{
            width: 100%;
            height: 180px;
            img{
                @include sliderImg;
            }
        }
    } 
}
.slider-2 {
  width: 100%;
  height: 500px;
}
.second-card-img {
  width: 90% !important;
  height: 270px !important;
  img{
      @include sliderImg;
  }
}
.categories,
.discounts,
.bestSellers,
.similars,
.brands {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
}
.discounts{
    height: 500px ;
    border-radius: 20px;
}
.bestSellers,
.similars,
.brands {
  width: 100%;
  border-radius: 8px;
  position: relative;
  &-title {
    border-bottom: #f0403a 1px solid;
  }
  &-header{
    margin:0px 9px 0 33px;
    padding-top: 9px;
  }
}
.bestSellers,.similars {
    height: 400px;
    @include secondSliderItem(similar);
    @include secondSliderItem(bestSeller);
}
.brands{
    height: 230px;
    .brand{
        width: 140px;
        &-img{
            width: 100%;
            height: 140px;
            img{
                @include sliderImg;
            }
        }
    }
}
.now-price{
    font-size: 20px;
}
.caption_nameTwoLine {
    @include line-clamp(2);
}
.caption_nameOneLine{
    @include line-clamp(1);
}
</style>
