<template>
  <div id="app" v-scroll="toggleModaleEnterScroll">
    <header class="desk">
      <h1>
        Stéphane BILLOIS<br />
        <span>Développeur</span>
      </h1>
      <nav>
        <ul>
          <li> <a href="#app">Présentation</a> </li>
          <li> <a href="#hardSkills">Compétences</a> </li>
          <li> <a href="#course">Parcours</a> </li>
          <li> <a href="#allSoftSkills">Soft skills</a> </li>
          <li> <a href="#portfolio">Portfolio</a> </li>
          <li> <a href="#contact">Contact</a> </li>
        </ul>
      </nav>
    </header>


    <div class="menuGsmBtn" v-show="!menuGsm" @click="menuGsm = !menuGsm"><img src="./assets/bars-solid.svg"></div>

    <transition name="loadingMenu">
      <div class="gsm" v-show="menuGsm">
        <nav>
          <div class="headMenu" @click="menuGsm = !menuGsm">
            <img src="./assets/arrow_right.svg" />
          </div>
          <ul>
            <li @click="menuGsm = !menuGsm"> <a href="#app">Présentation</a> </li>
            <li @click="menuGsm = !menuGsm"> <a href="#hardSkills">Compétences</a> </li>
            <li @click="menuGsm = !menuGsm"> <a href="#course">Parcours</a> </li>
            <li @click="menuGsm = !menuGsm"> <a href="#allSoftSkills">Soft skills</a> </li>
            <li @click="menuGsm = !menuGsm"> <a href="#portfolio">Portfolio</a> </li>
            <li @click="menuGsm = !menuGsm"> <a href="#contact">Contact</a> </li>
          </ul>
        </nav>

      </div>
    </transition>


    <transition name="intro">
      <modale_enter v-if="reveleEnter" v-bind:reveleEnter="reveleEnter" v-bind:toggleModaleEnter="toggleModaleEnter"
        v-bind:toggleModaleEnterScroll="toggleModaleEnterScroll"></modale_enter>
    </transition>
    <div class="about page">
      <div class="avatar">
        <img src="./assets/moi2.png" alt="Mon avatar">
      </div>
      <div class="aboutText">
        <p>Je m'appelle Stéphane BILLOIS, j'ai {{ age }} ans.</p>
        <p>Développeur en freelance et qualiticien depuis 5 ans chez <a href="https://www.openstudio.fr/"
            target="_blank">OpenStudio</a>, je
          suis passionné par
          les nouvelles technologies, et par le logiciel
          libre. Très curieux par nature, j'aime me tenir informé sur les nouvelles technologies et apprendre de
          nouveaux
          langages.</p>
        <p>Je vous laisse découvrir un aperçu de mes compétences et expériences juste en-dessous.</p>
        <p>Pour en savoir plus, je me ferai un plaisir d'échanger avec vous.</p>
      </div>
    </div>

    <hardSkills id="hardSkills"></hardSkills>
    <course id="course"></course>
    <softSkills id="allSoftSkills"></softSkills>
    <AllProjects id="portfolio"></AllProjects>
    <footer>
      <div id="contact" class="contact">
        <p>06 61 33 05 28</p>
        <p>stephane.billois@hotmail.com</p>
        <a href="https://www.linkedin.com/in/stephanebillois/"> <img src="./assets/linkedin-in-brands.svg"
            alt="Linkdin"> </a>
        <p><a href="https://www.billois.org/cv_sbillois.pdf">Télécharger mon CV</a></p>
      </div>
    </footer>
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
      reveleEnter: true,
      menuGsm: false,
      age: null
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
    getAge() {
      const year = new Date().getFullYear();
      const age = year + 10;
      return age.toString().slice(-2);
    }
    
  },
  mounted() {
    // Appel de getAge() au montage du composant
    this.age = this.getAge();
  }
}
</script>

<style lang="scss">
$globale-padding: 0 10rem;
$globale-gsm-padding: 0 1rem;

* {
  font-family: "Ubuntu Regular";
}
p {
  font-family: "Ubuntu Light";
}
h2 {
  font-size: 3em;
  color: white;
  @media (max-width: 800px) {
    font-size: 2em;
  }
}
html {
  scroll-behavior: smooth;
}
body {
  background-color: #3f3f3f;
  background-image: url(./assets/1046.jpg);

}
#app {
  min-height: 2000px;

}
header {
  padding: $globale-padding;
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  justify-content: space-between;
  min-height: 5vh;
  position: sticky;
  top: 0px;
  background-color: #333333;
  h1 {
    font-family: "Ubuntu Bold";
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
header .desk{
  background-color: white;
}
.desk {
  @media (max-width: 800px) {
    display: none;
  }
}
.gsm, .menuGsmBtn {
  @media (min-width: 800px) {
    display: none;
  }
  position: fixed;
  right: 0;
}
.headMenu {
  display: flex;
  justify-content: right;
}
.gsm {
  width: 12rem;
  height: 100vh;
  padding: 1em;
  background-color: #333333;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    margin-left: 1em;
  }
  li {
    margin: 1em 0;
  }
  a {
    font-size: 1.3em;
    color: white;
    text-decoration: none;
  }
  img {
    width: 32px;
    cursor: pointer;
  }
}

.menuGsmBtn {
  width: 32px;
  margin: 1.5em;
}

.about, #allSoftSkills {
  background-color: #00000055;
}
.about {
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;

  }
}
.avatar, .aboutText {
  @media (max-width: 800px) {
    margin: 1em;
  }
}
.avatar {
  // margin: 1em 2em 1em 15em;
  text-align: center;
  min-width: 25%;
  img {
    text-align: center;
    border-radius: 50%;
  }
}
.aboutText {
  // margin: 1em 15em 1em 2em;
  * {
    font-size: 1.5rem;
    // text-align: justify;
    color: white;
    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
  p {
    margin-bottom: 1em;
    line-height: 1.5;
  }
  a {
    color: #016a87;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  padding: 3em;
  @media (max-width: 800px) {
    padding: 0;
  }
}

.button {
  font-size: 2rem;
    cursor: pointer;
    color: white;
    background: #333333;
    padding: 2rem;
    text-align: center;
    transition: all .8s;
    @media (min-width: 801px) {
      margin: 20px;
      &:hover {
        background: white;
        color: black;
      }
    }
    @media (max-width: 800px) {
        // width: 150px;
        font-size: 1em;
        margin-top: 15px;
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
  // overflow-y: scroll;
  // overflow-x: hidden;
  position: fixed;
  // top: 10%;
  z-index: 2;
  background-color: #000000cc;
  color: #333;
  //border-left: solid .5rem #519183;
  @media (min-width: 801px) {
    width: 80vw;
    max-height: 80vh;
    
  }
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
  padding: $globale-padding;
  min-height: 100vh;
  @media (max-width: 800px) {
    max-width: 100vw;
    padding: $globale-gsm-padding;
  }
}
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
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
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 4em;
  }
  .content {
    flex-direction: column;
  }
  .screenshot, .textBox {
    width: 100%;
  }
  .btn {
    z-index: 900;
    color: white;
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

footer {
  background-color: #016a87;
  a {
    text-decoration: underline;
    font-family: "Ubuntu Light";
  }
}
.contact {
  display: flex;
  justify-content: space-around;
  padding: 4em;
  * {
    font-size: 1.2em;
    color: white;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 32px;
  }
  @media (max-width: 530px) {
    flex-direction: column;
    text-align: center;
    * {
      margin: 1em 0;
      font-size: 1em;
    }
  }
}

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

.loadingMenu-enter-active {
  animation: loadingMenu 400ms;
}
.loadingMenu-leave-active {
  animation: loadingMenu 400ms reverse;
}

@keyframes loadingMenu {
  0% { transform: translateX(100%);}
  100% { transform: translateY(0);}
}
</style>
