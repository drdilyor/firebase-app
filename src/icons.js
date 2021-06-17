import Vue from 'vue'
// import and add more icons in this file
import {
  mdiAccount,
  mdiAlertCircleOutline,
  mdiEye,
  mdiEyeOff,
} from '@mdi/js'

const icons = {
  mdiAccount,
  mdiAlertCircleOutline,
  mdiEye,
  mdiEyeOff,
}
Vue.prototype.$icons= icons

export default icons
