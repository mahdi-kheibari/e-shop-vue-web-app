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
        ]"
      >
        {{ i.name }}
      </p>
      <div v-if="i.special" class="mt-3">
        <span class="font-14 badge text-white rounded-pill bg-danger">
          {{ i.discount }}
        </span>
        <span
          class="font-14 text-muted text-decoration-line-through text-secondary"
          >{{ i.realPrice }}</span
        >
      </div>
      <div class="font-16 font-weight-bold">
        {{ i.price }} <span class="font-14 font-weight-normal">toman</span>
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
