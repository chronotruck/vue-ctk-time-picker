<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="ctk-tooltip-example">
      <h1>VueCtkTimePicker</h1>
      <p>A VueJs component for select time (24h format)</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  #app, html, body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
