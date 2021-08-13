<template>
  <header>
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
    <div>
      <b-nav tabs class="bg-white">
        <b-nav-item active>Home</b-nav-item>
        <b-nav-item>All Product</b-nav-item>
        <b-nav-item>About Us</b-nav-item>
        <b-nav-item></b-nav-item>
      </b-nav>
    </div>
  </header>
</template>
<style scoped>
.nuxt-logo {
  height: 25px !important;
}
.nav-link.active{
    background-color: #f8f9fa !important;
    border-bottom-color: #f8f9fa !important;
}
</style>
