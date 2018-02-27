<template>
  <div class="store-details">
    <div class="nav-sidebar">
       <nav-sidebar :items="categories"
                    :item-key="'categories'"
                    :item-selected="categorySelected.id"
                    :header-image="currentMarket.picture"
                    :header-title="currentMarket.name"
                    :header-subtitle="subtitle"
                    @updateItem="getAllItems"
                    @updateSubItem="getItems">
       </nav-sidebar>
    </div>
    <div class="product-list">
      <h1>{{productsName}}</h1>
      <product-list :products="products"></product-list>
    </div>
  </div>
</template>

<script>
  import {getCategories ,getProducts, getAllMarkets,getAllProducts } from '../api/markets'
  import NavSidebar from '../components/NavSidebar'
  import ProductList from '../components/ProductList'
  import loadingGif from '../assets/icons/loading.gif'
  export default {
    name: 'StoreDetails',
    components :{NavSidebar,ProductList},
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
        this.categorySelected = item;
        this.productsName = item.name;
        const params = {company_id:this.$route.params.marketid,category_id:item.id};
        getProducts(params).then((res)=>{
          this.products = res.data.items
        })
      },
      getAllItems(item){
        this.categorySelected = item;
        this.productsName = item.name;
        const params = {company_id:this.$route.params.marketid,category_id:item.id};
        getAllProducts(params).then((res)=>{
          this.products = res.data.categories.reduce((acum,data)=>{
            acum = acum.concat(data.items);
            return acum;
          },[]);
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
  .store-details{
    display: flex;
    flex-direction: row;
  }
  .product-list{
    height: 100vh;
    overflow: auto;
  }
  .nav-sidebar{
    width: 320px;
    min-width: 320px;
  }
</style>
