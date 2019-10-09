import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsXUIYR7HyEeR2al59VK1lu6iL8QpzL_M",
    authDomain: "eventos-1120e.firebaseapp.com",
    databaseURL: "https://eventos-1120e.firebaseio.com",
    projectId: "eventos-1120e",
    storageBucket: "",
    messagingSenderId: "137082903077",
    appId: "1:137082903077:web:b410b26c8f5758977d3dcc"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);