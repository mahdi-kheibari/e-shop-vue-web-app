<template>
       <div class="products-list bg-white mb-3">
        <div v-if="Array.isArray(items)===false" class="d-flex flex-wrap">
            <ul class="d-flex w-100 flex-wrap mt-1 m-0 list-unstyled">
                <template v-for="(item,key) in items">
                    <li v-for="i in item" :key="i.name" class="products-list_item">
                        <div
                        class="position-relative d-flex flex-column justify-content-between"
                        >
                            <div v-if="i.special" class="products-list_item_special text-danger text-center mx-2">
                                    special sale
                            </div>
                            <div v-else class="no-special"></div>
                            <nuxt-link :to="'/Product/'+key+'/'+i.id" class="products-list_item_img">
                                <img :src="i.images[0].address" :alt="i.name">    
                            </nuxt-link>
                            <div class="d-flex flex-column mx-3">
                                <div class="products-list_item_title text-center mb-2">
                                    <nuxt-link :to="'/Product/'+key+'/'+i.id" class="link-dark">
                                        {{i.name}}
                                    </nuxt-link>
                                </div>
                                <div :class="['products-list_item_price','d-flex','flex-column','font-weight-bold',{'justify-content-end':!i.special}]">
                                    <div v-if="i.special">
                                        <span class="badge rounded-pill bg-danger">{{i.discount}}</span>
                                        <span class="text-secondary text-decoration-line-through">
                                            {{i.realPrice}}
                                        </span>
                                    </div>
                                    <div>{{'تومان'+i.price}}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        <div v-else>
            <ul class="d-flex w-100 flex-wrap align-items-between mt-1 list-unstyled m-0">
                <li v-for="i in items" :key="i.name" class="products-list_item">
                    <div
                    class="position-relative d-flex flex-column justify-content-between"
                    >
                    <div v-if="i.special" class="products-list_item_special text-danger text-center mx-2">
                            special sale
                    </div>
                    <nuxt-link :to="'/Product/'+subItemPath+'/'+i.id" :class="['products-list_item_img',{'no-special':!i.special}]">
                        <img :src="i.images[0].address" :alt="i.name">    
                    </nuxt-link>
                    <div class="d-flex flex-column mx-3">
                        <div class="products-list_item_title text-center mb-2">
                            <nuxt-link :to="'/Product/'+subItemPath+'/'+i.id" class="link-dark">
                                {{i.name}}
                            </nuxt-link>
                        </div>
                        <div :class="['products-list_item_price','d-flex','flex-column','font-weight-bold',{'justify-content-end':!i.special}]">
                            <div v-if="i.special">
                                <span class="badge rounded-pill bg-danger">{{i.discount}}</span>
                                <span class="text-secondary text-decoration-line-through">
                                    {{i.realPrice}}
                                </span>
                            </div>
                            <div>{{'تومان'+i.price}}</div>
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
</template>
<script>
export default {
  props:['items','subItemPath']
};
</script>
<style lang="scss" scoped>
.products-list {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 3%);
  border: 1px solid #e4e4e4;
  &_item {
    flex: 1 0 25%;
    max-width: 25%;
    min-height: 370px;
    & > div {
      border: 1px solid #ebebeb;
      border-top: none;
      border-left: none;
      padding-bottom: 60px;
      &:hover {
        box-shadow: 0 2px 17px 0 rgb(0 0 0 / 10%);
      }
    }
    &_img {
      height: 200px;
      position: relative;
      padding-top: 10px;
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
        // position: absolute;
        // left: 50%;
    }
    &_title{
        height: 43px;
        line-height: 22px;
        margin-top: 13px;
        overflow: hidden;
        a{
            text-decoration: none;
            font-size: .857rem;
        }
    }
    &_price{
        height: 43px;
        font-size: 1.429rem;
    }
  }
}
.no-special{
    padding-top: 29px;
}
</style>
