<template>
  <div class="allProjects">

    <modale_orinoco v-bind:reveleOrinoco="reveleOrinoco" v-bind:toggleModaleOrinoco="toggleModaleOrinoco"></modale_orinoco>
    <div class="oneProject orinoco"  @click="toggleModaleOrinoco" @mouseover="orinoco = true" @mouseleave="orinoco = false">
      <transition name="slide-fade">
        <div class="text" v-show="orinoco">
          <h2>Orinoco</h2>
          <p>Réalisation d'un site de e-commerce.</p>
        </div>
      </transition>
    </div>

    <modale_groupomania v-bind:reveleGroupomania="reveleGroupomania" v-bind:toggleModaleGroupomania="toggleModaleGroupomania"></modale_groupomania>
    <div class="oneProject groupomania" @click="toggleModaleGroupomania" @mouseover="groupomania = true" @mouseleave="groupomania = false">
      <transition name="slide-fade">
        <div class="text" v-show="groupomania">
          <h2>Groupomania</h2>
          <p>Réalisation d'un réseau social d'entreprise.</p>
        </div>
      </transition>
    </div>

    <modale_piquante v-bind:revelePiquante="revelePiquante" v-bind:toggleModalePiquante="toggleModalePiquante"></modale_piquante>
    <div class="oneProject sauce" @click="toggleModalePiquante" @mouseover="sauce = true" @mouseleave="sauce = false">
      <transition name="slide-fade">
        <div class="text" v-show="sauce">
          <h2>Piquante</h2>
          <p>Réalisation d'une API de notation de sauces.</p>
        </div>
      </transition>
    </div>

    <modale_ohmyfood v-bind:reveleOhmyfood="reveleOhmyfood" v-bind:toggleModaleOhmyfood="toggleModaleOhmyfood"></modale_ohmyfood>
    <div class="oneProject ohmyfood" @click="toggleModaleOhmyfood" @mouseover="ohmyfood = true" @mouseleave="ohmyfood = false">
      <transition name="slide-fade">
        <div class="text" v-show="ohmyfood">
          <h2>ohmyfood</h2>
          <p>Réalisation d'un site référençant les menus de restaurants.</p>
        </div>
      </transition>
    </div>

    <modale_babm v-bind:reveleBabm="reveleBabm" v-bind:toggleModaleBabm="toggleModaleBabm"></modale_babm>
    <div class="oneProject babm" @click="toggleModaleBabm" @mouseover="babm = true" @mouseleave="babm = false">
      <transition name="slide-fade">
        <div class="text" v-show="babm">
          <h2>Belles Autos, belles motos</h2>
          <p>Réalisation d'un site de présentation d'un événement.</p>
        </div>
      </transition>
    </div>

    <modale_chouette v-bind:reveleChouette="reveleChouette" v-bind:toggleModaleChouette="toggleModaleChouette"></modale_chouette>
    <div class="oneProject chouette" @click="toggleModaleChouette" @mouseover="chouette = true" @mouseleave="chouette = false">
      <transition name="slide-fade">
        <div class="text" v-show="chouette">
          <h2>La chouette agence</h2>
          <p>Obtimisation de l'accessibilité et du SEO pour le site d'une agence de communication.</p>
        </div>
      </transition>
    </div>

    <modale_cv v-bind:reveleCv="reveleCv" v-bind:toggleModaleCv="toggleModaleCv"></modale_cv>
    <div class="oneProject cv" @click="toggleModaleCv" @mouseover="cv = true" @mouseleave="cv = false">
      <transition name="slide-fade">
        <div class="text" v-show="cv">
          <h2>Curriculum vitae</h2>
          <p>Réalisation de mon CV en ligne.</p>
        </div>
      </transition>
    </div>

    <modale_michelin v-bind:reveleMichelin="reveleMichelin" v-bind:toggleModaleMichelin="toggleModaleMichelin"></modale_michelin>
    <div class="oneProject michelin" @click="toggleModaleMichelin" @mouseover="michelin = true" @mouseleave="michelin = false">
      <transition name="slide-fade">
        <div class="text" v-show="michelin">
          <h2>Michelin</h2>
          <p>Réalisation d'un prototype d'une web app pour un musée.</p>
        </div>
      </transition>
    </div>


  </div>

</template>

<script>
  import ModaleOrinoco from './ModaleOrinoco.vue'
  import ModaleGroupomania from './ModaleGroupomania.vue'
  import ModalePiquante from './ModalePiquante.vue'
  import ModaleOhmyfood from './ModaleOhmyfood.vue'
  import ModaleBabm from './ModaleBabm.vue'
  import ModaleChouette from './ModaleChouette.vue'
  import ModaleCv from './ModaleCv.vue'
  import ModaleMichelin from './ModaleMichelin.vue'
  export default {
    data: function () {
      return {
        orinoco: false,
        groupomania: false,
        sauce: false,
        ohmyfood: false,
        babm: false,
        chouette: false,
        cv: false,
        michelin: false,
        reveleOrinoco: false,
        reveleGroupomania: false,
        revelePiquante: false,
        reveleOhmyfood: false,
        reveleBabm: false,
        reveleChouette: false,
        reveleCv: false,
        reveleMichelin: false
      }
    },
    name: 'AllProjects',
    components: {
      'modale_orinoco': ModaleOrinoco,
      'modale_groupomania': ModaleGroupomania,
      'modale_piquante': ModalePiquante,
      'modale_ohmyfood': ModaleOhmyfood,
      'modale_babm': ModaleBabm,
      'modale_chouette': ModaleChouette,
      'modale_cv': ModaleCv,
      'modale_michelin': ModaleMichelin
    },
    methods: {
      toggleModaleOrinoco: function() {
        this.reveleOrinoco = !this.reveleOrinoco
      },
      toggleModaleGroupomania: function() {
        this.reveleGroupomania = !this.reveleGroupomania
      },
      toggleModalePiquante: function() {
        this.revelePiquante = !this.revelePiquante
      },
      toggleModaleOhmyfood: function() {
        this.reveleOhmyfood = !this.reveleOhmyfood
      },
      toggleModaleBabm: function() {
        this.reveleBabm = !this.reveleBabm
      },
      toggleModaleChouette: function() {
        this.reveleChouette = !this.reveleChouette
      },
      toggleModaleCv: function() {
        this.reveleCv = !this.reveleCv
      },
      toggleModaleMichelin: function() {
        this.reveleMichelin = !this.reveleMichelin
      }
    }
  }
</script>

<style scoped lang="scss">
  .allProjects {
    z-index: 0;
    margin: 5em 4em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .oneProject {
    cursor: pointer;
    margin: 1.5em;
    width: 20rem;
    height: 20rem;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .orinoco { background-image: url(../assets/orinoco.jpg);}
  .groupomania { background-image: url(../assets/groupomania.jpg); }
  .sauce { background-image: url(../assets/piquante.jpg); }
  .ohmyfood { background-image: url(../assets/ohmyfood.jpg); }
  .babm { background-image: url(../assets/babm.jpg); /*filter: saturate(0);*/}
  .chouette { background-image: url(../assets/chouette.jpg); }
  .cv { background-image: url(../assets/moi.png); }
  .michelin { background-image: url(../assets/michelin.jpg); }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #ffffff99;
    * {
      text-align: center;
    }
    h2 {
      font-size: 2.5em;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s;
  }
  .slide-fade-enter, .slide-fade-leave-to {
  //transform: translateX(-10em);
  opacity: 0;
}

</style>
