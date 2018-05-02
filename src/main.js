import Vue from 'vue'
import VueCtkTimePicker from './VueCtkTimePicker.vue'

if (document.querySelector('#vueCtkTimePicker')) {
  Vue.component('ctk-time-picker', VueCtkTimePicker)

  new Vue({
    el: '#vueCtkTimePicker',
    data: function () {
      return {
        value: '02:00',
        value2: null
      }
    }
  })
}

export default VueCtkTimePicker
