<template>
  <li class="mb-1">
    <b-button
      variant="white"
      class="btn-toggle text-secondary"
      :v-b-toggle="id"
      @click="collapse = !collapse"
    >
      <b-icon :icon="collapse ? 'chevron-down' : 'chevron-right'"></b-icon>
      {{name}}
    </b-button>
    <b-collapse :visible="collapse" :id="id">
      <ul class="btn-toggle-nav list-unstyled pb-1 small">
        <li v-for="(i, key) in items" :key="key">
          <nuxt-link
            :to="i.route"
            exact
            exact-active-class="active-category text-primary"
            class="link-dark rounded"
          >
            {{ key }}
          </nuxt-link>
        </li>
      </ul>
    </b-collapse>
  </li>
</template>
<script>
export default {
  data() {
    return {
      collapse: this.visible,
    };
  },
  props:{name:String,visible:Boolean,id:String,items:Object}
};
</script>
