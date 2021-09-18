<template>
<div>
    <breadcrumb  v-if="getWidth<=768" :activeText="params" :subCrumbSingle="true" :subPath="subPath" :subCrumbName="$i18n.locale==='fa'?forBreadcrumbFa:subCrumbName" :subCrumbPath="subCrumbName" class="ml-3 bg-transparent pt-0 " />
    <div class="bg-white px-2 pb-2">
        <section>
            <div class="row .no-guttesrs-less-md pt-2 px-2">
                <div class="col-12 col-md-5 flex-md-shrink-0">
                  <div v-if="getWidth<768" class="product-information_name mb-2" >
                      <h2 :class="[{'text-right':$i18n.locale==='fa'}]" class="font-18">{{$i18n.locale==="en"?product.name:product.nameFa }}</h2>
                  </div>
                  <div class="view-product row m-auto">
                      <div class="col-2">
                          <ul class="gallery-preview list-unstyled d-flex flex-column mx-2">
                              <li v-for="i in product.images" :key="i.address" :class="['my-2',{'current':i.address===currentImg},'p-1']" @click="setCurrent(i.address)">
                                  <img :src="i.address" :alt="product.name">
                              </li>
                          </ul>
                      </div>
                      <div class="col-10">
                          <div class="gallery-current">
                              <img :src="currentImg" :alt="product.name" />
                          </div>
                      </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 flex-md-shrink-1 my-related mt-md-0" :class="[{'container':getWidth<768}]">
                <breadcrumb  v-if="getWidth>=768" :activeText="params" :subCrumbSingle="true" :subPath="subPath" :subCrumbName="$i18n.locale==='fa'?forBreadcrumbFa:subCrumbName" :subCrumbPath="subCrumbName" class="ml-3 single-breadcrumb pl-0" />
                <div class="product-information" :class="[{'text-right':$i18n.locale==='fa'}]">
                    <div class="product-information_name" v-if="getWidth>=768">
                    <h2 class="font-24">{{ $i18n.locale==="en"?product.name:product.nameFa }}</h2>
                    </div>
                    <div class="h-100 mt-2">
                        <div class="h-100">
                            <p class="my-auto text-justify">
                                {{$t('productItemPage.discription')}}
                            </p>
                        </div>
                    </div>
                </div>
              </div>
              <div class="col-12 col-md-3 h-100 position-md-sticky flex-md-shrink-2">
                  <div class="product-information container-md ">
                    <div class="product-information-cart bg-light p-3">
                        <div class="pb-2 d-flex justify-content-between font-18">
                            <span>{{$t('productItemPage.cart.seller')}}</span>
                            <span>{{$t('productItemPage.cart.lorem')}}</span>
                        </div>
                        <hr class="m-0">
                        <div class="py-2 d-flex justify-content-between">
                            <label class="font-18 flex-shrink-0">{{$t('header.cartModal.tableHeader[2]')}} :</label>
                            <input type="number" min="1" class="product-information_input search_box rounded flex-shrink-3" 
                            :class="[{'text-right':$i18n.locale==='fa'}]" 
                            v-model="count"/>
                        </div>
                        <hr class="m-0">
                        <div class="py-2">
                            <div v-if="product.special">
                                <div class="text-left d-flex" :class="[{'justify-content-end':$i18n.locale==='fa'},{'flex-row-reverse':$i18n.locale==='fa'}]">
                                    <span class="font-16 font-md-18 badge text-white rounded-pill bg-danger m-0" :class="[{'mr-1':$i18n.locale==='fa'}]">
                                        {{product.discount}}
                                    </span>
                                    <span
                                        class="font-14 font-md-16 text-muted text-decoration-line-through text-secondary m-0"
                                        >{{product.realPrice}}</span
                                    >
                                </div>
                            </div>
                            <div class="text-left font-18 font-md-20 font-weight-bold" :class="[{'text-right':$i18n.locale==='fa'}]"><span class="font-weight-normal">{{$t('header.cartModal.tableHeader[1]')}} : </span>{{ product.price }} <span class="font-14 font-md-16 font-weight-normal">{{$t('currency')}}</span></div>
                        </div>
                        <button type="button" class="btn btn-block btn-primary font-weight-bold" @click="addToCart">
                            {{$t('productItemPage.cart.btn')}}
                        </button>
                    </div>
                  </div>
              </div>
            </div>
        </section>
        <section class="similars container bg-white mt-section">
            <div class="similars-header d-flex justify-content-between align-items-baseline">
                <h2 class="similars-title d-inline py-2 font-20">
                    {{$t('productItemPage.similar')}}
                </h2>
            </div>
            <secondSwiper width="100%" height="330px" v-if="getWidth>=992">
                    <nuxt-link
                    v-for="i in similarProducts.filter(i=>i.id!==product.id)"
                    :key="i.name"
                    :to="localePath(`/Product/${subCrumbName}/${i.id}`)"
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
                    v-for="i in similarProducts.filter(i=>i.id!==product.id)"
                    :key="i.name"
                    :to="localePath(`/Product/${subCrumbName}/${i.id}`)"
                    :class="[
                        { 'swiper-slide-small': getWidth < 992 },'swiper-slide',{ bestSeller: getWidth >= 992 }
                        ,{'swiper-slide-rtl':$i18n.locale==='fa'}
                    ]"
                    >
                        <secondSwiperItem :i="i" />
                    </nuxt-link>
                </secondSwiperSm>
        </section>
        <section class="d-md-none fixed-bottom bg-white p-3">
            <button type="button" class="btn btn-block btn-primary font-weight-bold" @click="addToCart">
                {{$t('productItemPage.cart.btn')}}
            </button>
        </section>
    </div>
</div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb.vue";
import secondSwiper from "./swiper/secondSwiper/secondSwiper.vue";
import secondSwiperSm from "./swiper/secondSwiper/secondSwiperSm.vue";
import secondSwiperItem from "./swiper/secondSwiper/secondSwiperItem.vue";
import { mapGetters } from "vuex";
export default {
    props:{product:Object,similarProducts:Array,params:String,subCrumbName:String,forBreadcrumbFa:String,subPath:String},
    data() {
        return {
            currentImg:this.product.images[0].address,
            count:1
        }
    },
    methods:{
      setCurrent(address){
          this.currentImg=address;
      },
      addToCart(){
          this.product['category']=this.subCrumbName;
          this.$store.dispatch('Cart/addItem',{
              product:this.product,
              count:this.count,
          }).then((res)=>{
              if(res){
                this.$store.commit('Cart/changeSumTotal');
                this.$store.dispatch('Cart/saveCart');
                this.$toast.open({
                    message: "Successfully added to cart",
                    type: "success",
                    duration: 3000,
                    position:"top-right"
                });
              }else{
                this.$toast.open({
                    message: "This product is in your shopping cart",
                    type: "warning",
                    duration: 3000,
                    position:"top-right"
                })
              }
          });
      }
    },
    components:{
      breadcrumb,
      secondSwiper,
      secondSwiperSm,
      secondSwiperItem
    },
    computed:{
        ...mapGetters(["getWidth"]),
    }

}
</script>
<style lang="scss">
.position-md-sticky{
    @media (min-width:768px) {
        position: sticky !important;
        top: 110px;
    }
}
.similars{
    box-shadow: none !important;
    border: 1px solid #e0e0e2;
    overflow-x: hidden;
}
.view-product {
  position: relative;
}
.view-product{
  border: 1px solid rgb(240, 240, 240);
  height: 380px;
  width: 100%;
  .gallery-preview{
      width: 100%;
      height: 100%;
      li{
          height: 68px;
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          opacity: 0.7;
          img{
              width: 100%;
              height: 100%;
              object-fit: contain;
              object-position: center;
          }
          &:hover{
              opacity: 1;
          }
      }
  }
  .gallery-current{
    height: 100%;
    width: 100%;
    height: 380px;
    padding: 17px 0;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
  }
}
.product-information {
  overflow: hidden;
  position: relative;
  &-cart{
      width: 100%;
      height: 100%;
      border:1px solid #e0e0e2 ;
      border-radius: 8px;
  }
  &_name{
      border-bottom: solid 1px #f2f2f2;
      padding: 8px 30px;
  }
  &_input{
    border: 1px solid #dededc;
    color: #696763;
    font-size: 20px;
    height: 33px;
    outline: medium none;
    text-align: left;
    width: 70%;
  }
}
.search_box input {
  text-align: right;
  background: #f0f0e9;
  border: medium none;
  color: #b2b2b2;
  font-size: 12px;
  font-weight: 300;
  height: 35px;
  outline: medium none;
  padding-right: 10px;
  width: 155px;
  background-position: 10px;
}
.cart {
  margin-bottom: 10px;
  margin-left: 20px;
}
.current{
    opacity: 1 !important;
    border-color: #10DE89 !important;
}
.single-breadcrumb.breadcrumb{
    background-color: #fff !important;
}
.breadcrumb{
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow-x: scroll !important;
    scrollbar-color: #ccc transparent;
    scrollbar-width: thin;
    padding-bottom: 4px !important;
    &::-webkit-scrollbar{
       height: 6px;
    }
    &::-webkit-scrollbar-track{
        background-color: transparent !important;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ccc !important;
        border-radius: 8px;
    }
    @media (max-width:767px) {
        padding-top: 0 !important;
        padding-bottom: 8px !important;
    }
}
</style>