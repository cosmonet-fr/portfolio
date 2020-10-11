<template>
  <div class="modaleScreen" v-if="revelePiquante">
    <div class="overlay" @click="toggleModalePiquante">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Piquante</h2>
        <div class="btn" @click="toggleModalePiquante">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 0" src="../assets/apercu_piquante.jpg" alt="">
            <!--</transition>-->
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 1" src="../assets/piquante_screenshot.png" alt="">
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
              Le projet « Piquante » d’Openclassrooms consistait à réaliser une API Rest de notation de sauces. Le développement devait interagir avec une application web Angular.
            </p>

            <p>
              Parmi les fonctionnalités à développer, il y avait:
              <ul>
                <li>la création et la suppression de comptes;</li>
                <li>l'ajout, la modification et la suppression de produits (Sauces) avec images;</li>
                <li>un système de likes/dislikes;</li>
                <li>le stockage des données devait respecter les règles de l’OWASP.</li>
              </ul>
            </p>

            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="ModaleFooter">
          <a href="https://github.com/cosmonet-fr/P6_billois_stephane/">
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
  name: 'ModalePiquante',
  props: ['revelePiquante', 'toggleModalePiquante'],
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
