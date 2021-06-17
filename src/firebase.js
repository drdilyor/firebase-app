import firebase from "firebase/app"

import "firebase/analytics"
import "firebase/auth"
import "firebase/firestore"

export const firebaseConfig = {
  apiKey: "AIzaSyDzWe7BTdXHakrWvxD_cg5zD-APrfTT9X0",
  authDomain: "test-dafb3.firebaseapp.com",
  projectId: "test-dafb3",
  storageBucket: "test-dafb3.appspot.com",
  messagingSenderId: "963603454360",
  appId: "1:963603454360:web:854a5b420e0fbf12bb73ed",
  measurementId: "G-356N8WY890",
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const db = firebase.firestore()
export const auth = firebase.auth()

export const clUsers = db.collection('users')
export const clPosts = db.collection('posts')

export default {db, auth, clUsers, clPosts, firebaseConfig}
