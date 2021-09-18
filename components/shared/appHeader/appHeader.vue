<template>
  <header class="header sticky-top mb-4">
    <b-navbar
      toggleable="sm"
      type="light"
      variant="white"
      class="py-2 py-sm-1 px-sm-1 d-flex flex-wrap justify-content-between align-items-center"
    >
      <b-navbar-brand class="w-50 header-brand d-flex justify-content-start w-sm-auto m-0 ml-sm-2 p-0 order-1" :class="[{'mr-sm-2':$i18n.locale==='fa'},{'ml-sm-0':$i18n.locale==='fa'}]">
        <div
          to="/"
          class="d-flex justify-content-center align-items-baseline"
        >
          <div class="ml-0 mr-2 d-block d-sm-none" :class="[{'ml-2':$i18n.locale==='fa'}]" :style="{'margin-right':$i18n.locale==='fa'?'0 !important':'auto'}">
            <button v-b-toggle.sidebar-1 class="btn bg-white text-secondary px-2">
                    <div class="font-weight-bolder font-24">
                        <b-icon icon="list"></b-icon>
                    </div>
            </button>
          </div>
          <nuxt-link :to="localePath('/')" class="d-flex align-items-baseline align-self-center font-weight-bold">
            <NuxtLogo />
            &nbsp;
            <span> E-<span class="text-primary">Shop</span></span>
          </nuxt-link>
        </div>
      </b-navbar-brand>
      <b-navbar-nav class="w-50 header-other w-sm-auto flex-row justify-content-end justify-content-sm-start order-2 order-sm-3">
        <b-nav-item href="#">
          <b-button
            v-if="$i18n.locale==='en'"
            @click="$auth.loggedIn ? $auth.logout() : $auth.loginWith('auth0')"
            v-b-tooltip.hover.left="$auth.loggedIn ? $tc('header.loginTooltip',2) : $tc('header.loginTooltip',1)"
            class="auth-icon text-secondary bg-white p-0 d-flex align-items-end"
          >
            <b-icon
              :icon="$auth.loggedIn ? 'person-check' : 'person'"
              font-scale="2.25"
            ></b-icon>
          </b-button>
          <b-button
            v-else
            @click="$auth.loggedIn ? $auth.logout() : $auth.loginWith('auth0')"
            v-b-tooltip.hover.right="$auth.loggedIn ? $tc('header.loginTooltip',2) : $tc('header.loginTooltip',1)"
            class="auth-icon text-secondary bg-white p-0 d-flex align-items-end"
          >
            <b-icon
              :icon="$auth.loggedIn ? 'person-check' : 'person'"
              font-scale="2.25"
            ></b-icon>
          </b-button>
        </b-nav-item>
        <b-nav-item href="#" class="">
          <div class="shop-cart">
            <b-button
              v-b-modal.modal-center
              variant="white"
              class="shop-cart-btn text-secondary bg-white p-0 d-flex align-items-end cart-icon"
            >
              <div class="position-relative">
                <b-icon icon="cart" font-scale="2.15"></b-icon>
                <span
                  class="position-absolute cart-badge text-danger font-weight-bold"
                >
                  {{ getItems.length > 0 ? getItems.length : 0 }}
                </span>
              </div>
            </b-button>
            <div class="shop-cart-info bg-white p-3" :class="{'shop-cart-info-rtl':$i18n.locale==='fa'}">
              <div class="d-flex justify-content-between pb-1">
                <span class="text-dark">
                    {{$i18n.locale==='en' ?
                     $tc('header.cartInfo.allCount',getItems.length > 1 ? 2:1,{n:getItems.length > 0 ? getItems.length:0}):
                     $t('header.cartInfo.allCount',{count:getItems.length > 0 ? getItems.length:0})}}
                </span>
                <span v-b-modal.modal-center class="text-info">{{$t('header.cartInfo.cartBtn')}}</span>
              </div>
              <hr class="text-secondary" />
              <ul class="list-unstyled">
                <li v-for="item in getItems" :key="item.id">
                  <nuxt-link
                    :to="localePath(`/Product/${item.category}/${item.id}`)"
                    class="d-flex justify-content-between align-items-start my-1 link-dark"
                  >
                    <div class="shop-cart-info-img align-self-center">
                      <img :src="item.images[0].address" :alt="item.name" />
                    </div>
                    <div class="shop-cart-info-title">
                      <span class="mb-1" :class="{'text-right':$i18n.locale==='fa'}">
                        {{$i18n.locale==='en'? item.name:item.nameFa }}
                      </span>
                    </div>
                  </nuxt-link>
                  <div class="d-flex justify-content-between">
                    <span class="text-secondary">{{$t('header.cartInfo.selfCount',{count:item.count})}}</span>
                    <b-icon
                      icon="trash"
                      class="text-danger"
                      @click="deleteItem(item.id)"
                    ></b-icon>
                  </div>
                  <hr class="text-secondary" />
                </li>
              </ul>
              <div class="d-flex justify-content-between my-2 text-dark">
                <span>{{$t('header.cartInfo.totalName')}}</span>
                <span v-if="getItems.length > 0">{{$t('header.cartInfo.total',{total:getTotal})}}</span>
              </div>
            </div>
          </div>
        </b-nav-item>
      </b-navbar-nav>
     <div class="w-100 header-search px-1 order-3 order-sm-2">
        <b-input-group class="w-100 mx-sm-0 mt-1">
            <b-input-group-prepend v-if="$i18n.locale==='fa'" class="mr-0">
                <nuxt-link
                    :to="localeLocation({
                        name: 'Products-category-All',
                        query: { search: searchValue },
                    })"
                >
                    <b-button variant="primary"
                    ><b-icon icon="search"></b-icon
                    ></b-button>
                </nuxt-link>
            </b-input-group-prepend>
            <input
            type="text"
            class="form-control bg-light text-secondary rounded"
            :placeholder="$t('header.placeholder')"
            :value="searchValue"
            @change="changeSearchValue"
            @keyup.enter="
                $router.push(localeLocation({
                        name: 'Products-category-All',
                        query: { search: searchValue },
                    }))
            "
            />
            <b-input-group-append v-if="$i18n.locale==='en'">
                <nuxt-link
                    :to="localeLocation({
                        name: 'Products-category-All',
                        query: { search: searchValue },
                    })"
                >
                    <b-button variant="primary"
                    ><b-icon icon="search"></b-icon
                    ></b-button>
                </nuxt-link>
            </b-input-group-append>
        </b-input-group>
     </div>
    </b-navbar>
    <b-modal id="modal-center" size="xl" scrollable centered>
      <template slot="modal-header">
        <div class="w-100 d-flex justify-content-between align-items-center " :class="[{'dir-rtl':$i18n.locale==='fa'}]">
            <h5 class="modal-title">{{$t('header.cartModal.header')}}</h5>
            <button
            class="close btn align-self-start"
            :class="[{'m-0':$i18n.locale==='fa'},{'p-0':$i18n.locale==='fa'},{'align-self-center':$i18n.locale==='fa'}]"
            @click="hideModal('modal-center')"
            >
            x
            </button>
        </div>
      </template>
      <div class="container" v-if="getItems.length > 0" :class="[{'dir-rtl':$i18n.locale==='fa'}]">
        <div class="container px-3 my-5 clearfix">
          <!-- Shopping cart table -->
          <div class="table-responsive">
            <table class="table table-bordered m-0">
              <thead>
                <tr>
                  <!-- Set columns width -->
                  <th class="text-center py-3 px-4" style="min-width: 400px;">
                    {{$t('header.cartModal.tableHeader[0]')}}
                  </th>
                  <th class="text-center py-3 px-4" style="width: 100px;">
                    {{$t('header.cartModal.tableHeader[1]')}}
                  </th>
                  <th class="text-center py-3 px-4" style="width: 120px;">
                    {{$t('header.cartModal.tableHeader[2]')}}
                  </th>
                  <th class="text-center py-3 px-4" style="width: 100px;">
                    {{$t('header.cartModal.tableHeader[3]')}}
                  </th>
                  <th
                    class="text-center align-middle py-3 px-0"
                    style="width: 40px;"
                  >
                    <button class="btn p-0" title="Delete all items">
                      <b-icon
                        icon="trash"
                        class="text-danger"
                        @click="deleteAll"
                      ></b-icon>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getItems" :key="item.id">
                  <td class="p-4">
                    <nuxt-link
                      :to="localePath(`/Product/${item.category}/${item.id}`)"
                      class="d-flex align-items-center link-dark"
                    >
                      <img
                        :src="item.images[0].address"
                        class="d-block ui-w-40 ui-bordered mr-4"
                        alt=""
                      />
                      <span class="mx-auto">{{$i18n.locale==='en'?item.name:item.nameFa }}</span>
                    </nuxt-link>
                  </td>
                  <td class="text-right font-weight-semibold align-middle p-4">
                    {{ item.price }}
                  </td>
                  <td class="align-middle p-4">
                    <input
                      type="number"
                      min="1"
                      class="form-control text-center"
                      :value="item.count"
                      @change="changeCount($event, item.id)"
                    />
                  </td>
                  <td class="text-right font-weight-semibold align-middle p-4">
                    {{ item.total }}
                  </td>
                  <td class="text-center align-middle px-0">
                    <button
                      class="btn close text-danger"
                      @click="deleteItem(item.id)"
                    >
                      x
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- / Shopping cart table -->
        </div>
      </div>
      <div class="container min-height-350" v-else>
        <div class="alert alert-warning" :class="[{'text-right':$i18n.locale==='fa'}]">
          {{$t('header.cartModal.emptyCart')}}
        </div>
      </div>
      <template slot="modal-footer">
        <div class="w-100" :class="[{'dir-rtl':$i18n.locale==='fa'}]">
            <div v-if="getItems.length > 0" class="w-100 d-flex justify-content-between align-items-center">
            <div class="d-flex flex-shrink-0">
                <label class="text-muted font-weight-bold m-0 font-16 font-sm-18 font-lg-20"
                >{{$t('header.cartInfo.totalName')}}</label
                >
                <div class="font-16 font-sm-18  font-lg-20">
                : <strong> {{ getTotal }} </strong> {{$t('currency')}}
                </div>
            </div>
            <div class="d-flex">
                <button
                type="button"
                class="btn btn-light font-12 font-sm-14 font-md-16"
                @click="hideModal('modal-center')"
                >
                {{getWidth>=768?$tc('header.cartModal.footerBtn.back',1):$tc('header.cartModal.footerBtn.back',2)}}
                </button>
                <button
                type="button"
                class="btn checkout btn-primary mx-1 mx-sm-2 font-12 font-sm-14 font-md-16"
                @click="checkout()"
                >
                {{$t('header.cartModal.footerBtn.checkout')}}
                </button>
            </div>
            </div>
            <div v-else class="w-100 d-flex justify-content-end">
                <button
                type="button"
                class="btn btn-secondary font-12 font-sm-14 font-md-16"
                @click="hideModal('modal-center')"
                >
                    {{$tc('header.cartModal.footerBtn.back',2)}}
                </button>
            </div>
        </div>
      </template>
    </b-modal>
    <div class="d-none d-sm-block">
     <div class="w-100 bg-white d-flex justify-content-between align-items-center">
      <b-navbar
        type="secondary"
        variant="white"
        class="second-navbar py-0 pt-1"
      >
        <div
          class="navbar-item-all"
          @mouseenter="showMenu('allCategories')"
          @mouseleave="disappearMenu('allCategories')"
        >
          <nuxt-link :to="localePath('/Products')" class="position-relative">
            <b-button
              class="btn-white text-secondary ml-2 px-3 pr-4"
              @mouseover="showMenu('allCategories')"
            >
              <b-icon icon="list"></b-icon><span>{{$t('header.categories[0]')}}</span>
            </b-button>
          </nuxt-link>
          <div
            class="all-categories position-absolute p-0"
            ref="allCategories"
            style="display:none;"
          >
            <div class="position-relative w-100 h-100">
              <div
                class="all-categories_backdrop position-absolute"
                @mouseenter="disappearMenu('allCategories')"
              ></div>
              <div
                class="all-categories_background bg-white rounded-bottom position-absolute ml-2"
                :class="[{'ml-0':$i18n.locale==='fa'},{'mr-2':$i18n.locale==='fa'}]"
                @mouseleave="disappearMenu('allCategories')"
              >
                <ul class="btn-toggle-nav list-unstyled small d-flex">
                  <li
                    v-for="(i, key) in allCategories"
                    :key="key"
                    class="mx-2 mt-1"
                  >
                    <nuxt-link
                      :to="localePath(`${i.route}`)"
                      exact
                      exact-active-class="active-category text-primary"
                      class="rounded"
                    >
                      <span class="font-14">{{$i18n.locale==='en'? key:i.titleFa }}</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span class="text-light px-1 pb-1">|</span>
        <navbarItem
          :title="$t('header.categories[1]')"
          route="/Products/category/Discounts"
          icon="percent"
        />
        <navbarItem
          :title="$t('header.categories[2]')"
          route="/Products/category/forGamer"
          icon="controller"
          fontScale="1"
        />
        <navbarItem :title="$t('header.categories[3]')" route="/" icon="info-circle" />
      </b-navbar>
      <langSwitcher />
     </div>
    </div>
    <b-sidebar
      id="sidebar-1"
      backdrop-variant="dark"
      backdrop
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      :right="$i18n.locale==='fa'?true:false"
    >
      <template #default="{ hide }">
        <div class="h-100 d-flex flex-column">

            <div
            class="w-100 d-flex flex-column flex-shrink-0 flex-grow-1 p-2 bg-light"
            :class="[{'dir-rtl':$i18n.locale==='fa'}]"
            >
            <div
                id="sidebar-no-header-title"
                class="d-flex justify-content-between"
            >
                <nuxt-link
                :to="localePath('/')"
                class="d-flex align-items-center font-weight-bold font-20"
                >
                <div class="d-flex align-items-baseline align-self-center">
                    <NuxtLogo />
                    &nbsp;
                    <span> E-<span class="text-primary">Shop</span></span>
                </div>
                </nuxt-link>
                <b-icon
                icon="x"
                @click="hide"
                variant="secondary"
                font-scale="3.5"
                class="btn"
                ></b-icon>
            </div>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto align-items-start p-0">
                <li class="nav-item">
                <nuxt-link
                    :to="localePath('/')"
                    exact
                    exact-active-class="active"
                    class="nav-link link-dark"
                    aria-current="page"
                >
                    <b-icon icon="house-door"></b-icon>
                    <span>{{$tc('header.categoriesSm',1)}}</span>
                </nuxt-link>
                </li>
                <li>
                    <ul class="list-unstyled pl-0">
                        <collapseItem :name="$tc('header.categoriesSm',2)" :visible=true id="collapse-4" :items="allCategories" :link="true" linkRoute="/Products" />
                    </ul>
                </li>
                <li>
                    <navbarItem
                        :title="$t('header.categories[1]')"
                        route="/Products/category/Discounts"
                        icon="percent"
                        fontScale="1"
                        :activeClass="true"
                        class="navbar-item-secondary"
                    />
                </li>
                <li>
                    <navbarItem
                        :title="$t('header.categories[2]')"
                        route="/Products/category/forGamer"
                        icon="controller"
                        fontScale="1.5"
                        :activeClass="true"
                        class="navbar-item-secondary"
                    />
                </li>
                <li>
                <nuxt-link
                    :to="localePath('/')"
                    class="nav-link link-dark"
                >
                    <b-icon icon="info-circle"></b-icon>
                    <span>{{$t('header.categories[3]')}}</span>
                </nuxt-link>
                </li>
            </ul>
            </div>
          <div class="py-2 w-100 flex-shrink-0" >
              <langSwitcher class="lang-sm" />
          </div>
        </div>
      </template>
    </b-sidebar>
  </header>
</template>
<script>
import navbarItem from "@/components/shared/appHeader/navbarItem.vue";
import collapseItem from '@/components/aside/collapseItem.vue';
import langSwitcher from '@/components/langSwitcher.vue';
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  components: {
    navbarItem,
    collapseItem,
    langSwitcher
  },
  mounted() {
    var cartJSON = localStorage.getItem("shoppingCart");
    var specialLocale = localStorage.getItem("specialLocale");
    this.$store.commit("Cart/updateAfterRefresh", {cartJSON,specialLocale});
    if(cartJSON){
        this.$store.commit("Cart/changeSumTotal");
    }
  },
  watch: {
    "$route.query"() {
      if (this.$route.query.search === undefined) {
        this.$store.commit("removeSearchValue");
      }
    },
  },
  methods: {
    hideModal(id) {
      this.$bvModal.hide(id);
    },
    deleteItem(id) {
      this.$store.dispatch("Cart/deleteItem", {
        productId: id,
      });
      this.$store.commit("Cart/changeSumTotal");
      this.$store.dispatch("Cart/saveCart");
    },
    deleteAll() {
      this.$store.dispatch("Cart/deleteAll");
      this.$store.commit("Cart/changeSumTotal");
      this.$store.dispatch("Cart/saveCart");
    },
    changeCount(e, id) {
      this.$store.commit("Cart/changeCount", {
        value: e.target.value,
        id,
      });
      this.$store.commit("Cart/changeSingleTotal", id);
      this.$store.commit("Cart/changeSumTotal");
      this.$store.dispatch("Cart/saveCart");
    },
    checkout() {
      if (this.$auth.loggedIn) {
        this.$store.dispatch("Cart/deleteAll");
        this.$store.dispatch("Cart/saveCart");
        this.$toast.open({
          message: "Successfully paid",
          type: "success",
          duration: 3000,
          position: "top",
        });
      } else {
        this.$toast.open({
          message: "Please Login first",
          type: "warning",
          duration: 3000,
          position: "top",
        });
      }
    },
    changeSearchValue(e) {
      this.$store.commit("changeSearchValue", e.target.value);
    },
    disappearMenu(element) {
      this.$refs[`${element}`].style.display = "none";
    },
    showMenu(element) {
      this.$refs[`${element}`].style.display = "block";
    }
  },
  computed: {
    ...mapGetters("Cart", ["getItems"]),
    ...mapGetters("Cart", ["getTotal"]),
    ...mapGetters(["searchValue"]),
    ...mapGetters(["getWidth"]),
    count() {
      return this.$store.state.Cart.count;
    },
    allCategories() {
      return this.$store.state.categories.allCategories;
    },
  },
};
</script>
<style lang="scss" scoped>
.nuxt-logo {
  height: 25px !important;
}
.second-navbar {
  .btn {
    font-size: 14.5px !important;
  }
}
.navbar {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.header {
  z-index: 4;
  box-shadow: 0 7px 8px 0 rgb(0 0 0 / 4%);
  &-search{
      @media (min-width:576px) {
          width: 50% !important;
      }
  }
  &-brand{
      @media (min-width:576px) {
          width: auto !important;
      }
  }
  &-other{
      @media (min-width:576px) {
          width: auto !important;
      }
  }
}

.shop-cart {
  position: relative;
  &-info {
    display: none;
    position: absolute;
    right: 0;
    top: calc(100% - 3px);
    z-index: 1053;
    width: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 20%);
    &-img {
      width: 85px;
      height: 85px;
      img {
        min-width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
    &-title {
      span {
        font-size: 0.857rem !important;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  &-info-rtl{
      right: auto !important;
      left: 0 !important;
  }
  &:hover &-info {
    display: block;
  }
}
.close {
  font-size: 1.5rem;
  float: none;
}
.ui-w-40 {
  width: 80px !important;
  height: auto;
}

.ui-product-color {
  display: inline-block;
  overflow: hidden;
  margin: 0.144em;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 10rem;
  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset;
  vertical-align: middle;
}
.cart-badge {
  top: 3.5px;
  left: 0;
  right: 0;
  bottom: 0;
}
.navbar-expand-sm .navbar-nav .nav-link {
  padding-left: 4px;
  padding-right: 4px;
}
.all-categories {
  top: 40px;
  width: 100vw;
  height: calc(100vh - 136px);
  &_backdrop {
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: rgba(52, 58, 64, 0.6);
  }
  &_background {
    width: 97.5vw;
    z-index: 3;
  }
}
.navbar{
    @media (max-width:576px) {
        padding-right: 8px !important;
        padding-left: 8px !important;
    }
}
</style>
