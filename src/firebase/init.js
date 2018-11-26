import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCN8rddAgUd1pwd7ukXpR3_YSatxTJpLbE",
  authDomain: "vue-flag.firebaseapp.com",
  databaseURL: "https://vue-flag.firebaseio.com",
  projectId: "vue-flag",
  storageBucket: "vue-flag.appspot.com",
  messagingSenderId: "642592421169"
};
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
