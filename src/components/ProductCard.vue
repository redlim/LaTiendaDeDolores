<template>
  <div class="product-card-container">
    <div class="img-container">
      <img :src="image" :alt="name">
    </div>
    <div class="text-container">
      <p>{{ name }}</p>
    </div>
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
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    cursor: pointer;
  }

  .product-card-container:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

 .img-container{
   width: 100%;
 }
  img{
    width: auto;
    max-height: 100px;
  }
  .text-container {
    padding: 2px 16px;
  }
</style>
