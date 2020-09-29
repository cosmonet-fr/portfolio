<template>
  <div class="modaleScreen" v-if="reveleMichelin">
    <div class="overlay" @click="toggleModaleMichelin">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Michelin</h2>
        <div class="btn" @click="toggleModaleMichelin">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <transition name="slide-pics">
              <img v-show="indScreenshot === 0" src="../assets/apercu_michelin.jpg" alt="">
            </transition>
            <!--<transition name="slide-pics">
              <img v-show="indScreenshot === 1" src="../assets/michelin_screenshot.png" alt="">
            </transition>-->

            <!--<div class="navScreenshot">
              <div v-if="indScreenshot === 0" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 0" class="btnRadio" @click="indScreenshot = 0" ></div>
              <div v-if="indScreenshot === 1" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 1" class="btnRadio" @click="indScreenshot = 1" ></div>
            </div>-->
          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p>
              Au cours d’un stage dans l'entreprise <a href="http://www.audiosoft.fr/">Audio Soft</a>, il m’a été demandé de réaliser un prototype d’une web app basée sur les technologies web pour contrôler le lancement de vidéos dans le musée “L’Aventure Michelin”. L’application devait tourner sur un IPad avec le navigateur Google Chrome.
            </p>

            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="ModaleFooter">
          <a href="https://github.com/cosmonet-fr/michelin/">
            <img src="../assets/github-brands.svg" alt="Code sur GitHub">
          </a>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      indScreenshot: 0,
    }
  },
  name: 'ModaleMichelin',
  props: ['reveleMichelin', 'toggleModaleMichelin']
}
</script>

<style scoped lang="scss">
  * {
    color: white;
  }
  h2 {
    margin: .5em 1em;
  }
  h3 {
    margin: 1em 0 .2em 0;
  }
  p {
    margin: .5em 0;
    text-align: justify;
  }

</style>
