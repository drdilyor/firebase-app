import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {},
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    }
  },
  actions: {
    async login({dispatch}, form) {
      const {user} = await firebase.auth.signInWithEmailAndPassword(form.email, form.password)
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({dispatch, commit}, user) {
      const userProfile = await firebase.clUsers.doc(user.uid).get()
      commit('setUserProfile', userProfile.data())
    },
    async signup({dispatch}, form) {
      const {user} = await firebase.auth.createUserWithEmailAndPassword(form.email, form.password)
      await firebase.clUsers.doc(user.uid).set({
        firstName: form.firstName,
        lastName: form.lastName,
      })
      dispatch('fetchUserProfile', user)
    }
  },
  modules: {
  }
})
