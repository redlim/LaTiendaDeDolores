<template>
  <div class="product-list-container">
    <span  class="product-cards">
      <product-card v-for="product of products" :key="product.id"" :name="product.name" :image="product.pictures[0]"></product-card>
    </span>
  </div>
  </div>
</template>

<script>
  import ProductCard from '../components/ProductCard'
  export default {
    name: 'ProductList',
    components:{ProductCard},
    props:['products'],
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-list-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
  }
  .product-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
