<template>
  <li class="mb-1">
    <nuxt-link
      :to="route"
      class="btn btn-toggle align-items-center rounded collapsed"
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
