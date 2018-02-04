import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAOhZ9y0StYU-23xjDKvocavQYv_VLPNfI",
    authDomain: "fun-food-friends-57045.firebaseapp.com",
    databaseURL: "https://fun-food-friends-57045.firebaseio.com",
    projectId: "fun-food-friends-57045",
    storageBucket: "fun-food-friends-57045.appspot.com",
    messagingSenderId: "442508672666"
  }

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase