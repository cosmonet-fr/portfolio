<template>
  <div class="allProjects">

    <div class="oneProject orinoco" @mouseover="orinoco = true" @mouseleave="orinoco = false">
      <div class="text" v-show="orinoco">
        <h2>Orinoco</h2>
        <p>Réalisation d'un site de e-commerce.</p>
      </div>
    </div>

    <div class="oneProject groupomania" @mouseover="groupomania = true" @mouseleave="groupomania = false">
      <div class="text" v-show="groupomania">
        <h2>Groupomania</h2>
        <p>Réalisation d'un réseau social d'entreprise.</p>
      </div>
    </div>

    <div class="oneProject sauce" @mouseover="sauce = true" @mouseleave="sauce = false">
      <div class="text" v-show="sauce">
        <h2>Piquante</h2>
        <p>Réalisation d'une API de notation de sauces.</p>
      </div>
    </div>

    <div class="oneProject ohmyfood" @mouseover="ohmyfood = true" @mouseleave="ohmyfood = false">
      <div class="text" v-show="ohmyfood">
        <h2>ohmyfood</h2>
        <p>Réalisation d'un site référençant les menus de restaurants.</p>
      </div>
    </div>

    <div class="oneProject babm" @mouseover="babm = true" @mouseleave="babm = false">
      <div class="text" v-show="babm">
        <h2>Belles Autos, belles motos</h2>
        <p>Réalisation d'un site de présentation d'un événement.</p>
      </div>
    </div>

    <div class="oneProject chouette" @mouseover="chouette = true" @mouseleave="chouette = false">
      <div class="text" v-show="chouette">
        <h2>La chouette agence</h2>
        <p>Obtimisation de l'accessibilité et du SEO pour le site d'une agence de communication.</p>
      </div>
    </div>

    <div class="oneProject cv" @mouseover="cv = true" @mouseleave="cv = false">
      <div class="text" v-show="cv">
        <h2>Curriculum vitae</h2>
        <p>Réalisation de mon CV en ligne.</p>
      </div>
    </div>

    <div class="oneProject michelin" @mouseover="michelin = true" @mouseleave="michelin = false">
      <div class="text" v-show="michelin">
        <h2>Michelin</h2>
        <p>Réalisation d'un prototype d'une web app pour un musée.</p>
      </div>
    </div>


  </div>

</template>

<script>
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
        michelin: false
      }
    },
    name: 'AllProjects',
  }
</script>

<style scoped lang="scss">
  .allProjects {
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
  .orinoco { background-image: url(../assets/orinoco.jpg); }
  .groupomania { background-image: url(../assets/groupomania.jpg); }
  .sauce { background-image: url(../assets/piquante.jpg); }
  .ohmyfood { background-image: url(../assets/ohmyfood.jpg); }
  .babm { background-image: url(../assets/babm.jpg); }
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
      //margin-top: 1em;
    }
    p {
      //margin-bottom: 5em;
    }
  }
</style>
