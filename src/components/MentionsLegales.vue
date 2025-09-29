<template>
    <div class="page legales">
        <h1>
            Mentions légales 
        </h1>
        <div>
            <h2>
                Propriétaire et Développeur du site
            </h2>
            <p>
                Stéphane BILLOIS
            </p>
            <p>
                <a @click="close" href="#contact">Contactez-moi via le formulaire de contacte du site.</a>
            </p>
        </div>
        <div>
            <h2>
                Hébergeur 
            </h2>
            <p>
                OVH sas <br>
                2 rue Kellermann, 59100 Roubaix, France <br>
                +33 (0)9 72 10 10 07 <br>
                <a href="http://www.ovhcloud.com" target="_blank">Site d'OVH</a>↗
                
            </p>

        </div>
        <div>
            <h2>
                Code source
            </h2>
            <p>Le code source est disponible sous Licence <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU Affero General Public License V3</a>↗ .</p>
            <p>Il peut être téléchargé sur <a href="https://codeberg.org/kosmonet" target="_blank">codeberg</a>↗.</p>

        </div>
        <div class="close" @click="close" >
            <p>
                X
            </p>
        </div>

    </div>
</template>


<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    }
  }
}
</script>

<style lang="scss" scoped >
* {
    color: white;
}
h1 {
    font-size: 4rem;
    text-align: center;
    background-color: #016a87;
    padding: .3rem 2rem;
}
.legales {
    background-color: #292929;
    background-image: url(../assets/wallpaper_enter.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 5;
}
.close {
    position: fixed;
    top: 15px; right: 15px;
    // width: 20px;
    // height: 20px;
    cursor: pointer;
    padding: .5rem 1rem;
    // background-color: #ff4d4d;
    P {
        font-size: 3rem;
        font-weight: bolder;
        color: #ff4d4d;

    }
}
</style>