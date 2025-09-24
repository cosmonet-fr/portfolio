<template>
  <div class="modaleScreenEnter" v-if="reveleEnter" @click="toggleModaleEnter" v-on:keyup.enter="toggleModaleEnter">
    <h1>Stéphane BILLOIS</h1>
    <h2>Développeur</h2>
    <div class="scroll-downs bottom">
      <div class="mousey">
        <div class="scroller"></div>
      </div>
    </div>


    <img src="../assets/arrow-down-1-svgrepo-com.svg" class="touch bottom" />




  </div>
</template>

<script>
export default {
  props: ['reveleEnter', 'toggleModaleEnter', 'toggleModaleEnterScroll'],
  mounted () {
   setTimeout(this.toggleModaleEnter, 60000);
 }
}

</script>

<style scoped lang="scss">
.bottom {
  position: fixed;
  bottom: 5em;
}
h1, h2 {
  margin: 1em;
  color: #016a87;
}
h1 {
  font-family: "Ubuntu Medium";
  animation: title .6s;
  font-size: 5em;
  letter-spacing: 1.5rem;
  @media (max-width: 800px) {
    font-size: 2rem;
    letter-spacing: 0em;
  }
}
@keyframes title {
  0% { transform: translateY(-.1em); opacity: 0}
  100% { transform: translateY(0); opacity: 1}
}
h2 {
  animation: titleH2 .6s;
  font-size: 3em;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
}
@keyframes titleH2 {
  0% { transform: translateY(-.1em); opacity: 0}
  50% { transform: translateY(-.1em); opacity: 0}
  100% { transform: translateY(0); opacity: 1}
}

.modaleScreenEnter {
  z-index: 4;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;
  background-image: url(../assets/wallpaper_enter.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
// Mouse
.scroll-downs {
  width :34px;
  height: 55px;
  @media (max-width: 800px) {
    display: none;
  }
}
.mousey {
  animation: mouseLoad 1s;
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px 25px 50px 50px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
}

.touch {
  width: 58px;
  @media (min-width: 800px) {
    display: none;
  }
}

@keyframes mouseLoad {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes scroll {
  0% { transform: translateY(0);}
  50% { transform: translateY(8px);}
  100% { transform: translateY(0);}
}

</style>
