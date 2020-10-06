<template>
  <div id="app">
    <!--<header>
      <h1>
        Portfolio<br />
        <span>Stéphane BILLOIS</span>
      </h1>
    </header>-->
    <transition name="intro">
      <modale_enter v-if="reveleEnter" v-bind:reveleEnter="reveleEnter" v-bind:toggleModaleEnter="toggleModaleEnter" v-bind:toggleModaleEnterScroll="toggleModaleEnterScroll"></modale_enter>
    </transition>
    <div class="about">
      <div class="avatar">
        <img src="./assets/moi.jpg" alt="Mon avatar">
      </div>
      <div class="aboutText">
        <p>Après 9 ans d'expérience dans le domaine de la sérigraphie, puis de la gravure laser, et un an en tant que photographe professionnel, je me suis réorienté dans le domaine du développement web. Ce monde m'est depuis toujours familier, car plus qu'un métier, il s'agit pour moi d'une passion dans laquelle j'ai pu acquérir par moi-même de nombreuses compétences renforcées et complétées par celles acquises durant ma formation, que vous pourrez retrouver dans mon CV ci-contre.</p>
      </div>
    </div>
    <hardSkills v-if="hardSkills"></hardSkills>
    <AllProjects v-if="portfolio"></AllProjects>
    <div class="box" v-scroll="handleScroll">
    </div>
  </div>
</template>

<script>
import Enter from './components/Enter.vue'
import HardSkills from './components/HardSkills.vue'
import AllProjects from './components/AllProjects.vue'

export default {
  data: function () {
    return {
      reveleEnter: false,
      hardSkills: true,
      portfolio: false
    }
  },
  name: 'App',
  components: {
    'modale_enter': Enter,
    'hardSkills': HardSkills,
    AllProjects
  },
  directives: {
    //Scroll to close the modal enter window
    scrollEnter: {
      inserted: function (binding) {
        let f = function (evt) {
          if (binding.value(evt)) {
            window.removeEventListener('scrollEnter', f)
          }
        }
        window.addEventListener('scrollEnter', f)
      }
    },
    //Scroll effect to portfolio
    scroll: {
      inserted: function (el, binding) {
        let f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  },
  methods: {
    toggleModaleEnter: function() {
      this.reveleEnter = false
    },
    toggleModaleEnterScroll: function() {
      if (window.scrollY > 1) {
        this.reveleEnter = false
      }
      return window.scrollY > 100;
    },
    handleScroll: function(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute("style", "opacity: 1;")
        console.log(el);
        this.portfolio = true;
        //this.reveleEnter = false;
      }
      return window.scrollY > 100;
    }
  },
}
</script>

<style lang="scss">
.box {
  opacity: 0;
}
* {
  font-family: sans-serif;
}
body {
  background-color: #3f3f3f;
  background-image: url(./assets/1046.jpg);

}
#app {
  min-height: 2000px;
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
    cursor: pointer;
    font-weight: normal;
    color: #519183;
    span {
      font-family: serif;
      font-size: .6em;
      color: white;
    }
  }
}
.about {
  background-color: black;
  display: flex;
  justify-content: center;
}

.avatar {
  min-width: 20%;
  margin: 15em 0em 0 10em ;
  margin-top: auto;
  margin-bottom: auto;
  img {
    text-align: center;
  }
}
.aboutText {
  margin: 15em 10em 10em 10em ;
  * {
    font-size: 2rem;
    text-align: justify;
    color: white;
  }
  padding: 3em;
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
  overflow-y: scroll;
  overflow-x: hidden;
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
.btnRadio, .arrow {
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 1rem;
  @media (max-width: 800px) {
    margin: .5rem;
  }

}
.btnRadio {
  border: solid white;
  border-radius: 25em;
}
.btnRadioActive {
  cursor: default;
  background-color: white;
}
/*.slide-pics-enter-active {
  transition: all .4s ease;
}
.slide-pics-leave-active {
  transition: all 0s;
}
.slide-pics-enter, .slide-pics-leave-to {
  transform: translateX(100%);
  opacity: 0
} */

.intro-enter-active {
  animation: loadingEnterWindow 200ms;
}
.intro-leave-active {
  animation: loadingEnterWindow 200ms reverse;
}
@keyframes loadingEnterWindow {
  0% { transform: translateY(-100%);}
  100% { transform: translateY(0);}
}

</style>
