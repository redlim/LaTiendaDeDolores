<template>
  <div class="hello">
    <p>{{ name }}</p>
    <div class="img-container">
      <img :src="image" :alt="name">
    </div>
  </div>
</template>

<script>
  export default {
    props:['name','image'],
    name: 'ProductCard',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .img-container{
 }
</style>
