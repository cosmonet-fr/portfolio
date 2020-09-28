<template>
  <div class="modaleScreen" v-if="reveleGroupomania">
    <div class="overlay" @click="toggleModaleGroupomania">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Groupomania</h2>
        <div class="btn" @click="toggleModaleGroupomania">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <transition name="slide-pics">
              <img v-show="indScreenshot === 0" src="../assets/apercu_roupomania.jpg" alt="">
            </transition>
            <transition name="slide-pics">
              <img v-show="indScreenshot === 1" src="../assets/groupomania_screenshot.jpg" alt="">
            </transition>
            <transition name="slide-pics">
              <img v-show="indScreenshot === 2" src="../assets/groupomania_screenshot2.png" alt="">
            </transition>
            <transition name="slide-pics">
              <img v-show="indScreenshot === 3" src="../assets/groupomania_screenshot3.png" alt="">
            </transition>
            <transition name="slide-pics">
              <img v-show="indScreenshot === 4" src="../assets/groupomania_screenshot4.jpg" alt="">
            </transition>

            <div class="navScreenshot">
              <div v-if="indScreenshot === 0" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 0" class="btnRadio" @click="indScreenshot = 0" ></div>
              <div v-if="indScreenshot === 1" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 1" class="btnRadio" @click="indScreenshot = 1" ></div>
              <div v-if="indScreenshot === 2" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 2" class="btnRadio" @click="indScreenshot = 2" ></div>
              <div v-if="indScreenshot === 3" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 3" class="btnRadio" @click="indScreenshot = 3" ></div>
              <div v-if="indScreenshot === 4" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 4" class="btnRadio" @click="indScreenshot = 4" ></div>
            </div>
          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p>
              Le projet “Groupomania” d’Openclassrooms consistait à réaliser un réseau social d’entreprise. L’API à été faite avec Node.Js express et MariaDB, le front-end à été réalisé avec Vue.Js
            </p>
            <p>
              Parmis les fonctionnalités à développer il y avait :
              <ul>
                <li>Création, suppretion et modification de compte avec photo de profile</li>
                <li>Création de message avec ou sans partage d’images (Jpeg, Gif, PNG, SVG, Webp)</li>
                <li>Possibilité d’ajouter des comentairs</li>
                <li>Création suppretion et modification de compte avec photo de profile</li>
                <li>Un panneau d’administration permetant la moderation des comptes utilisateurs et messages</li>
              </ul>
            </p>

            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>Node.Js</li>
                <li>Express</li>
                <li>MariaDB</li>
                <li>Vue.Js</li>
                <li>Sass</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="ModaleFooter">
          <a href="https://github.com/cosmonet-fr/P7_billois_stephane/">
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
  name: 'ModaleGroupomania',
  props: ['reveleGroupomania', 'toggleModaleGroupomania']
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
