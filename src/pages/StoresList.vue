<template>
  <div class="store-list">
    <h1>Store List</h1>
    <button v-for="market of markets" v-on:click="goToShop(market.id)">
      {{market.name}}
    </button>
    <button v-on:click="goToShop">Hola</button>
  </div>
</template>

<script>
  import {storesService}from '@/services/stores'
  export default {
    name: 'StoreList',
    data () {
      return {
        markets: []
      }
    },
    mounted (){
      const params = {postalcode:this.$route.params.postalcode,token:storesService.status.token};
      this.$http.get('user/postalcode',{params:params}).then(response => {
        if(response.data.status === 'OK'){
          this.markets = response.data.markets;
        }else {
          console.log("ups, something wrong happend");
        }
      }, err => {
        console.log(err);
      });
    },
    methods: {
      goToShop (id) {
        this.$router.push({ name: 'StoreDetails', params: {marketid:id }});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
