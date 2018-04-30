<template>
  <div id="app">
    <img src="./assets/logo.png" alt="Ctk logo">
    <div>
      <h1>VueCtkInputText</h1>
      <h3>A VueJs component for an input with good UX</h3>
      <ctk-time-picker label="Choose a time" v-model="value" ></ctk-time-picker>
    </div>
  </div>
</template>

<script>
import CtkTimePicker from 'vue-ctk-time-picker'

export default {
  name: 'App',
  components: {
    CtkTimePicker
  },
  data () {
    return {
      value: '02:00'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  width: 80%;
  margin: 0 auto;
}
*, *::before, *::after {
  box-sizing: border-box;
}
</style>
