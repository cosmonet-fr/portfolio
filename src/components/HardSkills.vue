<template>
  <div class="hardSkills">
    <h2>Compétences</h2>
    <div class="hardSkillsBox" >

      <div class="skill" @mouseover="html = true" @mouseleave="html = false" >
        <div class="gaugeBox" >
          <img src="../assets/html5-brands.svg" alt="HTML">
          <div class="gauge">
            <div class="p75">
              <p class="technology" v-if="html">HTML 5</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="html" >Le HTML est le langage de balisage à l'orgine du web. Il est utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="css = true" @mouseleave="css = false">
        <div class="gaugeBox">
          <img src="../assets/css3-alt-brands.svg" alt="CSS">
          <div class="gauge" >
            <div class="p75">
              <p class="technology" v-if="css">CSS 3</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="css" >Le CSS est le langage permettant la mise en forme des fichiers HTML. </p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="js = true" @mouseleave="js = false">
        <div class="gaugeBox">
          <img src="../assets/js-brands.svg" alt="CSS">
          <div class="gauge" >
            <div class="p65">
              <p class="technology" v-if="js">JavaScript</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="js" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="node = true" @mouseleave="node = false">
        <div class="gaugeBox">
          <img src="../assets/node-brands.svg" alt="CSS">
          <div class="gauge" >
            <div class="p65">
              <p class="technology" v-if="node">Node.js</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="node" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="vue = true" @mouseleave="vue = false">
        <div class="gaugeBox">
          <img src="../assets/vuejs-brands.svg" alt="CSS">
          <div class="gauge" >
            <div class="p50">
              <p class="technology" v-if="vue">Vue.js</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="vue" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="php = true" @mouseleave="php = false">
        <div class="gaugeBox">
          <img src="../assets/php-brands.svg" alt="CSS">
          <div class="gauge" >
            <div class="p25">
              <p class="technology" v-if="php">PHP 7</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="php" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="wordPress = true" @mouseleave="wordPress = false">
        <div class="gaugeBox">
          <img src="../assets/wordpress-brands.svg" alt="CSS">
          <div class="gauge" >
            <div class="p75">
              <p class="technology" v-if="wordPress">Wordpress</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="wordPress" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="sass = true" @mouseleave="sass = false">
        <div class="gaugeBox">
          <img src="../assets/sass-brands.svg" alt="CSS">
          <div class="gauge" >
            <div class="p65">
              <p class="technology" v-if="sass">Sass</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="sass" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="gnuLinux = true" @mouseleave="gnuLinux = false">
        <div class="gaugeBox">
          <img src="../assets/linux-brands.svg" alt="CSS">
          <div class="gauge" >
            <div class="p75">
              <p class="technology" v-if="gnuLinux">GNU/Linux</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="gnuLinux" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="git = true" @mouseleave="git = false">
        <div class="gaugeBox">
          <img src="../assets/git-alt-brands.svg" alt="CSS">
          <div class="gauge" >
            <div class="p65">
              <p class="technology" v-if="git">Git</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="git" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill" @mouseover="photoshop = true" @mouseleave="photoshop = false">
        <div class="gaugeBox">
          <img class="ps" src="../assets/ps-icon.png" alt="CSS">
          <div class="gauge" >
            <div class="p65">
              <p class="technology" v-if="photoshop">Adobe Photoshop</p>
            </div>
          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
            <p v-if="photoshop" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
          </transition>
        </div>
      </div>

      <div class="skill invisible">
        <div class="gaugeBox">
          <img class="ps" src="../assets/ps-icon.png" alt="CSS">
          <div class="gauge" >

          </div>
        </div>
        <div class="def">
          <transition name="slide-fade" >
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
        vue: false,
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
  }
  .hardSkillsBox {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    * {
      color: #ffffff;
    }
    margin: 10em;
  }
  .skill {
    margin-bottom: 3rem;
  }
  .gaugeBox {
    display: flex;
  }
  .gauge, .def {
    width: 30rem;
    //cursor: help;
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
  .technology {
    padding-left: 1em;
    padding-top: .5em;
    font-weight: bold;
  }
  .def {
    margin-left: 5rem;
    position: absolute;
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
