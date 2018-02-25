<template>
  <div class="nav-sidebar">
    <a v-for="item of items" v-on:click="clickItem(item)">
      <nav-item :name="item.name" :icon="item.icon" status="open"></nav-item>
      <span v-if="item.categories">
         <a v-for="subitem of item.categories" v-on:click="clickItem(subitem)">
          <nav-item :name="subitem.name" :icon="subitem.icon" status="open"></nav-item>
         </a>
      </span>
    </a>
  </div>
</template>

<script>
  import NavItem from './NavItem'
  export default {
    name: 'NavSidebar',
    props: ['items','itemSelected',"update"],
    components :{NavItem},
    data () {
      return {

      }
    },
    methods : {
      clickItem (item)  {
        this.$emit('update',item);
      }
    },
    computed : {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-sidebar-container {
    display: flex;
    flex-direction: column;
  }
</style>
