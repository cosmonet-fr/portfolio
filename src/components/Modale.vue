<template>
    <div class="modaleScreen">
        <div class="overlay" @click="$emit('close')"></div>
        <div class="modaleBox">
            <div class="menuBtn">
                <h2>{{ project.title }}</h2>
                <div class="btn" @click="$emit('close')">X</div>
            </div>

            <div class="page">
                <div class="content">
                    <div class="screenshot">
                        <!-- Splide Slider -->
                        <div ref="splideElement" class="splide">
                            <div class="splide__track">
                                <ul class="splide__list">
                                    <li v-for="(image, index) in project.modal.images" :key="index"
                                        class="splide__slide">
                                        <img :src="getImagePath(image)" :alt="'Image ' + (index + 1)">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="textBox">
                        <h3>Mission:</h3>
                        <p class="warning" v-if="project.modal.warning">{{ project.modal.warning }}</p>
                        <p>{{ project.modal.mission }}</p>
                        <p>{{ project.modal.backend }}</p>
                        <p>{{ project.modal.frontend }}</p>
                        <h3>Technologies utilisées:</h3>
                        <ul>
                            <li v-for="(tech, index) in project.modal.technologies" :key="index">{{ tech }}</li>
                        </ul>
                    </div>
                </div>
                <div class="ModaleFooter">
                    <button v-if="project.modal.url" @click="goTo(project.modal.url, $event)">
                        <img src="../assets/link-solid.svg" alt="Lien du site"> Visiter le site
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Splide from '@splidejs/splide';

export default {
  props: ['project'],
  methods: {
    getImagePath(image) {
      // Assurez-vous que le chemin d'accès aux images est correct
      return require(`@/assets/images/${image}`);
    },
    goTo(url, event) {
        event.preventDefault();  // Empêche le comportement par défaut du bouton
        window.open(url, '_blank');
    }

  },
  mounted() {
    new Splide(this.$refs.splideElement, {
    //   type       : 'loop',
      heightRatio: 0.5,
      pagination : true,
      arrows     : true,
    }).mount();
  },
};
</script>

<style scoped lang="scss">
@import "~@splidejs/splide/dist/css/splide.min.css";
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
  }

.screenshot {
    position: relative;
}

.controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
}

.controls button {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    padding: 0.5em 1em;
    font-size: 1.5em;
}
button {
    display:flex;
    align-items: center;
    padding: .3em 1em;
    background: #016a87;
    border: none;
    cursor: pointer;
    img {
        max-width: 50px;
    }
}
</style>
