<template>
  <div class="portfolio">
    <h2>Portfolio</h2>
    <div class="allProjects">




      <transition name="loadingModaleWindow">
        <modale_orinoco v-if="reveleOrinoco" v-bind:reveleOrinoco="reveleOrinoco" v-bind:toggleModaleOrinoco="toggleModaleOrinoco"></modale_orinoco>
      </transition>
      <div class="oneProject orinoco"  @click="toggleModaleOrinoco" @mouseover="orinoco = true" @mouseleave="orinoco = false">
        <transition name="slide-fade">
          <div class="text" v-show="orinoco">
            <h2>Orinoco</h2>
            <p>Réalisation d'un site de e-commerce.</p>
          </div>
        </transition>
        <div class="menuGsm">
          <h2>Orinoco</h2>
          <p>Réalisation d'un site de e-commerce.</p>
        </div>
      </div>


      <transition name="loadingModaleWindow">
        <modale_groupomania v-if="reveleGroupomania" v-bind:reveleGroupomania="reveleGroupomania" v-bind:toggleModaleGroupomania="toggleModaleGroupomania"></modale_groupomania>
      </transition>
      <div class="oneProject groupomania" @click="toggleModaleGroupomania" @mouseover="groupomania = true" @mouseleave="groupomania = false">
        <transition name="slide-fade">
          <div class="text" v-show="groupomania">
            <!--<h2>Groupomania</h2>-->
            <h2>Social<br /><span>Network</span></h2>
            <p>Réalisation d'un réseau social d'entreprise.</p>
          </div>
        </transition>
        <div class="menuGsm">
          <!--<h2>Groupomania</h2>-->
          <h2>Social<br /><span>Network</span></h2>
          <p>Réalisation d'un réseau social d'entreprise.</p>
        </div>
      </div>


      <transition name="loadingModaleWindow">
        <modale_piquante v-if="revelePiquante" v-bind:revelePiquante="revelePiquante" v-bind:toggleModalePiquante="toggleModalePiquante"></modale_piquante>
      </transition>
      <div class="oneProject sauce" @click="toggleModalePiquante" @mouseover="sauce = true" @mouseleave="sauce = false">
        <transition name="slide-fade">
          <div class="text pi" v-show="sauce">
            <h2>Piquante</h2>
            <p>Réalisation d'une API de notation de sauces.</p>
          </div>
        </transition>
        <div class="menuGsm pi">
          <h2>Piquante</h2>
          <p>Réalisation d'une API de notation de sauces.</p>
        </div>
      </div>


      <transition name="loadingModaleWindow">
        <modale_ohmyfood v-if="reveleOhmyfood" v-bind:reveleOhmyfood="reveleOhmyfood" v-bind:toggleModaleOhmyfood="toggleModaleOhmyfood"></modale_ohmyfood>
      </transition>
      <div class="oneProject ohmyfood" @click="toggleModaleOhmyfood" @mouseover="ohmyfood = true" @mouseleave="ohmyfood = false">
        <transition name="slide-fade">
          <div class="text oh" v-show="ohmyfood">
            <h2>ohmyfood</h2>
            <!--<div class="">
            <img src="../assets/oh.png" alt="BABM">
          </div>-->
          <p>Réalisation d'un site référençant les menus de restaurants.</p>
        </div>
      </transition>
      <div class="menuGsm oh">
        <h2>ohmyfood</h2>
        <!--<div class="">
        <img src="../assets/oh.png" alt="BABM">
      </div>-->
      <p>Réalisation d'un site référençant les menus de restaurants.</p>
    </div>
  </div>


  <transition name="loadingModaleWindow">
    <modale_babm v-if="reveleBabm" v-bind:reveleBabm="reveleBabm" v-bind:toggleModaleBabm="toggleModaleBabm"></modale_babm>
  </transition>
  <div class="oneProject babm" @click="toggleModaleBabm" @mouseover="babm = true" @mouseleave="babm = false">
    <transition name="slide-fade">
      <div class="text" v-show="babm">
        <img src="../assets/logo_babm.png" alt="BABM">
        <p>Réalisation d'un site de présentation d'un événement.</p>
      </div>
    </transition>
    <div class="menuGsm">
      <img src="../assets/logo_babm.png" alt="BABM">
      <p>Réalisation d'un site de présentation d'un événement.</p>
    </div>
  </div>


  <transition name="loadingModaleWindow">
    <modale_chouette v-if="reveleChouette" v-bind:reveleChouette="reveleChouette" v-bind:toggleModaleChouette="toggleModaleChouette"></modale_chouette>
  </transition>
  <div class="oneProject chouette" @click="toggleModaleChouette" @mouseover="chouette = true" @mouseleave="chouette = false">
    <transition name="slide-fade">
      <div class="text ch" v-show="chouette">
        <h2>La chouette agence</h2>
        <p>Optimisation de l'accessibilité et du SEO pour le site d'une agence de communication.</p>
      </div>
    </transition>
    <div class="menuGsm ch">
      <h2>La chouette agence</h2>
      <p>Optimisation de l'accessibilité et du SEO pour le site d'une agence de communication.</p>
    </div>
  </div>


  <!--<transition name="loadingModaleWindow">
    <modale_cv v-if="reveleCv" v-bind:reveleCv="reveleCv" v-bind:toggleModaleCv="toggleModaleCv"></modale_cv>
  </transition>
  <div class="oneProject cv" @click="toggleModaleCv" @mouseover="cv = true" @mouseleave="cv = false">
    <transition name="slide-fade">
      <div class="text" v-show="cv">
        <h2>Curriculum vitae</h2>
        <p>Réalisation de mon CV en ligne.</p>
      </div>
    </transition>
    <div class="menuGsm">
      <h2>Curriculum vitae</h2>
      <p>Réalisation de mon CV en ligne.</p>
    </div>
  </div>-->


  <transition name="loadingModaleWindow">
    <modale_michelin v-if="reveleMichelin" v-bind:reveleMichelin="reveleMichelin" v-bind:toggleModaleMichelin="toggleModaleMichelin"></modale_michelin>
  </transition>
  <div class="oneProject michelin" @click="toggleModaleMichelin" @mouseover="michelin = true" @mouseleave="michelin = false">
    <transition name="slide-fade">
      <div class="text mi" v-show="michelin">
        <h2>AudioSoft</h2>
        <p>Réalisation d'un prototype d'une web app pour un musée.</p>
      </div>
    </transition>
    <div class="menuGsm mi">
      <h2>AudioSoft</h2>
      <p>Réalisation d'un prototype d'une web app pour un musée.</p>
    </div>
  </div>


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
  //import ModaleCv from './ModaleCv.vue'
  import ModaleMichelin from './ModaleMichelin.vue'
  export default {
    data: function () {
      return {
        orinoco: false,
        orinocoGsm: false,
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
    name: 'portfolio',
    components: {
      'modale_orinoco': ModaleOrinoco,
      'modale_groupomania': ModaleGroupomania,
      'modale_piquante': ModalePiquante,
      'modale_ohmyfood': ModaleOhmyfood,
      'modale_babm': ModaleBabm,
      'modale_chouette': ModaleChouette,
      //'modale_cv': ModaleCv,
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
      //toggleModaleCv: function() {
      //  this.reveleCv = !this.reveleCv
      //},
      toggleModaleMichelin: function() {
        this.reveleMichelin = !this.reveleMichelin
      }
    }
  }
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quintessential&display=swap");

  .portfolio {
    h2 {
      margin-top: 2em;
      text-align: center;
    }
  }
  .allProjects {
    z-index: 0;
    margin: 5em 4em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 800px) {
      margin: 3em 2em;
    }
  }
  .oneProject {
    animation: loadingPage 800ms;
    cursor: pointer;
    margin: 1.5em;
    width: 20rem;
    height: 20rem;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 800px) {
      margin: .5em;
      width: 15rem;
      height: 15rem;
    }
  }
  .orinoco { background-image: url(../assets/orinoco.jpg); }
  .groupomania { background-image: url(../assets/groupomania.jpg); }
  .sauce { background-image: url(../assets/piquante.jpg); }
  .ohmyfood { background-image: url(../assets/ohmyfood.jpg); }
  .babm { background-image: url(../assets/babm.jpg); /*filter: saturate(0);*/}
  .chouette { background-image: url(../assets/chouette.jpg); }
  .cv { background-image: url(../assets/moi.jpg); }
  .michelin { background-image: url(../assets/AudioSoft.png); }

  .menuGsm {
    @media (min-width: 800px) {
      display: none;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #99999955;
    * {
      text-align: center;
      color: white;
    }
    h2 {
      font-size: 1.5em;
      span {
        font-weight: normal;
        color: #fd2d01;
        //position: relative;
        //left: 25px;
      }
    }
    p {
      font-size: 1.1rem;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #9999;
    * {
      text-align: center;
      color: white;
    }
    h2 {
      font-size: 2.5em;
      span {
        font-weight: normal;
        color: #fd2d01;
        //position: relative;
        //left: 50px;
      }
    }
    p {
      font-size: 1.5rem;
    }
  }
  .pi {
    h2 {
      color: #de0300;
    }
  }
  .oh {
    h2 {
      color: #fdcb46;
    }
  }
  .ch {
    h2 {
      font-family: 'Quintessential', cursive;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0s;
  }
  .slide-fade-enter, .slide-fade-leave-to {
  //transform: translateX(-10em);
  opacity: 0;
  }

  .loadingModaleWindow-enter-active {
    animation: loadingModaleWindow 400ms;
  }
  .loadingModaleWindow-leave-active {
    animation: loadingModaleWindow 400ms reverse;
  }

  @keyframes loadingPage {
    0% { transform: scale(0); opacity: 0;}
    100% { transform: scale(1); opacity: 1;}
  }
  @keyframes loadingModaleWindow {
    0% { transform: translateY(-100%);}
    100% { transform: translateY(0);}
  }

</style>
