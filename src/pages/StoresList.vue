<template>
  <div class="store-list">
    <h1>Store List</h1>
    <button v-for="market of markets" v-on:click="goToShop(market)">
      {{market.name}}
    </button>
    <button v-on:click="goToShop">Hola</button>
  </div>
</template>

<script>
  import {getAllMarkets} from '../api/markets'
  export default {
    name: 'StoreList',
    data () {
      return {
        markets: []
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
        this.$router.push({ name: 'StoreDetails', params: {marketid:market.id,marketname:market.name}});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
