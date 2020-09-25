<template>
  <div class="modaleScreen" v-if="revele">
    <div class="overlay" @click="toggleModale">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <div class="btn" @click="toggleModale">X</div>
      </div>

      <h2>[SITE WEB]</h2>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Modale',
  props: ['revele', 'toggleModale']
}
</script>

<style scoped lang="scss">
  .modaleScreen {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay {
    background-color: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .modaleBox {
    position: fixed;
    top: 10%;
    z-index: 2;
    width: 80%;
    background-color: white;
    color: #333;
  }
  .menuBtn {
    display: flex;
    justify-content: flex-end;
  }
  .btn {
    padding: .5em;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #e74c3c;
    color: white;
    font-weight: bold;
  }
</style>
