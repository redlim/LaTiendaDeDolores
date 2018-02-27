<template>
  <div class="product-card-container">
    <div class="img-container">
      <img :src="image" :alt="name">
    </div>
    <p>{{ name }}</p>
  </div>
</template>

<script>
  import product from '../assets/icons/eggs-158981_640.png'
  export default {
    props:{'name':{default:'........'},image: {default:product}},
    name: 'ProductCard',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-card-container{
    width: 30%;
    height: auto;
  }
 .img-container{
   width: 100%;
 }
  img{
    width: auto;
    max-height: 100px;
  }
</style>
