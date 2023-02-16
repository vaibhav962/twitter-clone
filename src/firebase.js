import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDe1t8BoMdzvHSF1rqjSe8-fBovrGXFrew",
    authDomain: "twitter-clone-978a0.firebaseapp.com",
    projectId: "twitter-clone-978a0",
    storageBucket: "twitter-clone-978a0.appspot.com",
    messagingSenderId: "849522014103",
    appId: "1:849522014103:web:e3cf85de93ea3d7a87b6d2",
    measurementId: "G-N1Y02MBFV4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;