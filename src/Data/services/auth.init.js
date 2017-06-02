import firebase from 'firebase';

// Initialize Firebase
var firebaseconfig = {
  apiKey: "AIzaSyANcvngXJy1Mz4Uw5-BY8QimhiscxaPRlw",
  authDomain: "flightsearchapp-168317.firebaseapp.com",
  databaseURL: "https://flightsearchapp-168317.firebaseio.com",
  projectId: "flightsearchapp-168317",
  storageBucket: "flightsearchapp-168317.appspot.com",
  messagingSenderId: "459510003336"
};
firebase.initializeApp(firebaseconfig);

export default function AuthInit() {
  var Auth = firebase.auth;
  var GoogleProvider = new firebase.auth.GoogleAuthProvider();
  var GithubProvider = new firebase.auth.GithubAuthProvider();
  var FacebookProvider = new firebase.auth.FacebookAuthProvider();

  return {
    Auth: Auth,
    GoogleProvider: GoogleProvider,
    GithubProvider: GithubProvider,
    FacebookProvider: FacebookProvider
  };

}
