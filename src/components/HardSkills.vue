<template>
  <div class="hardSkills">
    <div class="skill">
      <div class="gaugeBox">
        <img src="../assets/html5-brands.svg" alt="HTML">
        <div class="gauge" @mouseover="html = true" @mouseleave="html = false">
          <div class="p75">
            <p class="technology" v-if="html">HTML</p>
          </div>
        </div>
      </div>
      <div class="def">
        <transition name="slide-fade" >
          <p v-if="html" >Le langage de balisage à l'orgine du web. Utiliseé pour afficher le comtenu d'une page.</p>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        html: false
      }
    }
  }
</script>
<style scoped lang="scss">
  .hardSkills {
    * {
      color: white;
    }
    margin: 10em;
  }
  .gaugeBox {
    display: flex;
  }
  .gauge, .def {
    width: 30rem;
    cursor: pointer;
  }
  .gauge {
    margin: .5em 0;
    height: 2rem;
    background-color: gray;
  }
  .p75 {
    animation: gauge 2s;
    width: 75%;
    height: 2rem;
    background-color: #04617b;
  }
  .technology {
    padding-left: 1em;
    padding-top: .5em;
    font-weight: bold;
  }
  .def {
    margin-left: 5rem;
    position: absolute;
  }
  img {
    margin: 0 1em;
    width: 2.5rem;
  }
  @keyframes gauge {
    0% { width: 0; }
    100% { width: 75%;}
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
