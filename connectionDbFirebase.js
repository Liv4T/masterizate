import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBUwPOBHWgSv10yWDO0VX_UCCOfHZ3jKYE",
    authDomain: "liv4t-skool.firebaseapp.com",
    databaseURL: "https://liv4t-skool.firebaseio.com",
    projectId: "liv4t-skool",
    storageBucket: "liv4t-skool.appspot.com",
    messagingSenderId: "346718353628",
    appId: "1:346718353628:web:abc0666c41b66fa472dc19",
    measurementId: "G-7L14TG5RRZ"
  };
  // Initialize Firebase
  firebase.initializeApp (firebaseConfig);
  firebase.analytics();
export default firebase
