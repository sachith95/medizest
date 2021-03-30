<template>
  <div id="app">
    <CustomGauge></CustomGauge>
  </div>
</template>

<script>
import CustomGauge from './components/CustomGauge'

export default {
  name: 'App',
  components: {
    CustomGauge
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
