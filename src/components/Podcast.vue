<template>
  <div id="podcast" class="podcast page">
    <h2>Podcast</h2>
    <div class="podcastBox">
      <div class="textContainer">
        <h3>Entretien avec <a href="https://fr.wikipedia.org/wiki/Richard_Stallman" target="_blank">Richard Stallman</a>↗</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam harum, id accusantium maxime quos
          corrupti, animi, delectus error asperiores voluptas deserunt odio minima nobis natus.
        </p>
      </div>
      <div class="videoContainer">
        <div class="video" >
          <video controls width="800" poster="../assets/extract_fsf40_poster.png">
            <source src="../assets/extract_fsf40.webm" type="video/webm" />
  
            Download the
            <a href="/shared-assets/videos/flower.webm">WEBM</a>
            video.
          </video>
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
      // projects: projectsData,
      hoveredProject: null,
      revealedProject: null
    };
  },
  methods: {
    // toggleModal(projectId) {
    //   this.revealedProject = this.projects.find(project => project.id === projectId) || null;
    // }
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

.podcast {
  background-color: rgba(0, 0, 0, 0.3333333333);
}

.podcastBox {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.textContainer {
  @media (min-width: 800px) {
    max-width: 33%;

  }
}

.video{
  // transform: rotateY(-50deg);
  border-radius: 0.2em;
  // background-color: #016a87;
  padding: 1rem;
}
</style>
