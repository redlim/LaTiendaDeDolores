<template>
  <div id="app" class="overlay">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body {
    margin: 0;
    height: 100%;
  }
#app {
  font-family: 'SF UI Display', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
  @font-face {
    font-family: 'SF UI Display';
    src: url('./assets/font/SFUIDisplay-Regular.woff2') format('woff2'),
    url('./assets/font/SFUIDisplay-Regular.woff') format('woff'),
    url('./assets/font/SFUIDisplay-Regular.otf') format('otf');
    font-weight: normal;
    font-style: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>
