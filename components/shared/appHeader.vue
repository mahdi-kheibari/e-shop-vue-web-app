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
            <b-button variant="outline-danger">
              Logout
            </b-button>
          </b-nav-item>
          <b-nav-item href="#">
            <b-button variant="outline-success">
              <b-icon icon="cart"></b-icon>
              cart
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar type="light" variant="secondary" class="py-0">
        <b-button v-b-toggle.sidebar-1 class="text-light ms-2">
        <b-icon icon="list"></b-icon><span>All</span>
        </b-button>
    </b-navbar>
    <b-sidebar id="sidebar-1" backdrop-variant="dark" backdrop aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div
            class="d-flex flex-column flex-shrink-0 p-3 bg-light"
            style="width: 280px;"
        >
            <div id="sidebar-no-header-title" class="d-flex justify-content-between">
                <nuxt-link
                to="/"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                <NuxtLogo />
                &nbsp;
                <span>E-Shop</span>
                </nuxt-link>
                <b-icon icon="x" @click="hide" variant="secondary" font-scale="3.5" class="btn"></b-icon>
            </div>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <nuxt-link to="/" exact exact-active-class="active" class="nav-link link-dark" aria-current="page">
                <b-icon icon="house-door"></b-icon>
                <span>Home</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/Products" exact exact-active-class="active" class="nav-link link-dark">
                <b-icon icon="box-seam"></b-icon>
                <span>All Products</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about" exact exact-active-class="active" class="nav-link link-dark">
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
<style scoped>
.nuxt-logo {
  height: 25px !important;
}
.header{
    box-shadow: 0 7px 8px 0 rgb(0 0 0 / 4%);
}
</style>
