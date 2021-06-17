<template>
  <section class="center">
    <div class="box">
      <h1 class="title">Firebase Test</h1>
      <p class="subtitle">Login to continue</p>
      <form @submit.prevent="login">
        <b-field label="Email">
          <b-input
            v-model="loginForm.email"
            type="email"
            name="email"
            icon="email"
            required />
        </b-field>
        <b-field label="Password">
          <b-input
            v-model="loginForm.password"
            type="password"
            name="password"
            icon="lock"
            minlength="8"
            required
            password-reveal />
        </b-field>
        <b-field><b-button :loading="loginForm.loading" type="is-success" native-type="submit" expanded>
          Login
        </b-button></b-field>
        <p class="has-text-danger">{{ loginForm.error }}</p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    loginForm: {
      email: '',
      password: '',
      loading: false,
      error: null,
    },
  }),
  methods: {
    async login() {
      const form = this.loginForm
      form.loading = true
      try {
        await this.$store.dispatch('login', {
          email: form.email,
          password: form.password,
        })
        this.$router.push('/')
      }
      catch(err) {
        switch(err.code) {
          case 'auth/user-not-found': form.error = 'There is no user with this email'; break
          case 'auth/wrong-password': form.error = 'The password is invalid'; break
          default: form.error = err.message
        }
      }
      finally {
        form.loading = false
      }
    },
  }
}
</script>

<style scoped>
.box {
  max-width: 20em;
}
</style>
