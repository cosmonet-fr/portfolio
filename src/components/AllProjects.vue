<template>
  <div class="portfolio page">
    <h2>Portfolio</h2>
    <div class="allProjects">
      <div v-for="(project, index) in projects" :key="index" class="oneProject" :class="project.id"
        @click="toggleModal(project.id)" @mouseover="hoveredProject = project.id" @mouseleave="hoveredProject = null">

        <transition name="slide-fade">
          <div class="text" v-show="hoveredProject === project.id">
            <h2>{{ project.hoverTitle }}</h2>
            <p>{{ project.hoverText }}</p>
          </div>
        </transition>
        <div class="menuGsm">
          <h2>{{ project.hoverTitle }}</h2>
          <p>{{ project.hoverText }}</p>
        </div>
      </div>

      <transition name="loadingModaleWindow">
        <Modale v-if="revealedProject" :project="revealedProject" @close="toggleModal(null)" />
      </transition>
    </div>
  </div>
</template>

<script>
import Modale from './Modale.vue';
import projectsData from '../data/projects.json';

export default {
  data() {
    return {
      projects: projectsData,
      hoveredProject: null,
      revealedProject: null
    };
  },
  methods: {
    toggleModal(projectId) {
      this.revealedProject = this.projects.find(project => project.id === projectId) || null;
    }
  },
  components: {
    Modale
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quintessential&display=swap");

  .portfolio {
    h2 {
      margin: 1.5em 0;
      text-align: center;
    }
  }
  .allProjects {
    z-index: 0;
    // margin: 5em 4em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 800px) {
      // margin: 3em 2em;
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
  .audio_soft { background-image: url(../assets/AudioSoft.png); }
  .aureos { background-image: url(../assets/Aureos.jpg); }
  .orinoco { background-image: url(../assets/orinoco.jpg); }
  .groupomania { background-image: url(../assets/groupomania.jpg); }
  .sauce { background-image: url(../assets/piquante.jpg); }
  .ohmyfood { background-image: url(../assets/ohmyfood.jpg); }
  .babm { background-image: url(../assets/babm.jpg); /*filter: saturate(0);*/}
  .chouette { background-image: url(../assets/chouette.jpg); }
  .cv { background-image: url(../assets/moi.jpg); }
  .michelin { background-image: url(../assets/michelin.jpg);}
  .scrapeur { background-image: url(../assets/scrapeur.jpg); }
  .addon {background-image: url(../assets/addon.webp);}
  .ecoindex {background-image: url(../assets/ecoindex1.webp);}

  .menuGsm {
    @media (min-width: 800px) {
      display: none;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #00000099;
    padding: 1em;
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
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #00000099;
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
