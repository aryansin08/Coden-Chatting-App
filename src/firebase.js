import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBHSY4_Fb2QsvoiWR--4O_FeByLBTy-LBQ",
    authDomain: "react-slack-clone-b0e4e.firebaseapp.com",
    projectId: "react-slack-clone-b0e4e",
    storageBucket: "react-slack-clone-b0e4e.appspot.com",
    messagingSenderId: "448966426431",
    appId: "1:448966426431:web:99dcad453844f59fdd5d8a",
    measurementId: "G-DZ1MFLHQT9",
    databaseURL: "https://react-slack-clone-b0e4e-default-rtdb.firebaseio.com/",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;