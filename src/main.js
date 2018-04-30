import Vue from 'vue'
import VueCtkTimePicker from './VueCtkTimePicker.vue'

if (document.querySelector('#vueCtkTimePicker')) {
  Vue.component('ctk-time-picker', VueCtkTimePicker)

  new Vue({
    el: '#vueCtkTimePicker',
    data () {
      return {
        value: '02:00',
        value2: null
      }
    },
    watch: {
      value (val) {
        console.log('value', val)
      },
      value2 (val) {
        console.log('value2', val)
      }
    }
  })
}

export default VueCtkTimePicker
