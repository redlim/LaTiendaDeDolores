<template>
  <div class="store-details">
    <h1>Store Details</h1>
    <nav-sidebar :items="categories" :item-key="'categories'" :item-selected="categorySelected.id" @update="getItems"
    header-image="" :header-title="title" :header-subtitle="subtitle">
    </nav-sidebar>
    {{productsName}}
    <p v-for="product of products ">{{product.name}}</p>
  </div>
</template>

<script>
  import {getCategories ,getItems } from '../api/markets'
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
      }
    },
    mounted () {
      const params = {company_id:this.$route.params.marketid};
      getCategories(params).then((res)=>{
        this.categories = res.data.categories;
        this.categorySelected = res.data.categories[0];
        this.products = res.data.categories[0].products;
      });
    },
    methods: {
      getItems(item){
        this.categorySelected = item;
        const params = {company_id:this.$route.params.marketid,category_id:item.id};
        getItems(params).then((res)=>{
          console.log("hey ho",res.data);
          this.productsName = res.data.categories[0].name;
          this.products = res.data.categories[0].products;
        })
      }
    },
    computed : {
      subtitle () {
        return 'Comprando en ' + this.$route.params.postalcode
      },
      title () {
        return this.$route.params.marketname
      }
    }
  }
</script>
<style scoped>
</style>
