<template>
       <div class="products-list bg-white mb-3">
        <div v-if="Array.isArray(items)===false" class="d-flex flex-wrap">
            <ul class="d-flex w-100 flex-wrap mt-1 m-0 list-unstyled">
                <template v-for="(item,key) in items">
                    <li v-for="i in item" :key="i.name" :class="['products-list_item']">
                        <productItem :item="i" :keyName="key" />
                    </li>
                </template>
            </ul>
        </div>
        <div v-else>
            <ul class="d-flex w-100 flex-wrap align-items-between list-unstyled m-0">
                <li v-for="i in items" :key="i.name" :class="['products-list_item']">
                    <productItem :item="i" :subItemPath="subItemPath" />
                </li>
            </ul>
        </div>
      </div>
</template>
<script>
import productItem from './productItem.vue'
export default {
  props:['items','subItemPath'],
  components:{
      productItem
  }
};
</script>
<style lang="scss">
.products-list {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 3%);
  border: 1px solid #e4e4e4;
  &_item {
    flex: 1 0 25%;
    max-width: 25%;
    height: 370px;
    & > div {
      border: 1px solid #ebebeb;
      border-top: none;
      border-left: none;
      &:hover {
        box-shadow: 0 2px 17px 0 rgb(0 0 0 / 10%);
      }
    }
    &_img {
      height: 200px;
      position: relative;
      img{
          width: 100%;
          height: 100%;
          object-fit: contain;
      }
    }
    &_special{
        height: 29px;
        line-height: 29px;
        border-bottom: 1px solid #fb3449;
    }
    &_caption{
        height: 90px;
    }
    &_title{
        height: 43px;
        line-height: 22px;
        margin-top: 13px;
        overflow: hidden;
        a{
            font-size: .857rem;
        }
    }
  }
}
.no-special{
    padding-top: 29px !important;
}
</style>
