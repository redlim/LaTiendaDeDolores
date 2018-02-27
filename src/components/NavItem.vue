<template>
  <a class="nav-item-container" :href="link">
    <div class="icon-container">
      <img v-show="icon" :src="icon" alt="name" class="icon">
    </div>
    <div class="text-container">
      <p>{{name}}
      </p>
      <img src="../assets/icons/ic_show.svg" alt="show"  class="icon-show" :class="type" v-show="type && !status">
      <img src="../assets/icons/ic_checked.svg" alt="seleccionado"  v-show="status">
    </div>
  </a>
</template>

<script>
  export default {
    name: 'NavItem',
    props: ['status','name','icon','type','link'],
    data () {
      return {
      }
    },
    computed : {
      iconStatus: function () {
        return this.type === 'open' ? '' : 'rotate';
      },
      locallink () {
        return '#'+ this.$route.params.postalcode+'/' +this.$route.params.markeshortcut +'/' + this.$route.params.marketid +'/'+ this.link
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
    cursor: pointer;
  }
  .nav-item-container .icon-show{
    display: none;
  }
  .nav-item-container .icon-show.open{
    display: block;
  }
  .nav-item-container:hover .icon-show.close{
    display: block ;
    transform: rotate(180deg);
  }
  .nav-item-container:hover{
    background: rgba(245, 245, 245, 0.5);
  }
  .nav-item-container:active{
    background: rgba(79, 208, 83, 0.11);
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
  a{
    text-decoration: none;
  }
</style>
