<template>
  <div class="modaleScreen" v-if="reveleOhmyfood">
    <div class="overlay" @click="toggleModaleOhmyfood">

    </div>
    <div class="modaleBox">
      <div class="menuBtn">
        <h2>Ohmyfood</h2>
        <div class="btn" @click="toggleModaleOhmyfood">X</div>
      </div>

      <div class="page">
        <div class="content">
          <div class="screenshot">
            <img src="../assets/ohmyfood_screenshot.png" alt="">
          </div>
          <div class="textBox">
            <h3>Mission:</h3>
            <p>
              Le projet “ohmyfood” d’Openclassrooms consistait à réaliser un site référençant les menus de restaurants. Le site devait être responsive et utiliser des animations CSS modernes (Keyframes), en partant d’une <a href="http://portfolio.billois.org/portfolio/wp-content/uploads/2020/08/planche-1b.png">maquette fournie par Openclassrooms</a>.
            </p>
            <h3>Technologies utilisées:</h3>
            <p>
              <ul>
                <li>HTML</li>
                <li>CSS / Sass</li>
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
  name: 'Modale',
  props: ['reveleOhmyfood', 'toggleModaleOhmyfood']
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
