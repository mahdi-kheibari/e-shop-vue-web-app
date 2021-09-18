<template>
  <div class="row">
    <section class="col-12 col-xl-10">
      <div class="w-100 d-flex justify-content-between align-items-center">
        <breadcrumb :activeText="$t('indexPage.discounts')" />
        <div class="d-xl-none mr-1 flex-shrink-0">
          <button v-b-toggle.sidebar-3 class="btn btn-white px-2 mb-1 mb-md-0">
            <div class="d-flex align-items-center font-12 font-sm-14">
                <b-icon icon="list" class="px-1" font-scale="2"></b-icon>
                <span>{{$t('advancedSearch')}}</span>
            </div>
          </button>
          <b-sidebar
            id="sidebar-3"
            backdrop-variant="dark"
            backdrop
            aria-labelledby="sidebar-no-header-title"
            no-header
            shadow
            :right="$i18n.locale==='fa'?true:false"
          >
            <template #default="{ hide }">
              <div class="w-100 d-flex flex-column flex-shrink-0 p-2 bg-light" :class="[{'dir-rtl':$i18n.locale==='fa'}]">
                <div
                  id="sidebar-no-header-title"
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="font-weight-bold font-20">
                    {{$t('categoryAside.header')}}
                  </div>
                  <b-icon
                    icon="x"
                    @click="hide"
                    variant="secondary"
                    font-scale="3.5"
                    class="btn"
                  ></b-icon>
                </div>
                <hr />
                <ul class="nav nav-pills flex-column mb-auto align-items-start p-0" :class="[{'pr-2':$i18n.locale==='fa'}]">
                  <li class="nav-item pl-3" v-for="i,index in allCategories" :key="i">
                      <input
                        type="checkbox"
                        :value="i"
                        v-model="checkedCategory"
                        @change="filtredCategory();hide();"
                      />
                      <label class="form-label">{{$t(`header.subCategories[${index}]`)}}</label>
                  </li>
                </ul>
              </div>
            </template>
          </b-sidebar>
        </div>
      </div>
      <productList :items="changeProducts ? discountProducts:Products" />
    </section>
    <section class="col-xl-2 d-none d-xl-block">
      <asideLayout :class="[{'text-right':$i18n.locale==='fa'}]">
        <div slot="beforeDivider">
          <div v-for="i,index in allCategories" :key="i">
            <input
              type="checkbox"
              :id="i"
              :value="i"
              v-model="checkedCategory"
              @change="filtredCategory()"
            />
            <label :for="i" class="form-label">{{$t(`header.subCategories[${index}]`)}}</label>
          </div>
        </div>
      </asideLayout>
    </section>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productList/productList.vue";
export default {
  data() {
    return {
      changeProducts:false,
      checkedCategory: [],
    };
  },
  computed: {
    allCategories() {
      return this.$store.state.allCategories;
    },
  },
  methods:{
      filtredCategory(){
          const Products=this.Products
          const filtredCategory=this.checkedCategory
          const filteredProducts={}
          if (filtredCategory.length === 0 ) {
              this.changeProducts=false
          }else{
              for (let category of filtredCategory) {
                  for (let i in Products) {
                      if (Products[i].some((item)=>item.category===category)) {
                          filteredProducts[i]=Products[i].filter((item)=>item.category===category)
                      }
                  }
              }
              this.discountProducts=filteredProducts;
              this.changeProducts=true
          }
      }
  },
  components: {
    breadcrumb,
    productList,
  },
  asyncData({ store }) {
    const products = {};
    function filteredProduct(product,category) {
        const Products = product;
        for (let key in Products) {
            const filtered=Products[key].filter((item)=>
            item.special===true
            ).map((item)=>{
                return {
                    ...item,
                    category:category
                }
            });
            products[key] = filtered;
        } 
    }
    const allProducts={
        Digital:store.state.Digital.Products,
        Fashion:store.state.Fashion.Products,
        Beauty:store.state.Beauty.Products,
        House:store.state.House.Products
    };
    for (let key in allProducts) {
        filteredProduct(allProducts[key],key);
    }
    return {
      Products: products,
      discountProducts:{}
    };
  },
};
</script>
