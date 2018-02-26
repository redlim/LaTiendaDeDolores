<template>
  <div class="store-details">
    <h1>Store Details</h1>
    <nav-sidebar :items="categories" :item-key="'categories'" :item-selected="categorySelected.id"
                 @updateItem="getAllItems" @updateSubItem="getItems"
    :header-image="currentMarket.picture" :header-title="currentMarket.name" :header-subtitle="subtitle">
    </nav-sidebar>
    {{productsName}}
    <span v-for="product of products ">
      <product-card  :name="product.name" :image="product.pictures[0]"></product-card>
    </span>
  </div>
</template>

<script>
  import {getCategories ,getProducts, getAllMarkets,getAllProducts } from '../api/markets'
  import NavSidebar from '../components/NavSidebar'
  import ProductCard from '../components/ProductCard'
  import loadingGif from '../assets/icons/loading.gif'
  export default {
    name: 'StoreDetails',
    components :{NavSidebar,ProductCard},
    data () {
      return {
        products:[],
        categories:{},
        productsName:'',
        categorySelected:{},
        market:[{picture:loadingGif,name:'----------'}]
      }
    },
    created () {
      this.fetchData();
    },
    methods: {
      getItems(item){
        console.log("hola");
        this.categorySelected = item;
        const params = {company_id:this.$route.params.marketid,category_id:item.id};
        getProducts(params).then((res)=>{
          this.products = res.data.items
        })
      },
      getAllItems(item){
        this.categorySelected = item;
        const params = {company_id:this.$route.params.marketid,category_id:item.id};
        getAllProducts(params).then((res)=>{
          this.products = res.data.categories.reduce((acum,data)=>{
            acum = acum.concat(data.items);
            return acum;
          },[]);
          console.log(this.products);
        })
      },
      fetchData () {
        const postalcode = {postalcode:this.$route.params.postalcode};
        getAllMarkets(postalcode).then((res)=>{
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
          // this.products = res.data.categories.length !== 0 ? res.data.categories[0].products : [];
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
