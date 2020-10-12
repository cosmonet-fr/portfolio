<template>
  <div class="boxTemplate">

    <div class="allSoftSkills">
      <h2>Soft skills</h2>
      <div class="softSkillsBox">

        <div class="softSkill">
          <p>Autonomie</p>
        </div>

        <div class="softSkill">
          <p>Rigueur</p>
        </div>

        <div class="softSkill">
          <p>Curiosité</p>
        </div>

        <div class="softSkill">
          <p>Persévérance</p>
        </div>

        <div class="softSkill">
          <p>Optimisme</p>
        </div>

        <div class="softSkill">
          <p>Humour</p>
        </div>
      </div>
    </div>

    <div class="hobbies">
      <h2>Loisirs</h2>
      <div class="menu">

        <div>
          <img @mouseover="bow = true" @mouseleave="bow = false" src="../assets/bow.svg" alt="Bow" />
            <div class="hobbiesTxt">
              <transition name="slide-fade" >
                <p v-if="bow">Pratiqué en club.</p>
              </transition>
              <p class="gsmTxt" >Pratiqué en club.</p>
            </div>
        </div>

        <div>
          <img @mouseover="game = true" @mouseleave="game = false" src="../assets/joypad.svg" alt="Joy pad" />
            <div class="hobbiesTxt">
              <transition name="slide-fade" >
                <p v-if="game" >Jeux de stratégies et jeux d’aventures.</p>
              </transition>
              <p class="gsmTxt" >Jeux de stratégies et jeux d’aventures.</p>
            </div>
        </div>

        <div>
          <img @mouseover="movie = true" @mouseleave="movie = false" src="../assets/cinema.png" alt="Movie" />
            <div class="hobbiesTxt">
              <transition name="slide-fade" >
                <p v-if="movie" >Sciences fictions, comédies.</p>
              </transition>
              <p class="gsmTxt">Sciences fictions, comédies.</p>

            </div>
        </div>

        </div>



    </div>
  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        bow: false,
        game: false,
        movie: false
      }
    }
  }
</script>

<style scoped lang="scss">
h2 {
  margin: 1.3em;
  text-align: center;
}
  .boxTemplate {
    display: flex;
    justify-content: space-around;
    //background-color: #000000cc;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
  .allSoftSkills, .hobbies {
    @media (min-width: 800px) {
      margin: 9em;
      width: 40%;
    }

  }
  .softSkillsBox {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 800px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .softSkill {
    p {
      font-size: 2rem;
      font-weight: bold;
      margin: .8em;
      padding: 1em;
      background-color: #04617b;
      color: white;
    }
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin-top: 5em;
    img {
      width: 150px;
      height: 150px;
      margin: 1em;
      padding: 1em 2em;
      border: solid white;
      border-radius: 50%;
      transition: all .4s;
      &:hover {
        cursor: help;
        background-color: #016a87;
      }
    }
    p {
      //position: absolute;
      font-size: 2rem;
      color: white;
    }
    @media (max-width: 530px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .hobbiesTxt {
    width: 150px;
    margin-left: 1em;
    p {
      text-align: center;
    }
    @media (max-width: 530px) {
      width: 90%;
    }
  }
  .gsmTxt {
    text-align: center;
    @media (min-width: 800px) {
      display: none;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }

</style>
