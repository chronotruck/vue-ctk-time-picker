# vue-ctk-time-picker

> A vue component for select time (by Chronotruck)

## Demo
An [example](https://htmlpreview.github.io/?https://github.com/chronotruck/vue-ctk-time-picker/blob/master/demo/dist/index.html) is available

## Install

``` bash
npm install vue-ctk-time-picker --save
```
#### In single component
``` js
import CtkTimePicker from 'vue-ctk-time-picker'

var yourComponent = new Vue({
  components: { CtkTimePicker },
  ...
})
```
``` html
<template>
  ...
  <ctk-time-picker
    v-model="value" 
    :label="'Choose a time'"
    :hint="'Text'"
    :error-hint="true"
    color="#FF0000" />
  ...
</template>  
```

## Props API

| Props      | Type       | Required | Default    | Options        |
|------------|------------|----------|------------|----------------|
| v-model    | String/Int | true     | -          | -              |
| label      | String     | false    | Enter Text | -              |
| type       | String     | no       | text       | text or number |
| hint*       | text       | no       | -         |                |
| error-hint** | Boolean    | no      | false     |                |
| color***     | String (hex) | no    | dodgerblue |            |

*hint : Is a text that replaces the label/placeholder

**error-hint : When is `true` --> Input border & label are red 

***color: Replace color for the hint, the borders & time selected in dropdown   

## Contribution

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
