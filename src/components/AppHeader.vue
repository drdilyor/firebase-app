<template>
  <b-navbar type="is-primary" shadow>
    <template #brand>
      <b-navbar-item tag="router-link" to="/">
        <b>Firebase Test</b>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="router-link" to="/login">
        Login
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
