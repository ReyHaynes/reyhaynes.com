import * as firebase from 'firebase/app'
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseUrl,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
  measurementId: process.env.REACT_APP_FIREBASE_measurementId
}

export class Firebase {

  db: firebase.firestore.Firestore
  analytics: firebase.analytics.Analytics

  constructor() {
    firebase.initializeApp(firebaseConfig)

    this.db = firebase.firestore()
    this.analytics = firebase.analytics()

    if (window.location.hostname === "localhost") {
      this.db.settings({
        host: "localhost:8080",
        ssl: false
      });
    }
  }
}

