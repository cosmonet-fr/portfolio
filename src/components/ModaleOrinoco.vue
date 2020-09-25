<template>
  <div class="modaleScreen" v-if="reveleOrinoco">
    <div class="overlay" @click="toggleModaleOrinoco">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Orinoco</h2>
        <div class="btn" @click="toggleModaleOrinoco">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <img src="../assets/orinoco_screenshot.jpg" alt="">
          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p>
              Le projet “Orinoco” d’Openclassrooms consistait à réaliser la partie front-end d’un site de e-commerce pour la vente d’appareils photos vintage. Il fallait interagir avec une API Rest codée pour node.js.
            </p>
            <p>
              Le site web devait avoir un system de panier développé en JavaScript Vanilla, il fallait également contrôler les entrées du formulair de commande (Regex).
            </p>
            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>HTML</li>
                <li>CSS / Sass</li>
                <li>JavaScript</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="ModaleFooter">
          <a href="https://github.com/cosmonet-fr/P5_billois_stephane/">
            <img src="../assets/github-brands.svg" alt="Code sur GitHub">
          </a>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'ModaleOrinoco',
  props: ['reveleOrinoco', 'toggleModaleOrinoco']
}
</script>

<style scoped lang="scss">
  * {
    color: white;
  }
  h2 {
    margin: .5em 1em;
  }
  h3 {
    margin: 1em 0 .2em 0;
  }
  p {
    margin: .5em 0;
    text-align: justify;
  }
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
    background-color: #000000cc;
    color: #333;
    //border-left: solid .5rem #519183;
  }
  .menuBtn {
    display: flex;
    justify-content: space-between;
    //background-color: #999;
    //color: white;
  }
  .btn {
    padding: .5em;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    //background-color: #e74c3c;
    color: white;
    font-weight: bold;
  }
  .page {
    margin: 1em;
  }
  .content {
    display: flex;
    justify-content: space-around;
  }
  .screenshot {
    max-width: 40%;
  }
  .textBox {
    max-width: 30%;
    li {
      margin-left: 2em;
      list-style-type: square;
    }
  }
  .ModaleFooter {
    margin: 2em;
    display: flex;
    justify-content: space-around;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
</style>
