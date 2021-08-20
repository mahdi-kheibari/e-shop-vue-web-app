<template>
  <div class="row">
    <section class="col-12 col-sm-10">
      <breadcrumb activeText="Special discounts" />
      <productList :items="changeProducts ? discountProducts:Products" />
    </section>
    <section class="col-sm-2">
      <asideLayout>
        <div slot="beforeDivider">
          <div v-for="i in allCategories" :key="i">
            <input
              type="checkbox"
              :id="i"
              :value="i"
              v-model="checkedCategory"
              @change="filtredCategory()"
            />
            <label :for="i" class="form-label">{{ i }}</label>
          </div>
        </div>
      </asideLayout>
    </section>
  </div>
</template>
<script>
import breadcrumb from "@/components/breadcrumb.vue";
import productList from "@/components/productList.vue";
export default {
  data() {
    return {
      changeProducts:false,
      checkedCategory: [],
    };
  },
  computed: {
    allCategories() {
      return this.$store.state.allCategories;
    },
  },
  methods:{
      filtredCategory(){
          const Products=this.Products
          const filtredCategory=this.checkedCategory
          const filteredProducts={}
          if (filtredCategory.length === 0 ) {
              this.changeProducts=false
          }else{
              for (let category of filtredCategory) {
                  for (let i in Products) {
                      if (Products[i].some((item)=>item.category===category)) {
                          filteredProducts[i]=Products[i].filter((item)=>item.category===category)
                      }
                  }
              }
              this.discountProducts=filteredProducts;
              this.changeProducts=true
          }
      }
  },
  components: {
    breadcrumb,
    productList,
  },
  asyncData({ store }) {
    const products = {};
    function filteredProduct(product,category) {
        const Products = product;
        for (let key in Products) {
            const filtered=Products[key].filter((item)=>
            item.special===true
            ).map((item)=>{
                return {
                    ...item,
                    category:category
                }
            });
            products[key] = filtered;
        } 
    }
    const allProducts={
        Digital:store.state.Digital.Products,
        Fashion:store.state.Fashion.Products,
        Beauty:store.state.Beauty.Products,
        House:store.state.House.Products
    };
    for (let key in allProducts) {
        filteredProduct(allProducts[key],key);
    }
    return {
      Products: products,
      discountProducts:{}
    };
  },
};
</script>
