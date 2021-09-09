<template>
    <nuxt-link :to="route">
        <b-button class="btn-white text-secondary ml-2 d-flex align-items-end">
          <b-icon
            :icon="icon"
            :font-scale="fontScale?fontScale:'0.99'"
            class="text-gray mx-1 align-self-center"
          ></b-icon>
          <span>{{title}}</span>
        </b-button>
    </nuxt-link>
</template>
<script>
export default {
    props:['route','icon','title','fontScale']
}
</script>