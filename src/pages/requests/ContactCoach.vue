<template>
  <form @submit.prevent="submitMessage">
    <div class="form-control">
      <label for="email">Your Email</label>
      <input
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="setValidity('email')"
      />
      <p class="errors" v-if="!email.isValid">
        You should enter your email address
      </p>
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea
        id="message"
        rows="5"
        v-model.trim="message.val"
        @blur="setValidity('message')"
      ></textarea>
      <p class="errors" v-if="!message.isValid">
        You should enter your message
      </p>
    </div>
    <p v-if="!formIsValid" class="errors">
      You should fix the above errors first.
    </p>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
      message: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    setValidity(input) {
      this[input].isValid = true;
    },
    checkFormValidity() {
      if (this.email.val === '' || !this.email.val.includes('@')) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val === '') {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    submitMessage() {

      this.formIsValid = true;
      this.checkFormValidity();
      if (!this.formIsValid) return;
      const requestData = {
        coachId: this.$route.params.id,
        email: this.email.val,
        message: this.message.val,
      };
      this.$store.dispatch('requests/contactCoach', requestData);
      this.$router.replace('/coaches');
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
