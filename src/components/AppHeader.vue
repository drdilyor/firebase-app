<template>
  <b-navbar type="is-primary" spaced>
    <template #brand>
      <b-navbar-item tag="router-link" to="/">
        <b>Firebase Test</b>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" to="/">
        Home
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item v-if="!loggedIn" tag="router-link" to="/login">
        Login
      </b-navbar-item>
      <b-navbar-dropdown v-else label="Account" hoverable right>
        <b-navbar-item tag="router-link" to="/settings">
          <b-icon icon="gear" class="mr-2" />
          Settings
        </b-navbar-item>
        <b-navbar-item tag="a" href="#" @click.prevent="logout">
          <b-icon icon="logout" class="mr-2" />
          Log out
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      const state = this.$store.state
      const up = state.userProfile
      return up != null
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
