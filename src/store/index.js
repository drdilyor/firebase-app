import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userProfile: null,
    posts: [],
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPosts(state, val) {
      state.posts = val
    },
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
    },
    async logout({commit}) {
      await firebase.auth.signOut()
      commit('setUserProfile', null)
    },
    async createPost({state, commit}, post) {
      await firebase.clPosts.add({
        createdAt: new Date(),
        title: post.title,
        content: post.content,
        authorId: firebase.auth.currentUser.uid,
        authorFirstName: state.userProfile.firstName,
        authorLastName: state.userProfile.lastName,
        comments: 0,
        likes: 0,
      })
    }
  },
  modules: {
  }
})

firebase.clPosts.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
  let posts = []
  snapshot.forEach(doc => {
    let post = doc.data()
    post.id = doc.id
    posts.push(post)
  })
  store.commit('setPosts', posts)
})

export default store
