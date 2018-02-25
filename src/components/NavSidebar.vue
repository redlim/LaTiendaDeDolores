<template>
  <nav class="nav-sidebar-container">
    <header>
      <div class="icon-container">
        <img :src="headerImage" alt="name" class="icon">
      </div>
      <div class="text-container">
        <p>{{headerTitle}}</p>
        <p>{{headerSubtitle}}</p>
      </div>
      <a href="">CAMBIAR</a>
    </header>
    <span v-for="item of items">
      <nav-item v-on:click.native="clickItem(item)" :name="item.name" :icon="item.icon" class="mainmenu"></nav-item>
      <div :class="{'open' : item.id === itemSelected , 'close' : item.id !== itemSelected}">
        <span  v-if="item[itemKey]" v-for="subitem of item[itemKey]">
          <nav-item v-on:click.native="clickItem(subitem)" :name="subitem.name" :icon="item.icon" ></nav-item>
        </span>
      </div>
    </span>
  </nav>
</template>

<script>
  import NavItem from './NavItem'
  export default {
    name: 'NavSidebar',
    props: ['items','itemKey','itemSelected',"update",'headerImage','headerTitle','headerSubtitle'],
    components :{NavItem},
    data () {
      return {

      }
    },
    methods : {
      clickItem (item)  {
        console.log("hey");
        this.$emit('update',item);
      }
    },
    computed : {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    display: flex;
    flex-direction: row;
  }
  header .text-container {
    display: flex;
    flex-direction: column;
  }
  .nav-sidebar-container {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
  .close {
    visibility: hidden; /* hides sub-menu */
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
    visibility: visible; /* shows sub-menu */
    opacity: 1;
    z-index: 1;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.3s;
  }
</style>
