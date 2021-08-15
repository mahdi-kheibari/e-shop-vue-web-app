<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <aside class="category-aside flex-shrink-0 p-3 bg-white">
          <nuxt-link
            to="/Products"
            class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
          >
            <span class="fs-5 fw-semibold">Categories</span>
          </nuxt-link>
          <ul class="list-unstyled ps-0">
            <li class="mb-1">
              <b-button
                variant="light"
                class="btn-toggle"
                v-b-toggle.collapse-1
                @click="collapse = !collapse"
              >
                <b-icon
                  :icon="collapse ? 'chevron-down' : 'chevron-right'"
                ></b-icon>
                Products
              </b-button>
              <b-collapse visible id="collapse-1">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li v-for="(i, key) in allCategories" :key="key">
                    <nuxt-link
                      :to="i.route"
                      exact
                      exact-active-class="active-category"
                      class="link-dark rounded"
                    >
                      {{ key }}
                    </nuxt-link>
                  </li>
                </ul>
              </b-collapse>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <nuxt-link
                to="/"
                class="btn btn-toggle align-items-center rounded collapsed"
                aria-expanded="false"
              >
                Special discount
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/"
                class="btn btn-toggle align-items-center rounded collapsed"
                aria-expanded="false"
              >
                Recent bestsellers
              </nuxt-link>
            </li>
          </ul>
        </aside>
      </div>
      <div class="col-10">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapse: true,
    };
  },
  computed: {
    allCategories() {
      return this.$store.state.categories.allCategories;
    },
  },
};
</script>
<style>
.category-aside {
  width: 100%;
  min-height: 77vh;
  box-shadow: 0 12px 12px 0 hsl(0deg 0% 71% / 11%);
  border: 1px solid #dedede;
  border-radius: 8px;
}
.active-category {
    color: rgba(0, 0, 0, .85);
    background-color: #00dc82;
}
.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: .25rem .5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .65);
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, .85);
  background-color: #d2f4ea;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, .85);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover{
  background-color: #d2f4ea;
}

.fw-semibold { font-weight: 600; }
</style>
