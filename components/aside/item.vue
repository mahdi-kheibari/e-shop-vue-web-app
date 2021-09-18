<template>
  <li class="mb-1">
    <nuxt-link
      :to="localePath(`${route}`)"
      class="btn btn-toggle align-items-center rounded"
      exact
      exact-active-class="active-category text-primary"
    >
      {{ name }}
    </nuxt-link>
  </li>
</template>
<script>
export default {
  props: {name:String, route:String},
};
</script>
