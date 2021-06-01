
import firebase  from  "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAOrmLDU4nUO403kAb067QpGRZg8VJyf4s",
    authDomain: "twitter-clone-267af.firebaseapp.com",
    projectId: "twitter-clone-267af",
    storageBucket: "twitter-clone-267af.appspot.com",
    messagingSenderId: "352794549641",
    appId: "1:352794549641:web:4713aaf94e4181bddf5558",
    measurementId: "G-5Q6VF6XET1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // auth provider
  const githubAuth  = new firebase.auth.GithubAuthProvider();
  const googleAuth = new firebase.auth.GoogleAuthProvider();


  export {firebase,githubAuth,googleAuth};
