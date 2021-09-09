<template>
    <div
      class="position-relative h-100 d-flex flex-column justify-content-between"
    >
      <div
        v-if="item.special"
        class="products-list_item_special text-danger text-center mx-2"
      >
        special sale
      </div>
      <div v-else class="no-special"></div>
      <nuxt-link
        :to="'/Product/' + subPath + '/' + item.id"
        class="products-list_item_img"
      >
        <img :src="item.images[0].address" :alt="item.name" />
      </nuxt-link>
      <div class="d-flex flex-column mx-3">
        <div
          class="products-list_item_caption my-3 text-center d-flex flex-column align-items-center justify-content-between"
        >
          <nuxt-link
            :to="'/Product/' + subPath + '/' + item.id"
            :class="[
              { caption_nameTwoLine: !item.special },
              { caption_nameOneLine: item.special },
              'text-left',
              'mx-2',
              'mb-0',
              'font-16',
            ]"
          >
            {{ item.name }}
          </nuxt-link>
          <div
            :class="[
              'd-flex',
              'flex-column',
              'font-weight-bold',
              { 'justify-content-end': !item.special },
            ]"
          >
            <div v-if="item.special">
              <span class="font-16 badge text-white rounded-pill bg-danger">
                {{ item.discount }}
              </span>
              <span
                class="font-14 text-muted text-decoration-line-through text-secondary"
                >{{ item.realPrice }}</span
              >
            </div>
            <div class="font-18 font-weight-bold">
              {{ item.price }}
              <span class="font-14 font-weight-normal">toman</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: { item: Object, keyName: String, subItemPath: String },
  computed:{
      subPath(){
          if(this.keyName!==undefined){
              return this.keyName;
          }else{
              return this.subItemPath;
          }
      }
  }
};
</script>
