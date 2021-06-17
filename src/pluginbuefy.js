import "@/assets/scss/buefy.scss"
import Vue from 'vue'
import { ConfigProgrammatic, Button, Icon } from 'buefy'
import AppIcon from "@/components/AppIcon.js"

Vue.use(Button)
Vue.use(Icon)
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
