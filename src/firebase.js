import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAh5_zfEAybBmwRbLSDtBzvv7k9BVr0IxI",
  authDomain: "utube-remade.firebaseapp.com",
  projectId: "utube-remade",
  storageBucket: "utube-remade.appspot.com",
  messagingSenderId: "758725606468",
  appId: "1:758725606468:web:eedd69cc5f6c1ffc895011"
};


firebase.initializeApp(firebaseConfig);


export {  firebase };