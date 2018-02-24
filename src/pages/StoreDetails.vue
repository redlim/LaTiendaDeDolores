<template>
  <div class="store-details">
    <h1>Store Details</h1>
    <p v-for="category in categories">{{category.name}}</p>
  </div>
</template>

<script>
  import {storesService} from '../services/stores'
  export default {
    name: 'StoreDetails',
    data () {
      return {
        categories:{}
      }
    },
    mounted () {
      const params = {company_id:this.$route.params.marketid,token:storesService.status.token};
      this.$http.get('company/categories',{params:params}).then(response => {
        if(response.data.status === 'OK'){
          this.categories = response.data.categories;
        }else {
          console.log("ups, something wrong happend");
        }
      }, err => {
        console.log(err);
      });
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
