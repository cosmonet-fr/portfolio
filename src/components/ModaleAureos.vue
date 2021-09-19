<template>
  <div class="modaleScreen" v-if="reveleAureos">
    <div class="overlay" @click="toggleModaleAureos">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Aureos</h2>
        <div class="btn" @click="toggleModaleAureos">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <!--<transition name="slide-pics">-->
              <img v-show="indScreenshot === 0" src="../assets/apercu_aureos.jpg" alt="">
            <!--</transition>-->


          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p>
              Le site est un site vitrine statique pour promouvoir le travail d'une graphiste illustratrice.
            </p>

            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>HTML</li>
                <li>Sass (SCSS)</li>
                <li>Vue.js 2</li>
                <li>Vue CLI</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="ModaleFooter">
          <div class="ModaleFooter">
            <a href="http://old.aureos.fr/">
              <img src="../assets/link-solid.svg" alt="Lien du site">
            </a>
          </div>
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
  name: 'ModaleAureos',
  props: ['reveleAureos', 'toggleModaleAureos'],
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
