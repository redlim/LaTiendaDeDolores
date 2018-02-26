<template>
  <a class="nav-item-container">
    <div class="icon-container">
      <img v-show="icon" :src="icon" alt="name" class="icon">
    </div>
    <div class="text-container">
      <p>{{name}}
      </p>
      <img src="../assets/icons/ic_show.svg" alt="show" :class="iconStatus" v-show="status">
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
    width: 32px;
    height: 32px;
    display: flex;
    align-self: center;
  }
  .icon-container img {
    width: 100%;
    height: 100%;
  }
  .nav-item-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 56px;
    padding: 12px;
    box-sizing:border-box;
  }
  .nav-item-container:hover{
    background: #F5F5F5;
  }
  .nav-item-container:active{
    background: rgba(79, 208, 83, 0.11);
  }
  .rotate {
   transform: rotate(180deg);
  }
  .text-container {
    margin: 0;
    align-self: center;
    display: flex;
    flex-direction: row;
    vertical-align: center;
    justify-content: space-between;
    text-align: left;
    width:85%;
    font-size: 18px;
    color: #666666;
    border-bottom: solid 1px #D5D5D5;
  }
</style>
