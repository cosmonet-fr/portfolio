<template>
  <div class="modaleScreen" v-if="reveleChouette">
    <div class="overlay" @click="toggleModaleChouette">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Chouette</h2>
        <div class="btn" @click="toggleModaleChouette">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <transition name="slide-pics">
              <img v-show="indScreenshot === 0" src="../assets/apercu_chouette.jpg" alt="">
            </transition>
            <transition name="slide-pics">
              <img v-show="indScreenshot === 1" src="../assets/chouette_screenshot.png" alt="">
            </transition>

            <div class="navScreenshot">
              <div v-if="indScreenshot === 0" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 0" class="btnRadio" @click="indScreenshot = 0" ></div>
              <div v-if="indScreenshot === 1" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 1" class="btnRadio" @click="indScreenshot = 1" ></div>
            </div>
          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p>
              Le projet « La Chouette Agence » d’Openclassrooms consistait à optimiser le référencement SEO d’un site web, et de le modifier pour qu’il soit conforme aux règles du “Web Content Accessibility Guidelines” (WCAG) du W3C.
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
          <a href="https://github.com/cosmonet-fr/P4_billois_stephane/">
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
  name: 'ModaleChouette',
  props: ['reveleChouette', 'toggleModaleChouette']
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
