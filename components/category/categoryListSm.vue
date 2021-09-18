<template>
    <div v-if="getWidth<768" class="category-sm fixed-bottom d-flex justify-content-around w-100 bg-white py-2 py-sm-0">
      <nuxt-link
        v-for="(i, key) in products"
        :key="key"
        :to="localePath(`${subRoute?subRoute + key:i.route}`)"
        exact-active-class="active"
        exact
        class="category-sm-item d-flex justify-content-center align-items-center p-1 p-sm-3 font-16 font-sm-18 "
      >
        <div class="category-sm-item_cover px-1 font-weight-bold font-16 font-sm-18">
          <b-icon v-if="i.icon" :icon="i.icon"></b-icon>
          <span v-else :class="['icon',i.iconClass]"></span>
        </div>
        <div class="font-weight-bold">
          {{$i18n.locale==="en"? key:i.titleFa }}
        </div>
      </nuxt-link>
      <template v-if="products2">
        <nuxt-link
          v-for="(i, key) in products2"
          :key="key"
          :to="localePath(`${subRoute2 + key}`)"
          class="category-sm-item d-flex justify-content-center align-items-center p-1 p-sm-3 font-16 font-sm-18"
        >
          <div class="category-sm-item_cover font-16 font-sm-18 px-1 font-weight-bold">
            <b-icon v-if="i.icon" :icon="i.icon"></b-icon>
            <span v-else :class="['icon',i.iconClass]"></span>
          </div>
          <div class="font-weight-bold">
            {{ $i18n.locale==="en"? key:i.titleFa }}
          </div>
        </nuxt-link>
      </template>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  props: {products:Object,products2:Object,subRoute:String,subRoute2:String},
  computed:{
      ...mapGetters(['getWidth']),
  }
};
</script>

