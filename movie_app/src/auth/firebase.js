import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// kendi firebase imizi yapistiracagiz
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASvNYu7hmfDjz27Z8MzefY-_90urHQ8tU",
    authDomain: "movie-app-54485.firebaseapp.com",
    projectId: "movie-app-54485",
    storageBucket: "movie-app-54485.appspot.com",
    messagingSenderId: "205041907337",
    appId: "1:205041907337:web:4bad096362dbc71b997858"
});


// user create
export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
      });


    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
  }
};

export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      // var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      alert("The password is invalid or the user does not have a password!");
    });
};

// sign-out
export const signOut = () => {
  firebase.auth().signOut();
};



// export const userObserver = async (setCurrentUser) => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       setCurrentUser(user);
//     } else {
//       // User is signed out
//       setCurrentUser(null);
//     }
//   });
// };
// export const signUpProvider = () => {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({ prompt: "select_account" });
//   firebase.auth().signInWithPopup(provider);
// };
// export const forgotPassword = (email) => {
//   firebase.auth().sendPasswordResetEmail(email);
//   alert("Please check your mail box!");
// };
// export default firebaseApp;