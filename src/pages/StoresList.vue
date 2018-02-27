<template>
  <div class="store-list">
    <h1>Elige tu tienda</h1>
    <div class="markets">
      <product-card v-for="market of markets" :key="market.id" :name="market.name" :image="market.picture" v-on:click.native="goToShop(market)"></product-card>
    </div>
  </div>
</template>

<script>
  import ProductCard from '../components/ProductCard'
  import loadingGif from '../assets/icons/loading.gif'
  import {getAllMarkets} from '../api/markets'
  export default {
    name: 'StoreList',
    components:{ProductCard},
    data () {
      return {
        markets: [{name:'loading....',picture:loadingGif}]
      }
    },
    mounted (){
      const params = {postalcode:this.$route.params.postalcode};
      getAllMarkets(params).then(res=>{
        this.markets = res.data.markets;
      }).catch((err)=>{
        console.log(err);
      })
    },
    methods: {
      goToShop (market) {
        this.$router.push({ name: 'StoreDetails', params: {marketid:market.id,marketshortcut:market.shortcut,marketimage:market.picture}});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .store-list{
    overflow: auto;
    height: 100%;
  }
  .markets{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

  }
</style>
