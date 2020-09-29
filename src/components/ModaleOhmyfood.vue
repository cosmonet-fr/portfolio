<template>
  <div class="modaleScreen" v-if="reveleOhmyfood">
    <div class="overlay" @click="toggleModaleOhmyfood">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Ohmyfood</h2>
        <div class="btn" @click="toggleModaleOhmyfood">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 0" src="../assets/apercu_ohmyfood.jpg" alt="">
            <!--</transition>-->
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 1" src="../assets/ohmyfood_screenshot.png" alt="">
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
              Le projet “ohmyfood” d’Openclassrooms consistait à réaliser un site référençant les menus de restaurants. Le site devait être responsive et utiliser des animations CSS modernes (Keyframes), en partant d’une <a href="http://portfolio.billois.org/portfolio/wp-content/uploads/2020/08/planche-1b.png">maquette fournie par Openclassrooms</a>.
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
          <a href="https://github.com/cosmonet-fr/P3_billois_stephane/">
            <img src="../assets/github-brands.svg" alt="Code sur GitHub">
          </a>
          <a href="https://cosmonet-fr.github.io/P3_billois_stephane/">
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
  name: 'Modale',
  props: ['reveleOhmyfood', 'toggleModaleOhmyfood'],
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
