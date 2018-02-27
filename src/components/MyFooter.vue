<template>
  <footer>
    <div class="creative-commons">
      <a href="https://wilderolmos.com">Wilder Olmos 2018</a>
      <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'MyFooter',
    data () {
      return {
        msg: 'Adios'
      }
    }
  }
</script>
<style scoped>
 footer {
   position: fixed;
   display: flex;
   flex-direction: column;
   bottom:0;
   width:100%;
 }
</style>
