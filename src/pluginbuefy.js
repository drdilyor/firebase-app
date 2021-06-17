import "@/assets/scss/buefy.scss"
import Vue from 'vue'
import Buefy from 'buefy'
import AppIcon from "@/components/AppIcon.js"

Vue.use(Buefy)
ConfigProgrammatic.setOptions({
  defaultIconPack: 'svg',
  defaultIconComponent: AppIcon,
  customIconPacks: {
    svg: {
      sizes: {
        'default': '24',
        'is-small': '16',
        'is-medium': '36',
        'is-large': '48',
      },
      iconPrefix: '',
    }
  }
})
