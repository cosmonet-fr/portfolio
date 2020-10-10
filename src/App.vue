<template>
  <div id="app" v-scroll="toggleModaleEnterScroll">
    <header>
      <h1 @click="reveleEnter = true">
        Stéphane BILLOIS<br />
        <span>Développeur web full stack</span>
      </h1>
      <nav>
        <ul>
          <li> <a href="#hardSkills">Compétences</a> </li>
          <li> <a href="#course">Parcours</a> </li>
        </ul>
      </nav>
    </header>
    <transition name="intro">
      <modale_enter v-if="reveleEnter" v-bind:reveleEnter="reveleEnter" v-bind:toggleModaleEnter="toggleModaleEnter" v-bind:toggleModaleEnterScroll="toggleModaleEnterScroll"></modale_enter>
    </transition>
    <div class="about">
      <div class="avatar">
        <img src="./assets/moi2.png" alt="Mon avatar">
      </div>
      <div class="aboutText">
        <p>Après plusieurs expériences
          dans le milieu de la photographie,
          de la sérigraphie puis de la gravure
          laser, j’ai engagé ma reconversion
          professionnelle dans le développement
          web, domaine qui me passionne depuis toujours.
          Désormais certifié au métier de développeur web, je
          suis motivé à mettre mes compétences au service de votre
          entreprise.</p>
      </div>
    </div>
    <hardSkills v-if="hardSkills"></hardSkills>
    <course v-if="course"></course>
    <softSkills></softSkills>
    <AllProjects v-if="portfolio"></AllProjects>
    <div class="box" v-scroll="handleScroll">
    </div>
  </div>
</template>

<script>
import Enter from './components/Enter.vue'
import HardSkills from './components/HardSkills.vue'
import Course from './components/Course.vue'
import SoftSkills from './components/SoftSkills.vue'
import AllProjects from './components/AllProjects.vue'

export default {
  data: function () {
    return {
      reveleEnter: false,
      hardSkills: true,
      course: true,
      portfolio: false
    }
  },
  name: 'App',
  components: {
    'modale_enter': Enter,
    'course': Course,
    'softSkills': SoftSkills,
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
  font-family: "Ubuntu Regular";
}
h2 {
  font-size: 3em;
  color: white;

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
  display: flex;
  justify-content: space-between;
  min-height: 5vh;
  position: sticky;
  top: 0px;
  padding: 1em;
  background-color: #333333ee;
  h1 {
    font-family: "Ubuntu Bold";
    cursor: pointer;
    font-weight: normal;
    color: #016a87;
    span {
      font-family: "Ubuntu Medium";
      font-size: .6em;
      color: white;
    }
  }
  nav {
    margin-top: auto;
    margin-bottom: auto;
    ul {
      display: flex;
      margin: 1em;
    }
    li {
      margin: 0 1em;
    }
    a {
      color: white;
      text-decoration: none;
      padding: 1em;
      &:hover {
        background-color: #016a87;
      }
    }
  }
}
.about {
  min-height: 95vh;
  background-color: #00000055;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.avatar, .aboutText {
  margin: 1em 10em;
}
.avatar {
  text-align: center;
  min-width: 20%;
  img {
    text-align: center;
    border-radius: 50%;
  }
}
.aboutText {
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
