import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCO9co3pv1QQk3Nu6ZNO4Y7sYoFzHQlVYg",
    authDomain: "buzz-buzz-app.firebaseapp.com",
    databaseURL: "https://buzz-buzz-app-default-rtdb.firebaseio.com",
    projectId: "buzz-buzz-app",
    storageBucket: "buzz-buzz-app.appspot.com",
    messagingSenderId: "1064167665520",
    appId: "1:1064167665520:web:989d9815c46b858e25a9b5",
    measurementId: "G-7BC4N8FD90"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()