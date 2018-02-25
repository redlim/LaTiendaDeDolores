<template>
  <a class="nav-item-container" :class="status">
    <div class="icon-container">
      <img :src="icon" alt="name" class="icon">
    </div>
    <div class="text-container">
      <p>{{name}}
      </p>
      <img src="../assets/icons/ic_show.svg" alt="show" :class="iconStatus">
    </div>
  </a>
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
  .icon-container{
    width:19px;
  }
  .nav-item-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 56px;
  }
  .rotate {
   transform: rotate(180deg);
  }
  .text-container {
    margin: 0;
    align-self: center;
    height: 100%;
    display: flex;
    flex-direction: row;
    vertical-align: center;
    justify-content: space-between;
    text-align: left;
    width:75%;
    font-size: 18px;
    color: #666666;
    border-bottom: solid 1px #D5D5D5;
  }
</style>
