// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: window.env.apiKey,
    authDomain: window.env.authDomain,
    databaseURL: window.env.databaseURL,
    projectId: window.env.projectId,
    storageBucket: window.env.storageBucket,
    messagingSenderId: window.env.messagingSenderId,
    appId: window.env.appId,
    measurementId: window.env.measurementId,
  };

  export default firebase.initializeApp(firebaseConfig)