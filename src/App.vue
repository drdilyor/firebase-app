<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {AppHeader},
}
</script>
