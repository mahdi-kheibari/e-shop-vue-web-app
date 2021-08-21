<template>
  <div class="row">
    <section class="col-12 col-sm-10">
      <breadcrumb activeText="Special brands" />
      <div class="brand-swiper mb-3 py-1 bg-white" v-for="(item,key) in (changeBrands) ? specialBrands:brands" :key="key">
            <div class="d-flex justify-content-center align-items-baseline mb-2" :id="key">
                <div class="brand-swiper_logo mt-2 mx-1">
                    <img :src="'/images/brand-slider/'+key+'.jpg'" :alt="key" class="rounded">
                </div>
                <h4>{{key}}</h4>
            </div>
            <productList :items="item" />
      </div>
    </section>
    <section class="col-sm-2">
      <asideLayout>
        <div slot="beforeDivider">
          <div v-for="i in allBrands" :key="i">
            <input
              type="checkbox"
              :value="i"
              v-model="checkedBrands"
              @change="filteredCategory()"
            />
            <label class="form-label">{{ i }}</label>
          </div>
        </div>
      </asideLayout>
    </section>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productList.vue";
export default {
  data() {
    return {
      changeBrands:false,
      checkedBrands:[]
    };
  },
  methods:{
      filteredCategory(){
          const brands=this.brands
          const checkedBrands=this.checkedBrands
          if (checkedBrands.length === 0 ) {
              this.changeBrands=false
          }else{
              this.specialBrands={}
              for (let Brand of checkedBrands) {
                    this.specialBrands[Brand]=brands[Brand];
              }
              this.changeBrands=true
          }
      }
  },
  components: {
    breadcrumb,
    productList
  },
  asyncData({ store }) {
    const allBrands=store.state.categories.specialBrands;
    const allProducts={
          Digital:store.state.Digital.Products,
          Fashion:store.state.Fashion.Products,
          Beauty:store.state.Beauty.Products,
          House:store.state.House.Products
    };
    const brands = {};
    for (let i of allBrands) {
        brands[i]={}
        function filteredProduct(Products) {
            for (let key in Products) {
                const filtered=Products[key].filter((item)=>
                item.brand===i
                );
                brands[i][key] = filtered;
            }
        }
        for (let key in allProducts) {
            filteredProduct(allProducts[key]);
        }
    }
    return {
      brands,
      allBrands,
      specialBrands:{}
    };
  },
  scrollToTop: true
//   fetch({query}){
//       this.checkedBrands=[query.brand];
//       console.log(this.checkedBrands);
//   }
};
</script>
<style lang="scss" scoped>
.brand-swiper{
    width: 100%;
    height: 490px;
    position: relative;
    border-radius: 16px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-track{
        background: transparent;
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 50px;
        background: rgba(204, 204, 204, 0.705);
    }
    &::-webkit-scrollbar-button{
        visibility: hidden;
    }
    &_logo{
        width: 70px;
        height: 40px;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
}
</style>
