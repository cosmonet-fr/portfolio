<template>
  <div class="course page">
    <div class="menu">
      <h2 :class="{ active: course === 'experience' }" @click="course = 'experience'">Experiences</h2>
      <h2 :class="{ active: course === 'training' }" @click="course = 'training'">Formations</h2>
    </div>

    <div class="all">

      <transition name="slide-fade">
        <div class="experience" v-if="course === 'experience'">
          <h3>OpenStudio - Clermont-Ferrrand (63)</h3>
          <p> <span>Mars 2020 — Développeur web</span> </p>
          <p>Réalisation de tests fonctionnels automatisés et manuels sur des sites web complexes (technologie type
            Selenium).</p>
        </div>
      </transition>

      <transition name="slide-fade">
        <div class="experience" v-if="course === 'experience'">
          <h3>Développeur Web Indépendant - Romagnat (63)</h3>
          <p> <span>Mars 2020 — Développeur web</span> </p>
          <p>Travail autour de plusieurs projets web à l’aide de diverses technologies, notamment Node.js, Maria DB et
            Vue.js.</p>
        </div>
      </transition>

      <transition name="slide-fade">
        <div class="experience" v-if="course === 'experience'">
          <h3>OpenStudio - Clermont-FD (63)</h3>
          <p> <span>Décembre 2019—Développeur web</span> </p>
          <p>Réalisation du site internet babm.fr avec WordPress en optimisant le back-office avec le plug-in ACF.
            L’intégration de ce site à été réalisée à partir d’une maquette élaborée par un graphiste.</p>
        </div>
      </transition>



      <transition name="slide-fade">
        <div class="experience" v-if="course === 'experience'">
          <h3>Marquage Moderne - Riom (63)</h3>
          <p> <span>Janvier 2017 à octobre 2019— Graveur laser</span> </p>
          <p>Gravure laser (paramétrage et pilotage). Compétences en PAO avec AutoCAD et FlyCAD.</p>
          <p> <span>Octobre 2012 à janvier 2017— Opérateur sérigraphe</span> </p>
          <p>Maîtrise de la chaîne graphique de la conception à la production.</p>
        </div>
      </transition>

      <transition name="slide-fade">
        <div class="training" v-if="course === 'training'">
          <h3>Openclassrooms</h3>
          <p><span>Certificat RNCP développeur web (bac+2)</span></p>
          <p>Février 2020 à septembre 2020</p>
        </div>
      </transition>

      <transition name="slide-fade">
        <div class="training" v-if="course === 'training'">
          <h3>CE3P - Ivry-sur-Seines (94)</h3>
          <p><span>CAP Photographie</span></p>
          <p>Septembre 2010 à juin 2011</p>
        </div>
      </transition>


      <transition name="slide-fade">
        <div class="training" v-if="course === 'training'">
          <h3>SEPR - Lyon</h3>
          <p><span>CAP Sérigraphie</span></p>
          <p>Septembre 2007 à juillet 2009</p>
        </div>
      </transition>

    </div>
  </div>

</template>

<script>
export default  {
  data: function () {
    return {
      course: "experience"
    }
  }
}
</script>

<style scoped lang="scss">
  *{
    color: white;
    margin: .5em 0;
  }
  p {
    font-size: 1em;
  }

  h2 {
    cursor: pointer;
    padding: 1em;
    @media (max-width: 540px) {
      font-size: 2em;
    }
    // border: solid 1px #333333;
    border: solid 1px #fff;
  }
  .active {
    background-color: #333333;
    border: none;
  }
  .course {
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    padding: 4em 2em;
    background-color: #016a87;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
  .experience, .training {
    margin: 3em 0;
    span {
      color: #6cf;
    }
  }
  .all {
    @media (min-width: 800px) {
      width: 40%;
    }
  }
  .menu {
  //  width: 20%;
    @media (max-width: 800px) {
      text-align: center;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>
