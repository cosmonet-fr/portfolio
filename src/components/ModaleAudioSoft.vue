<template>
  <div class="modaleScreen" v-if="reveleAudioSoft">
    <div class="overlay" @click="toggleModaleAudioSoft">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Audio Soft</h2>
        <div class="btn" @click="toggleModaleAudioSoft">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 0" src="../assets/apercu_audio_soft.jpg" alt="">
            <!--</transition>-->


          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p class="warning" >
              Site en cours de développement.
            </p>
            <p>
              Le site devait être 100% administrable via un espace d'administration.
            </p>
            <p>
              Le back-end est developpé en JavaScript et tourne sur le run time Node.js. Le front-end est développé avec Vue.js.
            </p>
            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>HTML</li>
                <li>Sass (SCSS)</li>
                <li>Node.js</li>
                <li>MariaDB</li>
                <li>Vue.js 3</li>
                <li>Vue CLI</li>
                <li>Vue Router</li>
              </ul>
            </p>
          </div>
        </div>

        <div class="ModaleFooter">
          <a href="https://www.audiosoft.fr/">
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
  name: 'ModaleAudioSoft',
  props: ['reveleAudioSoft', 'toggleModaleAudioSoft'],
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
  .warning {
    text-align: center;
    background-color: red;
    font-variant: small-caps;
    font-weight: bold;

  }

</style>
