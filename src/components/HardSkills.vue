<template>
  <div class="hardSkills">
    <h2>Compétences</h2>
    <div class="hardSkillsBox">
      <Skill v-for="(skill, index) in skills" :key="index" :name="skill.name" :imgSrc="getImage(skill.imgSrc)"
        :description="skill.description" :percentage="skill.percentage" />
    </div>
  </div>
</template>

<script>
import Skill from './Skill.vue';
import skillsData from '../data/dev.json';

export default {
  components: {
    Skill
  },
  data() {
    return {
      skills: skillsData
    };
  },
  methods: {
    getImage(imageName) {
      // Charger dynamiquement l'image à partir du dossier 'assets'
      return require(`../assets/${imageName}`);
    }
  }
};
</script>

<style scoped lang="scss">
.hardSkills {
  margin: 5em;

  h2 {
    text-align: center;
  }

  @media (max-width: 800px) {
    margin: 5em 0;
  }
}

.hardSkillsBox {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  * {
    color: #ffffff;
  }

  margin: 10em;

  @media (max-width: 800px) {
    margin: 2em;
  }
}

.invisible {
  opacity: 0;
  cursor: auto;
}
</style>
