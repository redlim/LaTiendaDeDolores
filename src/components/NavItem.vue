<template>
  <div class="nav-item-container" :class="status">
    <img :src="icon" alt="name">
    <p>{{name}}</p>
    <img src="../assets/icons/ic_show.svg" alt="show" :class="iconStatus">
  </div>
</template>

<script>
  export default {
    name: 'NavItem',
    props: ['status','name','icon'],
    data () {
      return {

      }
    },
    computed : {
      iconStatus ()  {
        return this.status === 'open' ? 'rotate' : ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-item-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 324px;
    height: 56px;
  }
  .rotate {
   transform: rotate(180deg);
  }
</style>
