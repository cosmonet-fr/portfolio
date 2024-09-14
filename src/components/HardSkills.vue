<template>
  <div class="hardSkills page">
    <h2>Compétences</h2>
    <nav>
      <ul>
        <li class="button" v-bind:class=" {active: mode === 'dev'}" @click=" mode='dev'">Développement</li>
        <li class="button" v-bind:class=" {active: mode==='devops' }" @click="mode = 'devops'">DevOps</li>
        <li class="button" v-bind:class=" {active: mode === 'qa'}" @click=" mode='qa'">Qualité</li>
        <!-- <li class="button" v-bind:class="{ active: mode === 'others' }" @click="mode = 'others'">Autres</li> -->
      </ul>
    </nav>
    <div id="dev" class="hardSkillsBox" v-if="mode === 'dev'">
      <Skill v-for="(skill, index) in skillsDev" :key="index" :name="skill.name" :imgSrc="getImage(skill.imgSrc)"
        :description="skill.description" :percentage="skill.percentage" />
    </div>
    <div id="devops" class="hardSkillsBox" v-if="mode === 'devops'">
      <Skill v-for="(skill, index) in skillsDevops" :key="index" :name="skill.name" :imgSrc="getImage(skill.imgSrc)"
        :description="skill.description" :percentage="skill.percentage" />
    </div>
    <div id="qa" class="hardSkillsBox" v-if="mode === 'qa'">
      <Skill v-for="(skill, index) in skillsQa" :key="index" :name="skill.name" :imgSrc="getImage(skill.imgSrc)"
        :description="skill.description" :percentage="skill.percentage" />
    </div>
    <!-- <div id="others" class="hardSkillsBox" v-if="mode === 'others'">
      <Skill v-for="(skill, index) in skillsOthers" :key="index" :name="skill.name" :imgSrc="getImage(skill.imgSrc)"
        :description="skill.description" :percentage="skill.percentage" />
    </div> -->
  </div>
</template>

<script>
import Skill from './Skill.vue';
import skillsDataDev from '../data/dev.json';
import skillsDataDevops from '../data/devops.json';
import skillsDataQa from '../data/qa.json';
import skillsDataOthers from '../data/others.json';

export default {
  components: {
    Skill
  },
  data() {
    return {
      skillsDev: skillsDataDev,
      skillsDevops: skillsDataDevops,
      skillsQa: skillsDataQa,
      skillsOthers: skillsDataOthers,
      mode: 'dev'
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
  // margin: 5em;

  h2 {
    text-align: center;
    margin-top: 2em;
  }

  @media (max-width: 800px) {
    // margin: 5em 0;
  }
}

nav {
   margin: 3em 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 800px) {
    justify-content: space-around;
    
  }
}

.active {
  background: #04617b;

}

.hardSkillsBox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  * {
    color: #ffffff;
  }

  // margin: 0 10em;

  @media (max-width: 800px) {
    // margin: 2em;
  }
}

.invisible {
  opacity: 0;
  cursor: auto;
}
</style>
