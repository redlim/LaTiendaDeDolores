<template>
  <div class="store-details">
    <h1>Store Details</h1>
    <p v-for="category in categories">{{category.name}}</p>
  </div>
</template>

<script>
  import {getCategories} from '../api/markets'
  export default {
    name: 'StoreDetails',
    data () {
      return {
        categories:{}
      }
    },
    mounted () {
      const params = {company_id:this.$route.params.marketid};
      getCategories(params).then((res)=>{
        this.categories = res.data.categories;
      })
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
