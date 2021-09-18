<template>
  <div class="row">
    <section class="col-12 col-xl-10">
      <div class="w-100 d-flex justify-content-between align-items-center">
        <breadcrumb :activeText="$t('indexPage.brands')" />
        <div class="d-xl-none mr-1 flex-shrink-0">
          <button v-b-toggle.sidebar-2 class="btn btn-white px-2 mb-1 mb-md-0">
            <div class="d-flex align-items-center font-12 font-sm-14">
                <b-icon icon="list" class="px-1" font-scale="2"></b-icon>
                <span>{{$t('advancedSearch')}}</span>
            </div>
          </button>
          <b-sidebar
            id="sidebar-2"
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
                  <li class="nav-item pl-3" v-for="i,index in allBrands" :key="i">
                      <input
                        type="checkbox"
                        :value="i"
                        v-model="checkedBrands"
                        @change="filteredCategory();hide();"
                      />
                      <label class="form-label">{{$t(`categoryAside.specialBrands[${index}]`)}}</label>
                  </li>
                </ul>
              </div>
            </template>
          </b-sidebar>
        </div>
      </div>
      <div
        class="brand-swiper mb-section py-2 bg-white"
        v-for="(item, key) in changeBrands ? specialBrands : brands"
        :key="key"
      >
        <div
          class="d-flex justify-content-center align-items-center mb-2"
          :ref="key"
          :id="key"
        >
          <div class="brand-swiper_logo">
            <img
              :src="'/images/brand-slider/' + key + '.jpg'"
              :alt="key"
              class="rounded"
            />
          </div>
          <h4 class="m-0">{{ key }}</h4>
        </div>
        <productList :items="item" class="brand-swiper_product" />
      </div>
    </section>
    <section class="col-xl-2 d-none d-xl-block">
      <asideLayout :class="[{'text-right':$i18n.locale==='fa'}]">
        <div slot="beforeDivider">
          <div v-for="i,index in allBrands" :key="i">
            <input
              type="checkbox"
              :value="i"
              v-model="checkedBrands"
              @change="filteredCategory()"
            />
            <label class="form-label">{{$t(`categoryAside.specialBrands[${index}]`)}}</label>
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
      changeBrands: false,
      checkedBrands: [],
    };
  },
  methods: {
    filteredCategory() {
      const brands = this.brands;
      const checkedBrands = this.checkedBrands;
      if (checkedBrands.length === 0) {
        this.changeBrands = false;
      } else {
        this.specialBrands = {};
        for (let Brand of checkedBrands) {
          this.specialBrands[Brand] = brands[Brand];
        }
        this.changeBrands = true;
      }
    },
  },
  components: {
    breadcrumb,
    productList,
  },
  asyncData({ store }) {
    const allBrands = store.state.categories.specialBrands;
    const allProducts = {
      Digital: store.state.Digital.Products,
      Fashion: store.state.Fashion.Products,
      Beauty: store.state.Beauty.Products,
      House: store.state.House.Products,
    };
    const brands = {};
    for (let i of allBrands) {
      brands[i] = {};
      function filteredProduct(Products) {
        for (let key in Products) {
          const filtered = Products[key].filter((item) => item.brand === i);
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
      specialBrands: {},
    };
  },
  scrollToTop: true,
};
</script>
<style lang="scss" scoped>
.brand-swiper {
  width: 100%;
  height: 490px;
  position: relative;
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  overflow-y: scroll;
  /* Firefox */
  scrollbar-color: rgba(204, 204, 204, 0.705) transparent;
  scrollbar-width: 10px;
  scrollbar-arrow-color: transparent;
  // chrome
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: rgba(204, 204, 204, 0.705);
  }
  &::-webkit-scrollbar-button {
    visibility: hidden;
  }
  &_logo {
    width: 70px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  &_product {
    margin-left: 10px;
  }
}
</style>
