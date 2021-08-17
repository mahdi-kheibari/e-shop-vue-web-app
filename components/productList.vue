<template>
      <div class="products-list bg-white mb-3">
        <ul class="d-flex flex-wrap align-content-between mt-1 list-unstyled m-0">
          <li v-for="item in items" :key="item.name" class="products-list_item">
            <div
              class="position-relative d-flex flex-column justify-content-between"
            >
              <div v-if="item.special" class="products-list_item_special text-danger text-center mx-2">
                    special sale
              </div>
              <div v-else class="no-special"></div>
              <nuxt-link to="" class="products-list_item_img">
                
                <img :src="item.img" :alt="item.name">    
              </nuxt-link>
              <div class="d-flex flex-column mx-3">
                  <div class="products-list_item_title text-center mb-2">
                      <nuxt-link to="" class="link-dark">
                          {{item.name}}
                      </nuxt-link>
                  </div>
                  <div :class="['products-list_item_price','d-flex','flex-column','font-weight-bold',{'justify-content-end':!item.special}]">
                      <div v-if="item.special">
                          <span class="badge rounded-pill bg-danger">{{item.discount}}</span>
                          <span class="text-secondary text-decoration-line-through">
                              {{item.realPrice}}
                          </span>
                      </div>
                      <div>{{'تومان'+item.price}}</div>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
</template>
<script>
export default {
  props:{items:Array}
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
    margin-top: 29px;
}
</style>
