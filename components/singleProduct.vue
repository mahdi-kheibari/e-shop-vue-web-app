<template>
  <div class="bg-white mb-2">
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
              <breadcrumb :activeText="params" :subCrumbSingle="true" :subPath="subPath" :subCrumbName="subCrumbName" class="ms-3" />
              <div class="product-information">
                <div>
                  <h2>{{ product.name }}</h2>
                </div>
                <div>
                  <span>
                    <span>Price : {{ product.price }} toman</span>
                  </span>
                  <br /><br />
                  <span>
                    <label>Count :</label>
                    <input type="number" class="search_box" v-model="count" />
                    <button type="button" class="btn btn-danger cart">
                      Add to cart
                    </button>
                  </span>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam impedit neque magni officiis aspernatur? Omnis
                    culpa vitae quaerat modi animi praesentium quia quisquam vel
                    reiciendis nisi ipsam, distinctio rerum maiores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="similar container bg-white my-3">
        <div>
            <h3 class="font-weight-bold similar-title d-inline m-2">
            Similar Products
            </h3>   
        </div>
        <secondSwiper width="100%" height="225px" class="Brands">
          <nuxt-link
            v-for="i in similarProducts.filter(i=>i.id!==product.id)"
            :key="i.name"
            :to="'/Product/'+subCrumbName+'/'+i.id"
            class="swiper-slide flex-column mt-1 link-dark text-decoration-none"
          >
            <img :src="i.images[0].address" :alt="i.name" />
            <p class="text-right w-100 similar-name">
              {{ i.name }}
            </p>
            <span>
              {{ i.price }}
            </span>
          </nuxt-link>
        </secondSwiper>
    </section>
    <br>
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
            count: 1
        }
    },
    methods:{
      setCurrent(address){
          this.currentImg=address;
      }
    },
    components:{
      breadcrumb,
      secondSwiper
    }

}
</script>
<style lang="scss">
.similar{
    height: 285px;
    width: 100%;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    &-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &-title {
        border-bottom: #dc3545 1px solid;
    }
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
  padding-bottom: 40px;
  padding-top: 10px;
  position: relative;
}

.product-information div {
  border-bottom: solid 1px #f2f2f2;
  padding: 20px 30px 10px;
}
.product-information h2 {
  color: #363432;
  margin-top: 0;
}

.product-information p {
  color: #696763;
  margin-bottom: 5px;
}

.product-information span {
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 5px;
}

.product-information span span {
  font-size: 25px;
  margin-left: 20px;
  margin-top: 0px;
}
.product-information span input {
  border: 1px solid #dededc;
  color: #696763;
  font-size: 20px;
  height: 33px;
  outline: medium none;
  text-align: center;
  width: 50px;
}

.product-information span label {
  color: #696763;
  margin-left: 5px;
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
</style>