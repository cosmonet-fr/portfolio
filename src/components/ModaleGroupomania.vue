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
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 0" src="../assets/apercu_roupomania.jpg" alt="">
            <!--</transition>-->
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 1" src="../assets/groupomania_screenshot.jpg" alt="">
            <!--</transition>-->
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 2" src="../assets/groupomania_screenshot2.png" alt="">
            <!--</transition>-->
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 3" src="../assets/groupomania_screenshot3.png" alt="">
            <!--</transition>-->
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 4" src="../assets/groupomania_screenshot4.jpg" alt="">
            <!--</transition>-->

            <div class="navScreenshot">
              <img class="arrow" src="../assets/arrow_left.svg" alt="Flèch" @click="goNextOrBackPicture(-1, 4)">
              <div v-if="indScreenshot === 0" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 0" class="btnRadio" @click="indScreenshot = 0" ></div>
              <div v-if="indScreenshot === 1" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 1" class="btnRadio" @click="indScreenshot = 1" ></div>
              <div v-if="indScreenshot === 2" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 2" class="btnRadio" @click="indScreenshot = 2" ></div>
              <div v-if="indScreenshot === 3" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 3" class="btnRadio" @click="indScreenshot = 3" ></div>
              <div v-if="indScreenshot === 4" class="btnRadio btnRadioActive"></div><div v-if="indScreenshot !== 4" class="btnRadio" @click="indScreenshot = 4" ></div>
              <img class="arrow" src="../assets/arrow_right.svg" alt="Flèch" @click="goNextOrBackPicture(1, 4)">
            </div>
          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p>
              Le projet “Groupomania” d’Openclassrooms consistait à réaliser un réseau social d’entreprise. L’API a été faite avec Node.js, Express et MariaDB. Le front-end a été réalisé avec Vue.js
            </p>
            <p>
              Parmi les fonctionnalités à développer, il y avait :
              <ul>
                <li>la possibilité de créer, de modifier ou de supprimer un compte;</li>
                <li>la possibilité d'ajouter ou de modifier une photo de profil;</li>
                <li>la possibilité de créer, de modifier ou de supprimer des messages;</li>
                <li>la possibilité de joindre un fichier média (Jpeg, Gif, PNG, SVG, Webp) à un message;</li>
                <li>la possibilité d’ajouter, de modifier ou de supprimer des commentaires;</li>
                <li>la création d'un panneau d’administration permettant la modération des comptes utilisateurs et des messages.</li>
              </ul>
            </p>

            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MariaDB</li>
                <li>Vue.js</li>
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
  props: ['reveleGroupomania', 'toggleModaleGroupomania'],
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
