<template>
  <div class="hardSkills">
    <h2>Compétences</h2>
    <h3>Développement</h3>
    <hr>
    <div class="hardSkillsBox">

      <div class="skill" @mouseover="html = true" @mouseleave="html = false">
        <div class="gaugeBox">
          <img src="../assets/html5-brands.svg" alt="HTML">
          <div class="gauge">
            <div class="p90">
              <p class="technology" v-if="html">HTML 5</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="html">Le HTML est le langage de balisage à l'orgine du web. Il est utilisé pour afficher le contenu
              d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="css = true" @mouseleave="css = false">
        <div class="gaugeBox">
          <img src="../assets/css3-alt-brands.svg" alt="CSS">
          <div class="gauge">
            <div class="p90">
              <p class="technology" v-if="css">CSS 3</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="css">Le CSS est le langage permettant la mise en forme des fichiers HTML. </p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="js = true" @mouseleave="js = false">
        <div class="gaugeBox">
          <img src="../assets/js-brands.svg" alt="CSS">
          <div class="gauge">
            <div class="p90">
              <p class="technology" v-if="js">JavaScript</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="js">Le JavaScript est le langage de programmation intégré dans les navigateurs web modernes et
              utilisé pour le front-end.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="node = true" @mouseleave="node = false">
        <div class="gaugeBox">
          <img src="../assets/node-brands.svg" alt="CSS">
          <div class="gauge">
            <div class="p90">
              <p class="technology" v-if="node">Node.js</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="node">Node.js permet d'exécuter du code JavaScript du côté serveur. Il peut être utilisé pour créer
              une API.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="bun = true" @mouseleave="bun = false">
        <div class="gaugeBox">
          <img src="../assets/bun-icon.svg" alt="CSS">
          <div class="gauge">
            <div class="p65">
              <p class="technology" v-if="bun">Bun</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="bun">Bun est un autre runtime Javascript concurant de Node.js. Il propose son propre package
              manager, et peut exécuter du Rust.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="rust = true" @mouseleave="rust = false">
        <div class="gaugeBox">
          <img src="../assets/rust-brands-solid.svg" alt="CSS">
          <div class="gauge">
            <div class="p35">
              <p class="technology" v-if="rust">Rust</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="rust">Rust est un langage de programmation compilé multi-paradigme, champion de la performance et
              de la sécurité !</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="vue = true" @mouseleave="vue = false">
        <div class="gaugeBox">
          <img src="../assets/vuejs-brands.svg" alt="CSS">
          <div class="gauge">
            <div class="p90">
              <p class="technology" v-if="vue">Vue.js</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="vue">Vue.js, est un framework JavaScript open-source utilisé pour construire des interfaces
              utilisateur et des applications web.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="react = true" @mouseleave="react = false">
        <div class="gaugeBox">
          <img src="../assets/react-brands-solid.svg" alt="CSS">
          <div class="gauge">
            <div class="p35">
              <p class="technology" v-if="react">React Native</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="react">React Native est un framework d'applications principalement mobile. Il permet de créer des
              applications natives à partir de code Javascript.</p>
          </transition>
        </div>
      </div>

      <!--  -->
      <div class="skill" @mouseover="cypress = true" @mouseleave="cypress = false">
        <div class="gaugeBox">
          <img src="../assets/cypress-io-logo-round-flat.svg" alt="cypress">
          <div class="gauge">
            <div class="p50">
              <p class="technology" v-if="cypress">Cypress</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="cypress">Cypress est un framework de test automatisé (end-to-end) conçu pour tester des
              applications web.</p>
          </transition>
        </div>
      </div>
      <!--  -->

      <div class="skill" @mouseover="php = true" @mouseleave="php = false">
        <div class="gaugeBox">
          <img src="../assets/php-brands.svg" alt="CSS">
          <div class="gauge">
            <div class="p25">
              <p class="technology" v-if="php">PHP</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="php">PHP est un langage de programmation utilisé pour produire des pages web dynamiques.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="wordPress = true" @mouseleave="wordPress = false">
        <div class="gaugeBox">
          <img src="../assets/wordpress-brands.svg" alt="CSS">
          <div class="gauge">
            <div class="p75">
              <p class="technology" v-if="wordPress">Wordpress</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="wordPress">WordPress est le CMS le plus utilisé au monde.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="sass = true" @mouseleave="sass = false">
        <div class="gaugeBox">
          <img src="../assets/sass-brands.svg" alt="CSS">
          <div class="gauge">
            <div class="p65">
              <p class="technology" v-if="sass">Sass</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="sass">Sass est un préprocesseur CSS. C'est un langage de description compilé en CSS.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="gnuLinux = true" @mouseleave="gnuLinux = false">
        <div class="gaugeBox">
          <img src="../assets/linux-brands.svg" alt="CSS">
          <div class="gauge">
            <div class="p75">
              <p class="technology" v-if="gnuLinux">GNU/Linux</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="gnuLinux">GNU/Linux est un système d'exploitation libre proche d'Unix, très utilisé sur les
              serveurs.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="git = true" @mouseleave="git = false">
        <div class="gaugeBox">
          <img src="../assets/git-alt-brands.svg" alt="CSS">
          <div class="gauge">
            <div class="p65">
              <p class="technology" v-if="git">Git</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="git">Git est un logiciel de gestion de versions.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="photoshop = true" @mouseleave="photoshop = false">
        <div class="gaugeBox">
          <img class="ps" src="../assets/ps-icon.png" alt="CSS">
          <div class="gauge">
            <div class="p65">
              <p class="technology" v-if="photoshop">Photoshop</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
            <p v-if="photoshop">Adobe Photoshop est la référence en matière de retouche d'images.</p>
          </transition>
        </div>
      </div>

      <div class="skill invisible">
        <div class="gaugeBox">
          <img class="ps" src="../assets/ps-icon.png" alt="CSS">
          <div class="gauge">

          </div>
        </div>
        <div class="def">
          <transition name="slide-fade">
          </transition>
        </div>
      </div>

    </div>



  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        html: false,
        css: false,
        sass: false,
        js: false,
        node: false,
        bun: false,
        rust: false,
        vue: false,
        react: false,
        cypress: false,
        php: false,
        wordPress: false,
        gnuLinux: false,
        git: false,
        photoshop: false,
      }
    }
  }
</script>
<style scoped lang="scss">
  .hardSkills {
    margin: 5em;
    h2 {
      text-align: center;
    }
    h3 {
      color: #ffffff;
    }
    @media (max-width: 800px) {
      margin: 5em 0;
    }
  }
  .hardSkillsBox {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    * {
      color: #ffffff;
    }
    margin: 10em;
    @media (max-width: 800px) {
      margin: 2em;
    }
  }
  .skill {
    margin-bottom: 3rem;
    @media (max-width: 800px) {
      margin-bottom: 4rem;
    }
  }
  .gaugeBox {
    display: flex;
  }
  .gauge, .def {
    width: 30rem;
    //cursor: help;
    @media (max-width: 800px) {
      width: 10rem;
    }
  }
  .gauge {
    margin: .5em 0;
    height: 2rem;
    background-color: gray;
  }
  .p25 {
    animation: gauge25 2s;
    width: 25%;
    height: 2rem;
    background-color: #04617b;
  }
    .p35 {
      animation: gauge25 2s;
      width: 35%;
      height: 2rem;
      background-color: #04617b;
    }
  .p50 {
    animation: gauge50 2s;
    width: 50%;
    height: 2rem;
    background-color: #04617b;
  }
  .p65 {
    animation: gauge65 2s;
    width: 65%;
    height: 2rem;
    background-color: #04617b;
  }
  .p75 {
    animation: gauge75 2s;
    width: 75%;
    height: 2rem;
    background-color: #04617b;
  }
  .p90 {
    animation: gauge90 2s;
    width: 90%;
    height: 2rem;
    background-color: #04617b;
  }
  .technology {
    padding-left: 1em;
    padding-top: .5em;
    font-weight: bold;
  }
  .def {
    margin-left: 5rem;
    position: absolute;
    @media (max-width: 800px) {
      font-size: 11px;
    }
  }
  img {
    margin: 0 1em;
    width: 2.5rem;
  }
  .ps {
    height: 2.5rem;
  }
  @keyframes gauge25 {
    0% { width: 0; }
    100% { width: 25%;}
  }
    @keyframes gauge35 {
      0% {
        width: 0;
      }
  
      100% {
        width: 35%;
      }
    }
  @keyframes gauge50 {
    0% { width: 0; }
    100% { width: 50%;}
  }
  @keyframes gauge65 {
    0% { width: 0; }
    100% { width: 65%;}
  }
  @keyframes gauge75 {
    0% { width: 0; }
    100% { width: 75%;}
  }
    @keyframes gauge90 {
      0% {
        width: 0;
      }
  
      100% {
        width: 90%;
      }
    }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
.invisible {
  opacity: 0;
  cursor: auto;
}
</style>
