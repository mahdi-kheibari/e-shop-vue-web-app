<template>
    <div class="d-flex flex-column h-100">
        <div
        v-if="item.special"
        class="products-list_item_special text-danger text-left text-md-center px-2 px-md-0 mx-md-2"
        :class="[{'text-right':$i18n.locale==='fa'},{'text-md-center':$i18n.locale==='fa'}]"
        >
            {{$t('specialSale')}}
        </div>
        <div v-else class="no-special"></div>
        <div
        class="position-relative h-100 d-flex flex-md-column justify-content-md-between align-items-between align-items-md-start"
        >
        <nuxt-link
            :to="localePath(`/Product/${subPath}/${item.id}`)"
            class="products-list_item_img my-auto mx-md-auto"
        >
            <img :src="item.images[0].address" :alt="item.name" />
        </nuxt-link>
        <div class="d-flex flex-column mx-3 mx-md-0 w-100">
            <div
            :class="['products-list_item_caption',{'my-3':!item.special},'my-md-3',{'mx-2':getWidth<768},'text-center','d-flex','flex-column','align-items-md-center','justify-content-around','justify-content-md-between']"
            >
            <nuxt-link
                :to="localePath(`/Product/${subPath}/${item.id}`)"
                :class="[
                { caption_nameTwoLine: !item.special || getWidth<768 },
                { caption_nameOneLine: item.special && getWidth>=768 },
                'text-left',
                'px-md-2',
                'w-100',
                'mb-0',
                'font-md-16',
                'font-14',
                {'text-right':$i18n.locale==='fa'}
                ]"
            >
                {{ $i18n.locale==="en"? item.name:item.nameFa }}
            </nuxt-link>
            <div
                :class="[
                'd-flex',
                'flex-column',
                'font-weight-bold',
                'text-md-center',
                'text-left',
                { 'justify-content-end': !item.special && getWidth>768 },
                ]"
            >
                <div v-if="item.special" class="d-flex" :class="[{'flex-row-reverse':$i18n.locale==='fa'}]">
                <span class="font-14 font-md-16 badge text-white rounded-pill bg-danger" :class="[{'mr-1':$i18n.locale==='fa'}]">
                    {{ item.discount }}
                </span>
                <span
                    class="font-12 font-md-14 text-muted text-decoration-line-through text-secondary"
                    >{{ item.realPrice }}</span
                >
                </div>
                <div class="font-16 font-md-18 font-weight-bold">
                    {{ item.price }}
                <span class="font-12 font-md-14 font-weight-normal">{{$t('currency')}}</span>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  props: { item: Object, keyName: String, subItemPath: String },
  computed:{
      subPath(){
          if(this.keyName!==undefined){
              return this.keyName;
          }else{
              return this.subItemPath;
          }
      },
      ...mapGetters(['getWidth'])
  }
};
</script>
