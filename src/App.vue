<template>
  <div id="app">
    <header>
      <h1>
        Portfolio<br />
        <span>Stéphane BILLOIS</span>
      </h1>
    </header>
    <AllProjects />
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import AllProjects from './components/AllProjects.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    AllProjects
  }
}
</script>

<style lang="scss">
* {
  font-family: sans-serif;
}
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
}
header {
  padding: 1em;
  background-color: #3f3f3f;
  h1 {
    font-weight: normal;
    color: #519183;
    span {
      font-family: serif;
      font-size: .6em;
      color: #6cf;
    }
  }
}
</style>
