import Vue from 'vue'
// import and add more icons in this file
import {
  mdiAccount,
  mdiAlertCircleOutline,
  mdiEmail,
  mdiEye,
  mdiEyeOff,
  mdiCog,
  mdiLock,
  mdiLogout,
} from '@mdi/js'

const icons = {
  mdiAccount,
  mdiAlertCircleOutline,
  mdiEmail,
  mdiEye,
  mdiEyeOff,
  mdiCog,
  mdiGear: mdiCog, // wtf? gear is more meaningful
  mdiLock,
  mdiLogout,
}
Vue.prototype.$icons= icons

export default icons
