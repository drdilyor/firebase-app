import Vue from 'vue'
import App from './App.vue'
import './pluginbuefy.js'
import AppIcon from '@/components/AppIcon'

Vue.config.productionTip = false
Vue.component('app-icon', AppIcon)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
