import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjHmwB_R5luprhoI7gQ7Oczclemh6iELE",
  authDomain: "usermanagement-7724d.firebaseapp.com",
  projectId: "usermanagement-7724d",
  storageBucket: "usermanagement-7724d.appspot.com",
  messagingSenderId: "330484528813",
  appId: "1:330484528813:web:8af29935d2d51456207824"
};

initializeApp(firebaseConfig);
const auth = getAuth()

export const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      return error.message;
    });
}

export const LoginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     return userCredential.user;
    })
    .catch((error) => {
      return error.message;
    });
}