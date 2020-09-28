<template>
  <div class="modaleScreen" v-if="reveleOrinoco">
    <div class="overlay" @click="toggleModaleOrinoco">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Orinoco</h2>
        <div class="btn" @click="toggleModaleOrinoco">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <transition name="slide-pics">
              <img v-show="indScreenshot === 0" src="../assets/apercu_orinoco.jpg" alt="">
            </transition>
            <transition name="slide-pics">
              <img v-show="indScreenshot === 1" src="../assets/orinoco_screenshot.png" alt="">
            </transition>

            <div class="navScreenshot">
              <div v-if="indScreenshot === 0" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 0" class="btnRadio" @click="indScreenshot = 0" ></div>
              <div v-if="indScreenshot === 1" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 1" class="btnRadio" @click="indScreenshot = 1" ></div>
            </div>
          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p>
              Le projet “Orinoco” d’Openclassrooms consistait à réaliser la partie front-end d’un site de e-commerce pour la vente d’appareils photos vintage. Il fallait interagir avec une API Rest codée pour node.js.
            </p>
            <p>
              Le site web devait avoir un system de panier développé en JavaScript Vanilla, il fallait également contrôler les entrées du formulair de commande (Regex).
            </p>
            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>HTML</li>
                <li>CSS / Sass</li>
                <li>JavaScript</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="ModaleFooter">
          <a href="https://github.com/cosmonet-fr/P5_billois_stephane/">
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
  name: 'ModaleOrinoco',
  props: ['reveleOrinoco', 'toggleModaleOrinoco']
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
