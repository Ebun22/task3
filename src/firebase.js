import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBNHutllZ2DzUi2etF6nJzHRlw_mGvZERY",
    authDomain: "auth-development-40845.firebaseapp.com",
    projectId: "auth-development-40845",
    storageBucket: "auth-development-40845.appspot.com",
    messagingSenderId: "452403378221",
    appId:"1:452403378221:web:159da9398d28e56d3520a4"
})

export const auth = app.auth()
export default app