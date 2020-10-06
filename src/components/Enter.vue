<template>
  <div class="modaleScreenEnter" v-if="reveleEnter" @click="toggleModaleEnter" >
    <h1>Stéphane BILLOIS</h1>
    <h2>Développeur web full stack</h2>
    <div class="scroll-downs">
      <div class="mousey">
        <div class="scroller"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['reveleEnter', 'toggleModaleEnter'],
}

</script>

<style scoped lang="scss">
h1, h2 {
  margin: 1em;
  color: #519183;
}
h1 {
  animation: title .6s;
  font-size: 5em;
  letter-spacing: 1.5rem;
}
@keyframes title {
  0% { transform: translateX(50%); opacity: 0}
  100% { transform: translateX(0); opacity: 1}
}
h2 {
  animation: titleH2 .6s;
  font-size: 3em;
}
@keyframes titleH2 {
  0% { transform: translateX(-50%); opacity: 0}
  100% { transform: translateX(0); opacity: 1}
}

.modaleScreenEnter {
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
