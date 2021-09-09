<template>
  <header class="header sticky-top mb-4">
    <b-navbar toggleable="md" type="light" variant="white" class="py-0">
      <b-navbar-brand class="ml-4">
        <nuxt-link to="/" class="d-flex justify-content-center link-dark">
          <NuxtLogo />
          &nbsp;
          <span> E-Shop</span>
        </nuxt-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-input-group class="w-50 mx-lg-auto mt-1 mt-lg-0">
          <input
            type="text"
            class="form-control bg-light text-secondary"
            placeholder="Search"
            :value="searchValue"
            @change="changeSearchValue"
            @keyup.enter="
              $router.push({
                name: 'Products-category-All',
                query: { search: searchValue },
              })
            "
          />
          <b-input-group-append>
            <nuxt-link
              :to="{
                name: 'Products-category-All',
                query: { search: searchValue },
              }"
            >
              <b-button variant="primary"
                ><b-icon icon="search"></b-icon
              ></b-button>
            </nuxt-link>
          </b-input-group-append>
        </b-input-group>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <b-button
              @click="
                $auth.loggedIn ? $auth.logout() : $auth.loginWith('auth0')
              "
              v-b-tooltip.hover.left="$auth.loggedIn ? 'Logout' : 'Login'"
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
              <div class="shop-cart-info bg-white p-3">
                <div class="d-flex justify-content-between pb-1">
                  <span class="text-dark">0 Product</span>
                  <span v-b-modal.modal-center class="text-info"
                    >View cart</span
                  >
                </div>
                <hr class="text-secondary" />
                <ul class="list-unstyled">
                  <li v-for="item in getItems" :key="item.id">
                    <nuxt-link
                      :to="'/Product/' + item.category + '/' + item.id"
                      class="d-flex justify-content-between align-items-start my-1 link-dark"
                    >
                      <div class="shop-cart-info-img h-100 align-self-center">
                        <img :src="item.images[0].address" :alt="item.name" />
                      </div>
                      <div class="shop-cart-info-title">
                        <span class="mb-1">
                          {{ item.name }}
                        </span>
                      </div>
                    </nuxt-link>
                    <div class="d-flex justify-content-between">
                      <span class="text-secondary"
                        >count : {{ item.count }}</span
                      >
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
                  <span>Total</span>
                  <span v-if="getItems.length > 0">{{ getTotal }} toman</span>
                </div>
              </div>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal id="modal-center" size="xl" scrollable centered>
      <template slot="modal-header">
        <h5 class="modal-title">Shop Cart</h5>
        <button
          class="close btn align-self-start"
          @click="hideModal('modal-center')"
        >
          x
        </button>
      </template>
      <div class="container" v-if="getItems.length > 0">
        <div class="container px-3 my-5 clearfix">
          <!-- Shopping cart table -->
          <div class="table-responsive">
            <table class="table table-bordered m-0">
              <thead>
                <tr>
                  <!-- Set columns width -->
                  <th class="text-center py-3 px-4" style="min-width: 400px;">
                    Product Name &amp; Details
                  </th>
                  <th class="text-right py-3 px-4" style="width: 100px;">
                    Price
                  </th>
                  <th class="text-center py-3 px-4" style="width: 120px;">
                    Quantity
                  </th>
                  <th class="text-right py-3 px-4" style="width: 100px;">
                    Total
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
                      :to="'/Product/' + item.category + '/' + item.id"
                      class="d-flex align-items-center link-dark"
                    >
                      <img
                        :src="item.images[0].address"
                        class="d-block ui-w-40 ui-bordered mr-4"
                        alt=""
                      />
                      <span class="mx-auto">{{ item.name }}</span>
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
        <div class="alert alert-warning">
          Your cart is empty
        </div>
      </div>
      <template v-if="getItems.length > 0" slot="modal-footer">
        <div class="w-100 d-flex justify-content-between align-items-center">
          <div class="d-flex">
            <label class="close text-muted font-weight-normal m-0"
              >Total price</label
            >
            <div class="close">
              : <strong> {{ getTotal }} </strong> toman
            </div>
          </div>
          <div class="d-flex">
            <button
              type="button"
              class="btn btn-secondary"
              @click="hideModal('modal-center')"
            >
              Back to shopping
            </button>
            <button
              type="button"
              class="btn btn-primary ml-2"
              @click="checkout()"
            >
              Checkout
            </button>
          </div>
        </div>
      </template>
    </b-modal>
    <b-navbar type="secondary" variant="white" class="second-navbar py-0 pt-1">
      <!-- <b-button v-b-toggle.sidebar-1 class="btn-white text-secondary ml-2"> -->
      <div
        class="navbar-item-all"
        @mouseenter="showMenu('allCategories')"
        @mouseleave="disappearMenu('allCategories')"
      >
        <nuxt-link to="/Products" class="position-relative">
          <b-button
            class="btn-white text-secondary ml-2 px-3 pr-4"
            @mouseover="showMenu('allCategories')"
          >
            <b-icon icon="list"></b-icon><span>Categories</span>
          </b-button>
        </nuxt-link>
        <div
          class="all-categories position-absolute p-0"
          ref="allCategories"
          style="display:none;"
        >
          <div class="position-relative w-100 h-100">
            <div class="all-categories_backdrop position-absolute" @mouseenter="disappearMenu('allCategories')"></div>
            <div
              class="all-categories_background bg-white rounded-bottom position-absolute ml-2"
              @mouseleave="disappearMenu('allCategories')"
            >
              <ul class="btn-toggle-nav list-unstyled small d-flex">
                <li v-for="(i, key) in allCategories" :key="key" class="mx-2 mt-1">
                  <nuxt-link
                    :to="i.route"
                    exact
                    exact-active-class="active-category text-primary"
                    class="rounded"
                  >
                    <span class="font-14">{{ key }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span class="text-light px-1 pb-1">|</span>
      <navbarItem title="Discounts" route="/Products/category/Discounts" icon="percent" />
      <navbarItem title="Games" route="/Products/category/forGamer" icon="controller" fontScale="1" />
      <navbarItem title="About Us" route="/" icon="info-circle" />
    </b-navbar>
    <!-- <b-sidebar
      id="sidebar-1"
      backdrop-variant="dark"
      backdrop
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
    >
      <template #default="{ hide }">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 bg-light"
          style="width: 280px;"
        >
          <div
            id="sidebar-no-header-title"
            class="d-flex justify-content-between"
          >
            <nuxt-link
              to="/"
              class="d-flex align-items-center mb-3 mb-md-0 mr-md-auto link-dark"
            >
              <NuxtLogo />
              &nbsp;
              <span>E-Shop</span>
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
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <nuxt-link
                to="/"
                exact
                exact-active-class="active"
                class="nav-link link-dark"
                aria-current="page"
              >
                <b-icon icon="house-door"></b-icon>
                <span>Home</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/Products"
                exact
                exact-active-class="active"
                class="nav-link link-dark"
              >
                <b-icon icon="box-seam"></b-icon>
                <span>All Products</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/"
                class="nav-link link-dark"
              >
                <b-icon icon="info-circle"></b-icon>
                <span>About Us</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </template>
    </b-sidebar> -->
  </header>
</template>
<script>
import navbarItem from "@/components/shared/appHeader/navbarItem.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  components:{
      navbarItem
  },
  mounted() {
    var cartJSON = localStorage.getItem("shoppingCart");
    this.$store.commit("Cart/updateAfterRefresh", cartJSON);
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
    },
  },
  computed: {
    ...mapGetters("Cart", ["getItems"]),
    ...mapGetters("Cart", ["getTotal"]),
    ...mapGetters(["searchValue"]),
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
        max-width: 100%;
        max-height: 100%;
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
  &:hover &-info {
    display: block;
  }
}
.close {
  font-size: 1.5rem;
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
.navbar-expand-md .navbar-nav .nav-link {
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
</style>
