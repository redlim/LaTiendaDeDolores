<template>
  <div class="hero-image">
    <div class="overlay">
      <div class="hero-text">
        <h1>Bienvenidos a <strong>El mercado de Dolores</strong></h1>
        <form  v-on:submit.prevent="goToShops">
          <label for="inputPostalCode">Código Postal:</label>
          <input id="inputPostalCode" type="text" v-model="postalCode" v-on:change="alertMessage = postalCode === ''">
          <button class="button-submit" type="submit">Buscar Tiendas</button>
        </form>
        <p v-show="alertMessage">{{message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getApiToken} from '../api/markets'
  export default {
    name: 'Welcome',
    data () {
      return {
        postalCode:'',
        message:'Tienes que introducir un Código Postal',
        alertMessage:false
      }
    },
    mounted () {
      getApiToken();
    },
    methods: {
      goToShops () {
        if (this.postalCode !== ''){
          this.$router.push({ name: 'StoreList', params: { postalcode: this.postalCode }});
        }else {
          this.alertMessage = true;
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
    background-image: url('../assets/background.jpg');
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
  form{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  label{
    align-self: center;
  }
  #inputPostalCode{
    width: 30%;
    height: 30px;
    font-size: 20px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    text-align: center;
  }
  .button-submit{
    height: 36px;
    margin: 0;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 20px;
  }
</style>
