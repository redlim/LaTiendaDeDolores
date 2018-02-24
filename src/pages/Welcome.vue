<template>
  <div class="hero-image">
    <div class="overlay">
      <div class="hero-text">
        <h1>Bienvenidos a <strong>El mercado de Dolores</strong></h1>
        <label for="inputPostalCode">Código Postal:</label>
        <input id="inputPostalCode" type="text" v-model="postalCode">
        <button v-clicK="goToShops">Buscar Tiendas</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    data () {
      return {
        postalCode:''
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
