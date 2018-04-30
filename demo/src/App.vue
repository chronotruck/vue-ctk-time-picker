<template>
  <div id="app">
    <img src="./assets/logo.png" alt="Ctk logo">
    <div>
      <h1>VueCtkInputText</h1>
      <h3>A VueJs component for an input with good UX</h3>
      <ctk-input-text label="Initial input" v-model="value2" ></ctk-input-text>
      <br>
      <ctk-input-text label="Input with value" v-model="value"></ctk-input-text>
      <br>
      <ctk-input-text label="Input with error-hint: true + text hint" v-model="value2" hint="Error text" :error-hint="true"></ctk-input-text>
    </div>
  </div>
</template>

<script>
import CtkInputText from 'vue-ctk-input-text'

export default {
  name: 'App',
  components: {
    CtkInputText
  },
  data () {
    return {
      value: 'Hello world!',
      value2: null
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
