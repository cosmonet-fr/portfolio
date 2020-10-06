<template>
  <div class="hardSkills">
    <div class="skill">
      <img src="../assets/html5-brands.svg" alt="HTML">
      <div class="gauge">
        <div class="p75">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hardSkills {
    margin: 10em;
  }
  .skill {
    display: flex;
  }
  .gauge {
    margin: .5em 0;
    width: 30rem;
    height: 2rem;
    background-color: gray;
  }
  .p75 {
    width: 75%;
    height: 2rem;
    background-color: #04617b;
  }
  img {
    margin: 0 1em;
    width: 2.5rem;
  }
  @keyframes loadingEnterWindow {
    0% { width: 0; }
    100% { width: 75%;}
  }
</style>
