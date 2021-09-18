<template>
    <div @click="showLocales=!showLocales" ref="switcherLangRef" class="btn btn-light lang-switch position-relative text-secondary d-flex align-items-center py-1 px-3 " :class="[{'ml-3':$i18n.locale==='fa'},{'mr-3':$i18n.locale==='en'},{'flex-row-reverse':$i18n.locale==='fa'}]">
          <b-icon icon="globe2" font-scale="1.2" class="mr-1"></b-icon>
        <div>
            {{$i18n.locales.find(i=>i.code===$i18n.locale).name}}
        </div>
        <div v-show="showLocales" 
        v-closable="{exclude: ['switcherLangRef'],handler: 'onClose'}" 
        class="position-absolute w-100 other-locale" 
        >
            <ul class="list-unstyled d-flex flex-column bg-light">
                <li v-for="locale in $i18n.locales" :key="locale.name" class="w-100 p-1 text-left" 
                :class="{'other-locale_active':locale.code===$i18n.locale}"
                >
                    <nuxt-link :to="switchLocalePath(locale.code)" class="d-block">
                    {{locale.name}}
                    </nuxt-link>
                </li>
            </ul>
        </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
        showLocales:false
    };
  },
  methods:{
    onClose () {
        this.showLocales = false
    }
  },
  watch:{
      '$i18n.locale'(){
          localStorage.setItem("specialLocale", this.$i18n.locale);
      }
  }
}
</script>