<template>
  <div id="app">
    <app-header/>
    <main>
    <router-view/>
    </main>
  </div>
</template>

<script>
import appHeader from'./components/Header'
export default {
  name: 'App',
  components:{
    appHeader
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
</style>
