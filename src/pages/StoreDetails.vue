<template>
  <div class="store-details">
    <h1>Store Details</h1>
    <nav-sidebar :items="categories" :item-key="'categories'" :item-selected="categorySelected.id" @update="getItems"
    :header-image="currentMarket.picture" :header-title="currentMarket.name" :header-subtitle="subtitle">
    </nav-sidebar>
    {{market}}
    {{productsName}}
    <p v-for="product of products ">{{product.name}}</p>
  </div>
</template>

<script>
  import {getCategories ,getItems, getAllMarkets } from '../api/markets'
  import NavSidebar from '../components/NavSidebar'
  export default {
    name: 'StoreDetails',
    components :{NavSidebar},
    data () {
      return {
        products:[],
        categories:{},
        productsName:'',
        categorySelected:{},
        market:[]
      }
    },
    created () {
      this.fetchData();
    },
    methods: {
      getItems(item){
        this.categorySelected = item;
        const params = {company_id:this.$route.params.marketid,category_id:item.id};
        getItems(params).then((res)=>{
          this.productsName = res.data.categories[0].name;
          this.products = res.data.categories.length !== 0 ? res.data.categories[0].products : [];
        })
      },
      fetchData () {
        const postalcode = {postalcode:this.$route.params.postalcode};
        getAllMarkets(postalcode).then((res)=>{
          console.log(res);
          this.market = res.data.markets.filter((e)=>{
            return e.id === parseInt(this.$route.params.marketid);
          });
        }).catch((err)=>{
          console.log(err);
        });
        const params = {company_id:this.$route.params.marketid};
        getCategories(params).then((res)=>{
          this.categories = res.data.categories;
          this.categorySelected = res.data.categories[0];
          this.products = res.data.categories.length !== 0 ? res.data.categories[0].products : [];
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    computed : {
      subtitle () {
        return 'Comprando en ' + this.$route.params.postalcode
      },
      currentMarket (){
        return this.market[0]
      }
    }
  }
</script>
<style scoped>
</style>
