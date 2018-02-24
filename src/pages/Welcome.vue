<template>
  <div class="hero-image">
    <div class="overlay">
      <div class="hero-text">
        <h1>Bienvenidos a <strong>El mercado de Dolores</strong></h1>
        <form  v-on:submit.prevent="goToShops">
          <label for="inputPostalCode">Código Postal:
          <input id="inputPostalCode" type="text" v-model="postalCode"></label>
          <button type="submit">Buscar Tiendas</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {storesService} from '../services/stores'
  export default {
    name: 'Welcome',
    data () {
      return {
        postalCode:''
      }
    },
    mounted () {
      this.$http.get('user/session').then(response => {
        if(response.data.status === 'OK'){
          storesService.status.token = response.data.token;
        }else {
         console.log("ups, something wrong happend");
        }
      }, err => {
        console.log(err);
      });
    },
    methods: {
      goToShops () {
        if (this.postalCode !== ''){
          this.$router.push({ name: 'StoreList', params: { postalcode: this.postalCode }});
        }else {

        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
  }
  h1, h2 {
    font-weight: normal;
  }
  .hero-image {
    background-image: url('../assets/background.jpeg');
    height: 70%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  .overlay{
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.3); ;
  }
</style>
