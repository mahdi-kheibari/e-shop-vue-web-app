<template>
  <div>
    <section>
      <category :products="productsCategory" subRoute="/Products/Digital/" />
    </section>
    <section>
      <breadcrumb activeText="Digital products" />
      <productList :items="Products" />
    </section>
  </div>
</template>
<script>
import category from "@/components/category.vue";
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productList.vue";
export default {
  computed: {
    productsCategory() {
      return this.$store.state.categories.allCategories["Digital products"].products;
    },
  },
  components: {
    category,
    breadcrumb,
    productList
  },
  asyncData({store}) {
      const products=[];
      const digitalProducts=store.state.Digital.Products;
    //   for ( let key in digitalProducts) {
    //       products.push(...digitalProducts[key]);
    //   }
      return {
          Products:digitalProducts
      }
  },
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
    div {
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
        position: absolute;
        left: 50%;
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
</style>
