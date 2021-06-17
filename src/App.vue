<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="router-view" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {AppHeader},
}
</script>

<style>
html, body, #app {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
#app > * {
  flex-shrink: 0;
}
#app > .router-view {
  flex: 1;
}
html {
  overflow: auto !important;
}
.my-container {
  max-width: 40em;
  margin: 0 auto;
}
</style>
