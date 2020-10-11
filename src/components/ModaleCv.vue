<template>
  <div class="modaleScreen" v-if="reveleCv">
    <div class="overlay" @click="toggleModaleCv">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Curriculum vitæ</h2>
        <div class="btn" @click="toggleModaleCv">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 0" src="../assets/apercu_cv.jpg" alt="">
            <!--</transition>-->
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 1" src="../assets/cv_screenshot.png" alt="">
            <!--</transition>-->

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
              J’ai créé ce site web pour partager mon CV en ligne.
            </p>
            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>HTML</li>
                <li>CSS / Sass</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="ModaleFooter">
          <a href="https://github.com/cosmonet-fr/cv/">
            <img src="../assets/github-brands.svg" alt="Code sur GitHub">
          </a>
          <a href="https://cv.billois.org/">
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
  name: 'ModaleCv',
  props: ['reveleCv', 'toggleModaleCv'],
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
    font-size: 2em;
  }
  h3 {
    margin: 1em 0 .2em 0;
  }
  p {
    margin: .5em 0;
    text-align: justify;
  }

</style>
