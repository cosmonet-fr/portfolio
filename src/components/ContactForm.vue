<template>
  <div class="contact page">
    <h2>Contact</h2>
    <form @submit.prevent="submitContact" name="contact">
      <em>
        <p>Les champs avec "<span>*</span>" sont obligatoires.</p>

      </em>
      <label for="e-mail">Votre e-mail:<span>*</span></label>
      <input id="e-mail" class="litleInput" type="email" v-model="email" required>

      <label for="nom">Votre nom:<span>*</span></label>
      <input id="nom" class="litleInput" type="text" v-model="name" required>

      <label for="objet">Objet:</label>
      <input id="objet" type="text" v-model="subject">

      <label for="message">Message:<span>*</span></label>
      <textarea id="message" v-model="text" rows="8" required></textarea>

      <input class="submit" type="submit" value="Envoyer" aria-label="Envoyer-moi votre message"/>

      <!-- Messages de feedback -->
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      text: '',
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async submitContact() {
      // Reset messages
      this.successMessage = '';
      this.errorMessage = '';

      try {
        const response = await fetch('https://api.billois.org/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.text
          })
        });

        if (!response.ok) {
          // Si le serveur renvoie une erreur
          const errorData = await response.json().catch(() => null);
          this.errorMessage = errorData?.message || 'Une erreur est survenue. Veuillez réessayer.';
          return;
        }

        // Si tout est OK
        this.successMessage = 'Votre message a été envoyé avec succès !';
        // Réinitialiser le formulaire
        this.name = '';
        this.email = '';
        this.subject = '';
        this.text = '';

      } catch (err) {
        // Erreurs réseau ou autres
        console.error(err);
        this.errorMessage = 'Impossible de contacter le serveur. Veuillez vérifier votre connexion.';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
    text-align: center;
}
p {
  color: white;
}
.contact {
  background-color: #016a87;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  @media (min-width: 850px) {
    align-items: center;
  
  }
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    max-width: 850px;
    @media (min-width: 850px) {
      width: 850px;
      
    }
  }
  
.litleInput {
    @media (min-width: 850px) {
    width: 425px;
    
  }

}

  label {
    color: white;
    background-color: #016a87;
    position: relative;
    top: 20px;
    left: 18px;
    max-width: 125px;
    padding: 0 10px;
  }
  span {
    color: #ff4d4d;
  }
  
  input, textarea {
    color: white;
    padding: 0.8rem 0.5rem;
    margin: 0.5rem 0;
    border: solid 3px white;
    background-color: #016a87;
  }

  input::placeholder, textarea::placeholder {
    color: white;
  }

  .submit {
    background-color: white;
    color: #016a87;
    font-size: 1.3rem;
    cursor: pointer;
    margin-top: 1rem;
    max-width: 200px;
  }

  .success {
    color: white;
    margin-top: 1rem;
  }

  .error {
    color: #ff4d4d;
    margin-top: 1rem;
  }
}
</style>
