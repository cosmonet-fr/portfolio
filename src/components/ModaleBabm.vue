<template>
  <div class="modaleScreen" v-if="reveleBabm">
    <div class="overlay" @click="toggleModaleBabm">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Belles Autos, Belles Motos</h2>
        <div class="btn" @click="toggleModaleBabm">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <transition name="slide-pics">
              <img v-show="indScreenshot === 0" src="../assets/apercu_babm.jpg" alt="">
            </transition>
            <transition name="slide-pics">
              <img v-show="indScreenshot === 1" src="../assets/babm_screenshot.png" alt="">
            </transition>

            <div class="navScreenshot">
              <img class="arrow" src="../assets/arrow_left.svg" alt="Flèch" @click="goNextOrBackPicture(-1, 1)">
              <div v-if="indScreenshot === 0" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 0" class="btnRadio" @click="indScreenshot = 0" ></div>
              <div v-if="indScreenshot === 1" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 1" class="btnRadio" @click="indScreenshot = 1" ></div>
              <img class="arrow" src="../assets/arrow_right.svg" alt="Flèch" @click="goNextOrBackPicture(1, 1)">
            </div>
          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p>
              Au cours d’un stage d’immersion professionnelle dans la société <a href="https://www.openstudio.fr/">OpenStudio</a>, j’ai reçu la mission de réaliser en autonomie le site <a href="https://babm.fr">babm.fr</a> à partir d’une maquette graphique.
            </p>
            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>WordPress</li>
                <li>Plugin ACF (Pour WordPress)</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="ModaleFooter">
          <a href="https://www.babm.fr/">
            <img src="../assets/link-solid.svg" alt="Lien du site">
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
  name: 'ModaleBabm',
  props: ['reveleBabm', 'toggleModaleBabm'],
  methods: {
    goNextOrBackPicture: function (direction, lengthPlayer) {
      if (direction === 1) {
        if (this.indScreenshot < lengthPlayer) {
          this.indScreenshot = this.indScreenshot + direction;
        } else {
          this.indScreenshot = 0;
        }
      } else if (direction === -1) {
        if (this.indScreenshot !== 0) {
          this.indScreenshot = this.indScreenshot + direction;
        } else {
          this.indScreenshot = lengthPlayer;
        }

      }
    }
  }
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
