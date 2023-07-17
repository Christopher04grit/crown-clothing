import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDcbrib39q_mjn4XtM6z9uvjeSLQWp19sg",
    authDomain: "crown-db-48f21.firebaseapp.com",
    projectId: "crown-db-48f21",
    storageBucket: "crown-db-48f21.appspot.com",
    messagingSenderId: "853958037257",
    appId: "1:853958037257:web:3a129374ed914c990c4dd8"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;