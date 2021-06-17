import Vue from 'vue'
import App from './App.vue'
import './pluginbuefy.js'
import "@/assets/scss/styles.scss"
import AppIcon from '@/components/AppIcon'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.component('app-icon', AppIcon)

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
