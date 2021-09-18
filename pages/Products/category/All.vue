<template>
    <div>
        <productList :items="searched ? filteredBySearch:products" />
        <div v-if="searched && Object.keys(filteredBySearch).length === 0" class="alert alert-warning">
          {{$t('nothingFound')}}
        </div>
    </div>
</template>
<script>
import productList from "@/components/productList/productList.vue";
export default {
  data() {
    return {
    };
  },
  components: {
    productList,
  },
  watchQuery: true,
  asyncData({ store,query }) {
    const products = {};
    const allCategories={
        Digital:store.state.Digital.Products,
        Fashion:store.state.Fashion.Products,
        Beauty:store.state.Beauty.Products,
        House:store.state.House.Products
    };
    for (let key in allCategories) {
        pushToProducts(allCategories[key]);
    }
    function pushToProducts(Product) {
        for (let key in Product) {
            products[key] = Product[key];
        } 
    }

    const filteredBySearch={}
    let searched=false
    if(query.search){
        searched=true
        for (let key in products) {
            const filtered=products[key].filter(item=>item.name.toLowerCase().includes(query.search.toLowerCase()));
            const filteredFa=products[key].filter(item=>item.nameFa.toLowerCase().includes(query.search.toLowerCase()));
            if(filtered.length>0){
                filteredBySearch[key]=filtered
            }else if(filteredFa.length>0){
                filteredBySearch[key]=filteredFa
            }
        }
        store.commit('changeSearchValue',query.search);
    }
    return {
      products,
      filteredBySearch,
      searched
    };
  },
};
</script>