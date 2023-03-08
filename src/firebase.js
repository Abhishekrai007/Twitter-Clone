import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDobq9xojT9_jvUQ2DymSMMkExZoce0DBM",
    authDomain: "twitter-clone-ef680.firebaseapp.com",
    projectId: "twitter-clone-ef680",
    storageBucket: "twitter-clone-ef680.appspot.com",
    messagingSenderId: "994048379354",
    appId: "1:994048379354:web:c2c1fd99c5072e09b918e3",
    measurementId: "G-S1E78K576G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export default db;