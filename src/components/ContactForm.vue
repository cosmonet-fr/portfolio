<template>
  <div class="contact page">
    <h2>Contact</h2>
    <form @submit.prevent="submitContact">
      <label for="nom">Votre nom:</label>
      <input id="nom" type="text" v-model="name" required>

      <label for="objet">Objet:</label>
      <input id="objet" type="text" v-model="subject" required>

      <label for="e-mail">Votre e-mail:</label>
      <input type="email" v-model="email" required>

      <label for="message">Message:</label>
      <textarea id="message" v-model="text" rows="8" required></textarea>

      <input class="submit" type="submit" value="Envoyer" />

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
.contact {
  background-color: #016a87;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 5rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  label {
    color: white;
    background-color: #016a87;
    position: relative;
    top: 20px;
    left: 18px;
    max-width: 115px;
    padding: 0 10px;
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
