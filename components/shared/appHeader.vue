<template>
  <header class="header mb-2">
    <b-navbar toggleable="md" type="light" variant="white" class="py-0">
      <b-navbar-brand href="#" class="ms-4">
        <div class="d-flex justify-content-center">
          <NuxtLogo />
          &nbsp;
          <span> E-Shop</span>
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-input-group class="w-50 mx-lg-auto mt-1 mt-lg-0">
          <b-form-input placeholder="Search"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success"
              ><b-icon icon="search"></b-icon
            ></b-button>
          </b-input-group-append>
        </b-input-group>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto">
          <b-nav-item href="#">
            <b-button v-if="$auth.loggedIn" @click="$auth.logout()" variant="outline-danger">
              Logout
            </b-button>
            <b-button v-else @click="$auth.loginWith('auth0')" variant="outline-danger">
              Login
            </b-button>
          </b-nav-item>
          <b-nav-item href="#">
            <div class="shop-cart">
              <b-button
                v-b-modal.modal-center
                variant="outline-success"
                class="shop-cart-btn"
              >
                <b-icon icon="cart"></b-icon>
                <span>cart</span>
                <span v-if="getItems.length>0" class="badge rounded-pill bg-danger">
                  {{getItems.length}}
                </span>
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
                      :to="'/Product/'+item.category+'/'+item.id"
                      class="d-flex justify-content-between align-items-start my-1 link-dark text-decoration-none"
                    >
                      <div class="shop-cart-info-img h-100 align-self-center">
                        <img
                          :src="item.images[0].address"
                          :alt="item.name"
                        />
                      </div>
                      <div class="shop-cart-info-title">
                        <span class="mb-1">
                            {{item.name}}
                          </span>
                      </div>
                    </nuxt-link>
                    <div class="d-flex justify-content-between">
                        <span class="text-secondary">count : {{ item.count}}</span>
                        <b-icon icon="trash" class="text-danger" @click="deleteItem(item.id)"></b-icon>
                    </div>
                    <hr class="text-secondary" />
                  </li>
                </ul>
                <div class="d-flex justify-content-between my-2 text-dark">
                  <span>Total</span>
                  <span v-if="getItems.length>0">{{getTotal}} toman</span>
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
                    <th class="text-center py-3 px-4" style="min-width: 400px;">Product Name &amp; Details</th>
                    <th class="text-right py-3 px-4" style="width: 100px;">Price</th>
                    <th class="text-center py-3 px-4" style="width: 120px;">Quantity</th>
                    <th class="text-right py-3 px-4" style="width: 100px;">Total</th>
                    <th class="text-center align-middle py-3 px-0" style="width: 40px;">
                        <button class="btn p-0" title="Delete all items">
                            <b-icon icon="trash" class="text-danger" @click="deleteAll"></b-icon>
                        </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in getItems" :key="item.id">
                    <td class="p-4">
                      <nuxt-link :to="'/Product/'+item.category+'/'+item.id" class="d-flex align-items-center link-dark text-decoration-none">
                        <img :src="item.images[0].address" class="d-block ui-w-40 ui-bordered mr-4" alt="">
                        <span class="mx-auto">{{item.name}}</span>
                      </nuxt-link>
                    </td>
                    <td class="text-right font-weight-semibold align-middle p-4">{{item.price}}</td>
                    <td class="align-middle p-4"><input type="number" min="1" class="form-control text-center" :value="item.count" @change="changeCount($event,item.id)"></td>
                    <td class="text-right font-weight-semibold align-middle p-4">{{item.total}}</td>
                    <td class="text-center align-middle px-0"><button class="btn close text-danger" @click="deleteItem(item.id)">x</button></td>
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
                <label class="close text-muted font-weight-normal m-0">Total price</label>
                <div class="close"> : <strong> {{getTotal}} </strong> toman</div>
            </div>
            <div class="d-flex">
                <button type="button" class="btn btn-secondary" @click="hideModal('modal-center')">Back to shopping</button>
                <button type="button" class="btn btn-primary ms-2" @click="checkout()">Checkout</button>
            </div>
        </div>
      </template>
    </b-modal>
    <b-navbar type="light" variant="secondary" class="py-0">
      <b-button v-b-toggle.sidebar-1 class="text-light ms-2">
        <b-icon icon="list"></b-icon><span>All</span>
      </b-button>
    </b-navbar>
    <b-sidebar
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
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
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
                to="/about"
                exact
                exact-active-class="active"
                class="nav-link link-dark"
              >
                <b-icon icon="info-circle"></b-icon>
                <span>About Us</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </template>
    </b-sidebar>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
        return {
        }
  },
  mounted() {
      var cartJSON = localStorage.getItem("shoppingCart");
      this.$store.commit('Cart/updateAfterRefresh',cartJSON);
  },
  methods: {
    hideModal(id) {
      this.$bvModal.hide(id);
    },
    deleteItem(id){
        this.$store.dispatch('Cart/deleteItem',{
              productId:id,
        });
        this.$store.commit('Cart/changeSumTotal');
        this.$store.dispatch('Cart/saveCart');
    },
    deleteAll(){
        this.$store.dispatch('Cart/deleteAll');
        this.$store.commit('Cart/changeSumTotal');
        this.$store.dispatch('Cart/saveCart');
    },
    changeCount(e,id){
          this.$store.commit('Cart/changeCount',{
              value:e.target.value,
              id
              });
          this.$store.commit('Cart/changeSingleTotal',id);
          this.$store.commit('Cart/changeSumTotal');
          this.$store.dispatch('Cart/saveCart');
    },
    checkout(){
        if(this.$auth.loggedIn){
            this.$store.dispatch('Cart/deleteAll');
            this.$store.dispatch('Cart/saveCart');
            this.$toast.open({
                message: "Successfully paid",
                type: "success",
                duration: 3000,
                position:"top"
            })
        }else{
            this.$toast.open({
                message: "Please Login first",
                type: "warning",
                duration: 3000,
                position:"top"
            })
        }
    }
  },
  computed:{
      ...mapGetters("Cart",["getItems"]),
      ...mapGetters("Cart",["getTotal"]),
      count(){
            return this.$store.state.Cart.count;
      }
  }
};
</script>
<style lang="scss" scoped>
.nuxt-logo {
  height: 25px !important;
}
.header {
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
    margin: .144em;
    width: .875rem;
    height: .875rem;
    border-radius: 10rem;
    -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
    vertical-align: middle;
}
</style>
