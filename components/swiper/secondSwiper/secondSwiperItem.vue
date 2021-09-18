<template>
  <div :class="['d-flex', 'flex-column', 'pt-1', 'pb-3', 'px-3']">
    <div
      :class="[
        { 'bestSeller-img': getWidth >= 992 },
        'mx-auto',
        { 'second-card-img-small': getWidth < 992 },
      ]"
    >
      <img :src="i.images[0].address" :alt="i.name" />
    </div>
    <div
      class="bestSeller-caption my-auto text-center d-flex flex-column align-items-center justify-content-between"
    >
      <p
        :class="[
          { caption_nameTwoLine: !i.special },
          { caption_nameOneLine: i.special },
          'text-left',
          'mx-2',
          'mb-0',
          'font-14',
          {'text-right':$i18n.locale==='fa'}
        ]"
      >
        {{$i18n.locale==="en"?i.name:i.nameFa }}
      </p>
      <div v-if="i.special" class="mt-3 d-flex" :class="[{'justify-content-end':$i18n.locale==='fa'},{'flex-row-reverse':$i18n.locale==='fa'}]">
        <span class="font-14 badge text-white rounded-pill bg-danger" :class="[{'mr-1':$i18n.locale==='fa'}]">
          {{ i.discount }}
        </span>
        <span
          class="font-14 text-muted text-decoration-line-through text-secondary"
          >{{ i.realPrice }}</span
        >
      </div>
      <div class="font-16 font-weight-bold">
        {{ i.price }} <span class="font-14 font-weight-normal">{{$t('currency')}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    props:{'i':Object},
    computed:{
      ...mapGetters(["getWidth"]),
    }
}
</script>
