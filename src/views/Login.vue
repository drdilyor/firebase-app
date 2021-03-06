<template>
  <section class="section center">
    <transition name="flip">
      <div v-if="page == 'login'" key="login" class="box">
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
              required
              password-reveal />
          </b-field>
          <b-field><b-button :loading="loginForm.loading" type="is-success" native-type="submit" expanded>
            Login
          </b-button></b-field>
          <p class="has-text-danger">{{ loginForm.error }}</p>
          <p>Don't have an account? <a href="#" @click.prevent="page = 'signup'">Sign up</a></p>
          <p>Forgot password? <a href="#" @click.prevent="page = 'reset'">Reset</a></p>
        </form>
      </div>
      <div v-else-if="page == 'signup'" key="signup" class="box">
        <h1 class="title">Firebase Test</h1>
        <p class="subtitle">Welcome to my app! Here you can create an account</p>
        <form @submit.prevent="signup">
          <div class="columns">
            <div class="column">
              <b-field label="First name">
                <b-input v-model="signupForm.firstName" required />
              </b-field>
            </div>
            <div class="column">
              <b-field label="Last name">
                <b-input v-model="signupForm.lastName" required />
              </b-field>
            </div>
          </div>
          <b-field label="Email">
            <b-input
              v-model="signupForm.email"
              type="email"
              name="email"
              required />
          </b-field>
          <b-field label="Password">
            <b-input
              v-model="signupForm.password"
              type="password"
              name="password"
              minlength="8"
              required
              password-reveal />
          </b-field>
          <b-field><b-button :loading="signupForm.loading" type="is-info" native-type="submit" expanded>
            Sign up
          </b-button></b-field>
          <p class="has-text-danger">{{ signupForm.error }}</p>
          <p>Already have an account? <a href="#" @click.prevent="page = 'login'">Login</a></p>
        </form>
      </div>
      <div v-else-if="page = 'reset'" key="reset" class="box">
        <h1 class="title">Firebase Test</h1>
        <p class="subtitle">Reset password</p>
        <b-message v-model="resetForm.showSuccess" type="is-success">
          Success. Check your email for a reset link.
        </b-message>
        <form @submit.prevent="reset">
          <b-field label="Email">
            <b-input
              v-model="loginForm.email"
              type="email"
              icon="email"
              required />
          </b-field>
          <b-field><b-button :loading="resetForm.loading" type="is-danger" native-type="submit" expanded>
            Reset
          </b-button></b-field>
          <p class="has-text-danger">{{ resetForm.error }}</p>
          <p>Go back to <a href="#" @click.prevent="page = 'login'">Login</a></p>
        </form>
      </div>
    </transition>
  </section>
</template>

<script>
import firebase from '@/firebase'

export default {
  data: () => ({
    page: 'login',
    loginForm: {
      email: '',
      password: '',
      loading: false,
      error: null,
    },
    signupForm: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      loading: false,
      error: null,
    },
    resetForm: {
      loading: false,
      error: null,
      showSuccess: false,
    }
  }),
  methods: {
    async login() {
      const form = this.loginForm
      form.loading = true
      form.error = null
      try {
        await this.$store.dispatch('login', {
          email: form.email,
          password: form.password,
        })
        this.$router.push('/')
      }
      catch (err) {
        switch (err.code) {
          case 'auth/user-not-found': form.error = 'There is no user with this email'; break
          case 'auth/wrong-password': form.error = 'The password is invalid'; break
          default: form.error = err.message
        }
      }
      finally {
        form.loading = false
      }
    },
    async signup() {
      const form = this.signupForm
      form.loading = true
      form.error = null
      try {
        await this.$store.dispatch('signup', {...form})
        this.$store.dispatch('login', {
          email: form.email,
          password: form.password,
        })
        .then(() => this.$router.push('/'))
        .catch(err => alert('something really bad happened :('))
      }
      catch (err) {
        form.error = err.message
      }
      finally {
        form.loading = false
      }
    },
    async reset() {
      const form = this.resetForm
      form.loading = true
      form.error = null
      form.showSuccess = false
      try {
        await firebase.auth.sendPasswordResetEmail(this.loginForm.email)
        form.showSuccess = true
      }
      catch (err) {
        form.error = err.message
      }
      finally {
        form.loading = false
      }
    }
  }
}
</script>

<style scoped>
section {
  perspective: 2000px;
}
.box {
  max-width: 20em;
}
.flip-leave {
  display: none;
}
.flip-enter-active {
  transition: transform .5s;
}
.flip-enter {
  transform: rotateX(-70deg);
}
</style>
