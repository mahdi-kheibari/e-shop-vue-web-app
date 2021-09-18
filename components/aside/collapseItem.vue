<template>
  <li class="mb-1">
    <nuxt-link v-if="link" :to="localePath(`${linkRoute}`)" exact>
        <b-button
        variant="white"
        class="btn-toggle text-secondary"
        :v-b-toggle="id"
        @click="collapse = !collapse"
        >
        <b-icon :icon="collapse ? 'chevron-down' : 'chevron-right'" :class="[{'collapse-icon-rtl':$i18n.locale==='fa'}]"></b-icon>
            {{name}}
        </b-button>
    </nuxt-link>
    <b-button
        v-else
        variant="white"
        class="btn-toggle text-secondary"
        :v-b-toggle="id"
        @click="collapse = !collapse"
        >
        <b-icon :icon="collapse ? 'chevron-down' : 'chevron-right'" :class="[{'collapse-icon-rtl':$i18n.locale==='fa'}]"></b-icon>
            {{name}}
    </b-button>
    <b-collapse :visible="collapse" :id="id">
      <ul class="btn-toggle-nav list-unstyled pb-1 font-14" :class="[{'text-right':$i18n.locale==='fa'}]">
        <li v-for="(i, key) in items" :key="key">
          <nuxt-link
            :to="localePath(`${i.route}`)"
            exact
            exact-active-class="active-category text-primary"
            class="link-dark rounded"
          >
            {{$i18n.locale==='en'? key:i.titleFa }}
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
  props:{name:String,visible:Boolean,id:String,items:Object,link:Boolean,linkRoute:String}
};
</script>
<style lang="scss">
.bi-chevron-right.collapse-icon-rtl{
    transform:rotate(180deg);
}
</style>
