import Vue from 'vue'
import VueCtkTimePicker from './VueCtkTimePicker.vue'

if (document.querySelector('#vueCtkTimePicker')) {
  Vue.component('ctk-time-picker', VueCtkTimePicker)

  new Vue({
    el: '#vueCtkTimePicker',
    data () {
      return {
        value: null
      }
    },
    watch: {
      value (val) {
        console.log('val', val)
      }
    }
  })
}

export default VueCtkTimePicker
