<template>
  <nav class="nav-sidebar-container">
    <header :style="headerBackground">
      <div class="icon-container">
        <img :src="headerImage">
      </div>
      <div class="text-container">
        <p class="title">{{headerTitle}}</p>
        <p class="subtitle">{{headerSubtitle}}</p>
      </div>
      <a class="link" v-on:click="goBack">CAMBIAR</a>
    </header>
    <ul class="nav-items">
      <li v-for="item of items">
        <nav-item v-on:click.native="toggle(item)" :name="item.name" :icon="item.icon" class="mainmenu" :status="item.id === itemSelected" :type="status(item)" :link="link + item.shortcut"></nav-item>
        <div :class="status(item)">
          <nav-item v-on:click.native="clickItem(item)" :name="'Ver toda la sección'" class="mainmenu" :status="item.id === itemSelected" :link="link + item.shortcut"></nav-item>
          <span v-if="item[itemKey]" v-for="subitem of item[itemKey]" class="subitems">
            <nav-item v-on:click.native="clickItem(item,subitem)" :name="subitem.name" :status="subitem.id === itemSelected" :link="link+ item.shortcut+'/'+subitem.shortcut"></nav-item>
          </span>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
  import NavItem from './NavItem'
  export default {
    name: 'NavSidebar',
    props: ['items','itemKey','itemSelected',"updateItem",'headerImage','headerTitle','background','headerSubtitle','updateSubItem','link'],
    components :{NavItem},
    data () {
      return {
        currentitem: {}
      }
    },
    methods : {
      clickItem (item,subitem)  {
        this.currentitem = item;
        subitem ? this.$emit('updateSubItem',subitem) : this.$emit('updateItem',item);
      },
      status (item){
        return this.currentitem === item ? 'open' : 'close';
      },
      goBack() {
        this.$router.push({ name: 'StoreList'});
      },
      toggle (item){
        this.currentitem === item ? this.currentitem = null : this.currentitem = item;
      }
    },
    computed :{
      headerBackground (){
       return 'background-image: url(' + this.background+') ;background-repeat: no-repeat; background-size: cover;';
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-sidebar-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 85vh;
    position: relative;
    top: 64px;
    left: 0;
    overflow-y: auto;
    background-color: white;
    z-index: 9;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    background-color: green;
    top: 0;
    left: 0;
    height: 64px;
    width: 320px;
    padding: 12px;
    box-sizing:border-box;
  }
  header .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: left;
    width:70%;
  }
  .text-container p{
    margin: 0;
    text-align: left;
    color: #FFFFFF;
    letter-spacing: 0;
    height: 100%;
  }
  .text-container .subtitle {
    opacity: 0.8;
    font-family: HelveticaNeue;
    font-size: 14px;
  }

  .text-container .title {
    font-size: 18px;
    line-height: 18px;
  }
  header a{
    font-size: 12px;
    color: #FFFFFF;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-self: center;
  }
  header .icon-container{
    width: 32px;
    height: 32px;
  }
  .icon-container img {
    width: 100%;
    height: 100%;
  }
  .close {
    display: none; /* hides sub-menu */
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    transform: translateY(-2em);
    z-index: -1;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
  }
  .open {
    display: block; /* shows sub-menu */
    opacity: 1;
    z-index: 1;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.7s;
    background: #F5F5F5;
  }
 /*to not show the scroll bar*/
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
  .link{
    cursor: pointer;
  }
</style>
