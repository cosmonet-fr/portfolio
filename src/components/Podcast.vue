<template>
  <div id="podcast" class="podcast page">
    <h2>Podcast</h2>
    <div class="podcastBox">
      <div class="textContainer">
        <h3>Entretien avec <a href="https://fr.wikipedia.org/wiki/Richard_Stallman" target="_blank">Richard Stallman</a>↗</h3>
        <p>
          Samedi 4 octobre 2025, la Free Software Foundation (FSF) a fêté ses 40 ans d'existence ! 4 décennies pour défendre les 4 libertés fondamentales sur lesquelles se fonde le logiciel libre. 
        </p>
        <ul>
          <li>
            - la liberté d'exécuter le programme, pour tous les usages ;

          </li>
          <li>
            - la liberté d'étudier le fonctionnement du programme et de l'adapter à ses besoins ;

          </li>
          <li>
            - la liberté de redistribuer des copies du programme (ce qui implique la possibilité aussi bien de donner que de vendre des copies) ;

          </li>
          <li>
            - la liberté d'améliorer le programme et de distribuer ces améliorations au public, pour en faire profiter toute la communauté.

          </li>

        </ul>

        <p>
          Pour revenir sur ces 40 ans de combat en faveur du logiciel libre, j'ai eu l’honneur de pouvoir avoir un entretien avec Richard Stallman (RMS), fondateur du projet GNU, de la FSF, et l’initiateur du mouvement du logiciel libre. 
        </p>

        <p>
          Merci du fond du cœur à Richard pour sa gentillesse, sa patience et sa bienveillance pour cette interview qui était une première pour moi. Entre le stress et mes bégaiements, il fallait bien quelqu'un d'aussi cool que lui. 😅
        </p>

        <p>
          Et un grand merci aussi à Aurore, la monteuse de cette vidéo, qui a réussi astucieusement à masquer ces fameux bégaiements ! 😉
        </p>

      </div>
      <div class="videoContainer">
        <div class="video" v-if="video" >
          <video controls width="800" autoplay poster="../assets/extract_fsf40_poster.png">
            <source :src="urlVideo" />
  
            Download the
            <a href="/shared-assets/videos/flower.webm">WEBM</a>
            video.
          </video>
        </div>
        <div class="poster" v-else @click="playVideo(1)">
          <img src="../assets/extract_fsf40_poster.png" alt="">
          <div class="btnPlay" role="button">
            <p>► Lire la vidéo</p>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
// import Modale from './Modale.vue';
// import projectsData from '../data/projects.json';

export default {
  data() {
    return {
      video: false,
      urlVideo: null
    };
  },
  methods: {
    async playVideo(videoId) {
      try {
        const response = await fetch(`https://api.billois.org/audience/${videoId}`);
        if (!response.ok) {
          throw new Error(`Erreur HTTP! statut: ${response.status}`);
        }
        const data = await response.json();
        this.urlVideo = data.url;
        this.video = true;
      } catch (error) {
        console.error("Erreur lors de la récupération de la vidéo :", error);
      }
    }
  },
  components: {
    // Modale
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quintessential&display=swap");

* {
  color: white;
}

a {
  color: #016a87;
}

h2 {
  margin: 2.5em 0;
  text-align: center;
  padding: 2rem;
}

p {
  margin: 1rem 0;
}

.btnPlay {
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 4rem;
  p {
    padding: 1rem;
    background-color: #016a87;
  }
}

.poster {
  cursor: pointer;
}
.podcast {
  background-color: rgba(0, 0, 0, 0.3333333333);
}


.podcastBox {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  // align-items: center;
  @media (max-width: 1225px) {
    flex-direction: column-reverse;
    
  }
}

.textContainer {
  @media (min-width: 1025px) {
    max-width: 33%;

  }
}

.videoContainer{
  @media (min-width: 1025px) {
    padding: 0 4rem 4rem 4rem;

  }
}

.video{
  // transform: rotateY(-50deg);
  border-radius: 0.2em;
  // background-color: #016a87;
  padding: 1rem;
}
</style>
