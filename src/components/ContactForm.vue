<template>
    <div class="contact page" >
        <h2>Contact</h2>
        <form @submit.prevent="submitContact" method="post">
            <label for="nom">Votre nom:</label>
            <input id="nom" type="text" name="name" placeholder="" v-model="name">
            <label for="objet">Objet:</label>
            <input id="objet" type="text" name="subject" placeholder="" v-model="subject">
            <label for="e-mail">Votre e-mail:</label>
            <input type="email" name="email" placeholder="" v-model="email">
            <textarea name="text" placeholder="" rows="8" cols="80" v-model="text"></textarea>
            <input class="submit" type="submit" value="Envoyer" />
    
        </form>

    </div>

</template>

<script>

</script>

<style lang="scss" scoped>
.contact {
    background-color: #016a87;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: start;
}
label {
    color: white;
    background-color: #016a87;
    position: relative;
    top: 20px; left: 18px; 
    max-width: 115px;
    padding: 0 10px;
}
input, textarea {
    color: white;
    padding: .8rem .5rem;
    margin: .5rem 0;
    border: solid 3px white;
    background-color: #016a87;
}
input::placeholder, textarea::placeholder {
    color: white
}
.submit {
    background-color: white;
    color: #016a87;
    font-size: 1.3rem;
    cursor: pointer;
}

</style>