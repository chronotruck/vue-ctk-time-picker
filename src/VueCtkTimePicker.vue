<template>
  <div id="VueCtkTimePicker" class="time-picker">
    <div ref="parent" class="field" :class="{'is-focused': showDropdown, 'has-value': value, 'has-error': errorHint}">
      <label :for="id" class="field-label" :class="hint ? (errorHint ? 'text-danger' : 'text-primary') : ''" :style="{color: showDropdown ? color : ''}">{{hint || label}}</label>
      <input type="text" ref="CtkTimePicker"
             @click.stop="toggleDropdown" :id="id" class="field-input"
             :placeholder="label"
             :value="value"
             @input="updateValue"
             :style="{borderColor: showDropdown ? color : ''}"
             readonly>
    </div>
    <div class="time-picker-overlay" v-if="showDropdown" @click.stop="toggleDropdown"></div>
    <div class="dropdown" v-show="showDropdown">
      <div class="select-list">
        <ul class="hours">
          <li class="hint" v-text="hourType"></li>
          <li v-for="hr in hours" v-text="hr" :class="[{active: hour === hr}, hr]" :style="(color && hour === hr) ? styleColor : ''" @click.stop="select('hour', hr)"></li>
        </ul>
        <ul class="minutes">
          <li class="hint" v-text="minuteType"></li>
          <li v-for="m in minutes" v-text="m" :class="[{active: minute === m}, m]" :style="(color && minute === m) ? styleColor : ''" @click.stop="select('minute', m)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CtkTimepicker',
    props: {
      value: {type: String},
      minuteInterval: {type: Number},
      id: {type: String, default: 'CtkTimePicker'},
      label: {type: String, default: 'Choose a time'},
      hint: { type: String },
      errorHint: { type: Boolean },
      color: { type: String }
    },

    data () {
      return {
        hours: [],
        minutes: [],
        showDropdown: false,
        muteWatch: false,
        hourType: 'HH',
        minuteType: 'mm',
        hour: this.value ? this.value.split(':')[0] : null,
        minute: this.value ? this.value.split(':')[1] : null,
        format: 'HH:mm'
      }
    },

    mounted () {
      this.renderFormat()
    },

    computed: {
      styleColor () {
        return {
          backgroundColor: this.color
        }
      }
    },

    methods: {
      updateValue () {
        this.$emit('input', this.$refs.CtkTimePicker.value)
      },
      formatValue (type, i) {
        switch (type) {
          case 'H':
          case 'm':
          case 's':
            return String(i)
          case 'HH':
          case 'mm':
          case 'ss':
            return i < 10 ? `0${i}` : String(i)
          case 'h':
          case 'k':
            return String(i + 1)
          case 'hh':
          case 'kk':
            return (i + 1) < 10 ? `0${i + 1}` : String(i + 1)
          default:
            return ''
        }
      },

      renderFormat (newFormat) {
        newFormat = newFormat || this.format
        if (!newFormat || !newFormat.length) {
          newFormat = 'HH:mm'
        }

        this.renderHoursList()
        this.renderList('minute')
      },

      renderHoursList () {
        const hoursCount = 24
        this.hours = []
        for (let i = 0; i < hoursCount; i++) {
          this.hours.push(this.formatValue(this.hourType, i))
        }
      },

      renderList (listType, interval) {
        if (listType === 'minute') {
          interval = interval || this.minuteInterval
        } else {
          return
        }

        if (interval === 0) {
          interval = 60
        } else if (interval > 60) {
          window.console.warn('`' + listType + '-interval` should be less than 60. Current value is', interval)
          interval = 1
        } else if (interval < 1) {
          window.console.warn('`' + listType + '-interval` should be NO less than 1. Current value is', interval)
          interval = 1
        } else if (!interval) {
          interval = 1
        }

        if (listType === 'minute') {
          this.minutes = []
        }

        for (let i = 0; i < 60; i += interval) {
          if (listType === 'minute') {
            this.minutes.push(this.formatValue(this.minuteType, i))
          }
        }
      },

      toggleDropdown () {
        this.showDropdown = !this.showDropdown
      },

      select (type, value) {
        if (type === 'hour') {
          this.hour = value
        } else if (type === 'minute') {
          this.minute = value
        }
        let formatString = String((this.format))
        if (this.hour) {
          formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour)
        } else {
          formatString = formatString.replace(new RegExp(this.hourType, 'g'), '00')
          this.hour = '00'
        }
        if (this.minute) {
          formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute)
        } else {
          formatString = formatString.replace(new RegExp(this.minuteType, 'g'), '00')
          this.minute = '00'
        }
        this.$emit('input', formatString)
        return formatString
      }
    }
  }
</script>


<style lang="scss" scoped>
  #VueCtkTimePicker {
    position: relative;
    width: 10em;
    margin: 0 auto;
    font-size: 14px;
    * {
      box-sizing: border-box;
    }
    .time-picker-overlay {
      z-index: 2;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .dropdown {
      position: absolute;
      z-index: 5;
      top: 42px;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 6px rgba(0,0,0,0.15);
      width: 10em;
      height: 10em;
      font-weight: normal;
      border-radius: 4px;
      .select-list {
        width: 10em;
        height: 10em;
        overflow: hidden;
        display: flex;
        flex-flow: row nowrap;
        align-items: stretch;
        justify-content: space-between;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;

        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        li {
          text-align: center;
          padding: 0.3em 0;
          color: #161616;
          &:not(.hint):hover {
            background: rgba(0,0,0,.08);
            color: #161616;
            cursor: pointer;
          }
        }
        li.active,
        li.active:hover {
          background: dodgerblue;
          color: #fff;
        }
      }
      .hint {
        color: #a5a5a5;
        cursor: default;
        font-size: 0.8em;
      }
      ul.minutes {
        border-left: 1px solid #fff;
      }
    }
    .field{
      position: relative;
      .field-label{
        position: absolute;
        top: 3px;
        left: 13px;
        -webkit-transform: translateY(25%);
        transform: translateY(25%);
        opacity: 0;
        -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        font-size: 11px;
        color: rgba(0, 0, 0, 0.54);
      }
      .field-input{
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        position: relative;
        width: 100%;
        height: 42px;
        min-height: 42px;
        padding: 0 12px;
        font-weight: 300;
        -webkit-appearance: none;
        outline: none;
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        font-size: 14px;
      }
      &.has-error {
        .field-input {
          border-color: orangered !important;
        }
        .field-label{
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0);
          font-size: 11px;
        }
        .field-input {
          padding-top: 14px;
        }
      }
      &.has-value {
        .field-label{
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0);
          font-size: 11px;
        }
        .field-input {
          padding-top: 14px;
        }
      }
      &.is-focused {
        .field-input {
          border-color: dodgerblue;
        }
        .field-label {
          color: dodgerblue;
        }
      }
    }
    .text-danger {
      color: orangered !important;
    }
  }
</style>
