<template>
  <div class="bg-white pb-2">
    <section class="container">
      <div class="row">
        <div class="col-12">
          <div class="product-details row">
            <div class="col-12 col-sm-5">
              <div class="view-product row">
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
            <div class="col-12 col-sm-7">
              <breadcrumb :activeText="params" :subCrumbSingle="true" :subPath="subPath" :subCrumbName="subCrumbName" class="ml-3 single-breadcrumb" />
              <div class="product-information">
                <div class="product-information_name">
                  <h2>{{ product.name }}</h2>
                </div>
                <div class="row h-100 mt-2">
                    <div class="col-7 h-100">
                        <p class="my-auto">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quibusdam impedit neque magni officiis aspernatur? Omnis
                            culpa vitae quaerat modi animi praesentium quia quisquam vel
                            reiciendis nisi ipsam, distinctio rerum maiores.
                        </p>
                    </div>
                    <div class="col-5">
                        <div class="product-information-cart bg-light p-3">
                            <div class="pb-2 d-flex justify-content-between font-18">
                                <span>Seller</span>
                                <span>Lorem...</span>
                            </div>
                            <hr class="m-0">
                            <div class="py-2 d-flex justify-content-between">
                                <label class="font-18">Count :</label>
                                <input type="number" min="1" class="search_box rounded" v-model="count"/>
                            </div>
                            <hr class="m-0">
                            <div class="py-2">
                                <div v-if="product.special">
                                    <div class="text-left">
                                        <span class="font-18 badge text-white rounded-pill bg-danger m-0">
                                            {{product.discount}}
                                        </span>
                                        <span
                                            class="font-16 text-muted text-decoration-line-through text-secondary m-0"
                                            >{{product.realPrice}}</span
                                        >
                                    </div>
                                </div>
                                <div class="text-left font-20 font-weight-bold"><span class="font-weight-normal">Price : </span>{{ product.price }} <span class="font-16 font-weight-normal">toman</span></div>
                            </div>
                            <button type="button" class="btn btn-block btn-primary font-weight-bold" @click="addToCart">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="similars container bg-white mt-section">
        <div class="similars-header d-flex justify-content-between align-items-baseline">
            <h2 class="similars-title d-inline py-2 font-20">
                Similar Products
            </h2>
        </div>
        <secondSwiper width="100%" height="330px">
          <nuxt-link
            v-for="i in similarProducts.filter(i=>i.id!==product.id)"
            :key="i.name"
            :to="'/Product/'+subCrumbName+'/'+i.id"
            class="swiper-slide flex-column pt-1 pb-3 px-3 similar"
          >
            <div class="similar-img mx-auto">
                <img :src="i.images[0].address" :alt="i.name" />
            </div>
            <div class="similar-caption my-auto text-center d-flex flex-column align-items-center justify-content-between">
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
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb.vue";
import secondSwiper from "../components/swiper/secondSwiper.vue";
export default {
    props:{product:Object,similarProducts:Array,params:String,subCrumbName:String,subPath:String},
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
      secondSwiper
    }

}
</script>
<style lang="scss">
.similars{
    box-shadow: none !important;
    border: 1px solid #e0e0e2;
}
.product-details {
  margin-bottom: 40px;
  overflow: hidden;
  margin-top: 10px;
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
}
.product-information input {
  border: 1px solid #dededc;
  color: #696763;
  font-size: 20px;
  height: 33px;
  outline: medium none;
  text-align: left;
  width: 70%;
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
</style>