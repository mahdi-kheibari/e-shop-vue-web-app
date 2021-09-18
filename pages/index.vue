<template>
    <div class="container-lg">
      <section class="row">
        <div class="col-12 col-lg-8 no-guttesrs-less-lg">
          <div class="container-fluid no-container-fluid-lg">
            <mainSwiper
              width="100%"
              :danger="false"
              :pagination="true"
              class="categories"
            >
              <nuxt-link v-for="i in mainSlider" :key="i.name" :to="localePath(`/Products/category/${i.route}`)" class="swiper-slide">
                <img :src="i.address" :alt="i.name" />
              </nuxt-link>
            </mainSwiper>
          </div>
        </div>
        <div class="col-4" v-if="getWidth>=992">
          <div class="bg-white discounts py-2 d-flex flex-column align-items-center">
            <h2 class="text-danger text-center discounts-title">{{$t('indexPage.discounts')}}</h2>
            <mainSwiper
              width="100%"
              :danger="true"
              :pagination="false"
              class="discounts-slider"
            >
              <nuxt-link
                v-for="i in discountSlider"
                :key="i.name"
                :to="localePath(`/Product/${i.category}/${i.id}`)"
                class="swiper-slide justify-content-start flex-column"
              >
                <div class="second-card-img mx-auto">
                    <img :src="i.images[0].address" :alt="i.name"/>
                </div>
                <div class="d-flex flex-column h-100 justify-content-between discounts-slider_caption align-items-center text-center">
                    <span :class="['caption_nameOneLine','mx-2','mb-0','font-16']">
                    {{ $i18n.locale==="en"?i.name:i.nameFa }}
                    </span>
                    <div>
                        <span class="font-16 badge text-white rounded-pill bg-danger">
                            {{i.discount}}
                        </span>
                        <span
                            class="font-14 text-muted text-decoration-line-through text-secondary"
                            >{{ i.realPrice }}</span
                        >
                        <div class="text-left font-18 font-weight-bold">{{ i.price }} <span class="font-14 font-weight-normal">{{$t('currency')}}</span></div>
                    </div>
                </div>
              </nuxt-link>
            </mainSwiper>
            <nuxt-link :to="localePath('/Products/category/Discounts')" class="text-primary mt-auto">
              <span class="font-20 discount-btn">{{$t('indexPage.seeAll')}}</span>
            </nuxt-link>
          </div>
        </div>
        <div v-else class="col-12 px-0 mt-related">
            <div class="discounts-small position-relative d-flex align-items-center">
                <discountSwiper width="100%">
                    <div class="swiper-slide swiper-slide-small bg-transparent">
                        <nuxt-link :to="localePath('/Products/category/Discounts')" class="d-flex flex-column h-100 justify-content-around text-white mt-auto">
                            <h2 class="text-white text-center">{{$t('indexPage.discounts')}}</h2>
                            <span class="font-20 align-self-center btn btn-primary" :class="[{'w-50':$i18n.locale==='en'}]">{{$t('indexPage.seeAll')}}</span>
                        </nuxt-link>
                    </div>
                    <nuxt-link
                    v-for="i in discountSlider"
                    :key="i.name"
                    :to="localePath(`/Product/${i.category}/${i.id}`)"
                    class="swiper-slide swiper-slide-small p-2 justify-content-start flex-column link-dark"
                    >
                    <div class="second-card-img-small mx-auto">
                        <img :src="i.images[0].address" :alt="i.name"/>
                    </div>
                    <div class="my-auto d-flex flex-column align-items-center text-center">
                        <span class="text-left mx-2 mb-0 font-14 caption_nameOneLine">
                        {{$i18n.locale==="en"?i.name:i.nameFa }}
                        </span>
                        <div class="text-left mt-3">
                            <span class="font-14 badge text-white rounded-pill bg-danger">
                                {{i.discount}}
                            </span>
                            <span
                                class="font-12 text-muted text-decoration-line-through text-secondary"
                                >{{ i.realPrice }}</span
                            >
                        </div>
                        <div class="text-left font-16 font-weight-bold">{{ i.price }} <span class="font-12 font-weight-normal">{{$t('currency')}}</span></div>
                    </div>
                    </nuxt-link>
                    <div class="swiper-slide swiper-slide-small bg-white">
                        <nuxt-link :to="localePath('/Products/category/Discounts')" class="see-all-end d-flex flex-column h-100 justify-content-center align-items-center text-white mt-auto">
                            <div class="text-info">
                              <b-icon icon="arrow-right-circle" font-scale="2" class="pb-1 text-info" :class="[{'icon-rtl':$i18n.locale==='fa'}]"></b-icon>
                            </div>
                            <span class="font-20 align-self-center text-secondary">{{$t('indexPage.seeAll')}}</span>
                        </nuxt-link>
                    </div>
                </discountSwiper>
            </div>
        </div>
      </section>
        <section class="bestSellers bg-white mt-section">
            <div class="bestSellers-header d-flex justify-content-between align-items-baseline"
            :class="[{'bestSellers-header-rtl':$i18n.locale==='fa'}]"
            >
                <h2 class="bestSellers-title d-inline py-2 font-20">
                    {{$t('indexPage.bestsellers')}}
                </h2>
            </div>
            <secondSwiper width="100%" height="330px" v-if="getWidth>=992">
                <nuxt-link
                v-for="i in bestSellerSlider"
                :key="i.name"
                :to="localePath(`/Product/${i.category}/${i.id}`)"
                :class="[
                    { 'swiper-slide-small': getWidth < 992 },'swiper-slide',{ bestSeller: getWidth >= 992 }
                    ,{'swiper-slide-rtl':$i18n.locale==='fa'}
                ]"
                >
                    <secondSwiperItem :i="i" />
                </nuxt-link>
            </secondSwiper>
            <secondSwiperSm v-else width="100%" height="330px">
                <nuxt-link
                v-for="i in bestSellerSlider"
                :key="i.name"
                :to="localePath(`/Product/${i.category}/${i.id}`)"
                :class="[
                    { 'swiper-slide-small': getWidth < 992 },'swiper-slide',{ bestSeller: getWidth >= 992 }
                    ,{'swiper-slide-rtl':$i18n.locale==='fa'}
                ]"
                >
                    <secondSwiperItem :i="i" />
                </nuxt-link>
            </secondSwiperSm>
        </section>
        <section
            class="brands bg-white mt-section"
        >
            <div class="d-flex justify-content-between brands-header align-items-baseline"
            :class="[{'bestSellers-header-rtl':$i18n.locale==='fa'}]"
            >
                <h2 class="brands-title d-inline py-2 font-20">
                    {{$t('indexPage.brands')}}
                </h2>
                <nuxt-link :to="localePath('/Products/category/Brands')" class="mr-1" :class="[{'ml-1':$i18n.locale==='fa'}]">
                    <button class="btn btn-primary text-white">
                        {{$t('indexPage.seeAll')}}
                    </button>
                </nuxt-link> 
            </div>
            <secondSwiper width="100%" height="163px" v-if="getWidth>=992">
                <nuxt-link
                    v-for="i in SpecialBrandsSlider"
                    :key="i.name"
                    :to="localeLocation({ path: `Products/category/Brands#${i.name}` })"
                    class="swiper-slide mt-1 px-2 mr-0 brand"
                    :class="[{'swiper-slide-rtl':$i18n.locale==='fa'}]"
                >
                    <div class="brand-img mx-auto">
                        <img :src="i.address" :alt="i.name" />
                    </div>
                </nuxt-link>
            </secondSwiper>
            <secondSwiperSm v-else width="100%" height="163px">
                <nuxt-link
                    v-for="i in SpecialBrandsSlider"
                    :key="i.name"
                    :to="localeLocation({ path: `Products/category/Brands#${i.name}`})"
                    class="swiper-slide mt-1 px-2 mr-0 swiper-slide-small"
                    :class="[{'swiper-slide-rtl':$i18n.locale==='fa'}]"
                >
                    <div class="mx-auto second-card-img-small">
                        <img :src="i.address" :alt="i.name" />
                    </div>
                </nuxt-link>
            </secondSwiperSm>
        </section>
    </div>
</template>

<script>
import mainSwiper from "../components/swiper/mainSwiper.vue";
import secondSwiper from "../components/swiper/secondSwiper/secondSwiper.vue";
import secondSwiperItem from "../components/swiper/secondSwiper/secondSwiperItem.vue";
import secondSwiperSm from "../components/swiper/secondSwiper/secondSwiperSm.vue";
import discountSwiper from "../components/swiper/discountSwiper.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    mainSwiper,
    secondSwiper,
    secondSwiperSm,
    secondSwiperItem,
    discountSwiper
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
  computed:{
      ...mapGetters(["getWidth"]),
  }
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
@mixin no-container{
    max-width: 100% !important;
}
@mixin no-container-fluid{
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.no-container-fluid-lg{
  @media (min-width:992px) {
    @include no-container-fluid;
  }
}
.no-guttesrs-less-lg{
  @media (max-width:992px) {
    @include no-container-fluid;
  }
}
.no-guttesrs-less-md{
  @media (max-width:768px) {
    @include no-container-fluid;
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
.slider-2 {
  width: 100%;
  height: 500px;
}
.categories,
.discounts,
.bestSellers,
.similars,
.brands {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
}
.discounts{
    height: calc((100vw - 16px)/3);
    border-radius: 20px;
    &-slider{
      height:calc((100vw - 16px)/3 - 100px) !important;
      &_caption{
        @media (min-width:1200px) {
          justify-content: space-around !important;
        }
      }
    }
    &-title{
        font-size: 32px !important;
        @media (max-width:1200px) {
            font-size: 24px !important;
        }
    }
}
.bestSellers,.similars,.brands{
  &-title{
    font-size: 24px !important;
    @media (max-width:1200px) {
      font-size: 20px !important;
    }
  }
}
.discounts-small{
    width: 100vw !important;
    height: 334px;
    overflow: hidden;
    background: linear-gradient(302deg,#ef394e 67%,#ef5662) !important;
}
.categories{
    height: calc((100vw - 16px)/3);
    @media (max-width:768px) {
        height: calc((100vw - 16px)/2) !important;
    }
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
    @media (max-width:768px) {
      margin-left: 20px !important;
    }
  }
  &-header-rtl{
       margin:0px 33px 0 9px !important;
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
.swiper-slide-small{
  width: 49.5vw !important;
  @media (min-width:576px) {
      width: 205px !important;
  }
  height:100% !important;
  overflow: hidden !important;
  border-radius: 8px !important;
}
.second-card-img {
  width: 90% !important;
  height: 67% !important;
  img,&-small img{
      @include sliderImg;
  }
  &-small{
    height: 150px !important;
  }
}
</style>
