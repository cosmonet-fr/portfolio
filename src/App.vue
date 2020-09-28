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
.modaleScreen {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modaleBox {
  overflow: auto;
  max-height: 80%;
  position: fixed;
  top: 10%;
  z-index: 2;
  width: 80%;
  background-color: #000000cc;
  color: #333;
  //border-left: solid .5rem #519183;
}
.menuBtn {
  display: flex;
  justify-content: space-between;
  //background-color: #999;
  //color: white;
}
.btn {
  padding: .5em;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  //background-color: #e74c3c;
  color: white;
  font-weight: bold;
}
.page {
  margin: 1em;
}
.content {
  display: flex;
  justify-content: space-around;
}
.screenshot {
  @media (min-width: 800px) {
    height: 596px;
    max-width: 65%;
  }
}

.textBox {
  @media (min-width: 800px) {
    max-width: 30%;
  }
  li {
    margin-left: 2em;
    list-style-type: square;
  }
}
.ModaleFooter {
  margin: 2em;
  display: flex;
  justify-content: space-around;
  img {
    width: 5rem;
    height: 5rem;
  }
}

@media (max-width: 800px) {
  .overlay {
    display: none;
  }
  .modaleBox {
    overflow: scroll;
    position: fixed;
    width: 100%;
    max-height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    //right: 0;
  }
  .content {
    flex-direction: column;
  }
  .screenshot, .textBox {
    width: 100%;
  }
  .btn {
    font-size: 1.5em;
    position: fixed;
    right: 0;
  }
}
.navScreenshot {
  display: flex;
  justify-content: center;
}
.btnRadio {
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 1rem;
  border: solid white;
  border-radius: 25em;
}
.btnRadioActive {
  cursor: default;
  background-color: white;
}
.slide-pics-enter-active {
  transition: all .4s ease;
}
.slide-pics-leave-active {
  transition: all 0s;
}
.slide-pics-enter, .slide-pics-leave-to {
  transform: translateX(100%);
  opacity: 0
}
</style>
