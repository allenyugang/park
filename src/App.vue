<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import {checkdeviceiphone} from './utils/check'
export default {
  name: 'app',
  data(){
    return{
    }
  },
  mounted() {
  },
}
</script>

<style>
#app {
  color:#333333
}
.appheader{
  padding-top:15px
}
</style>
