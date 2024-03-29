import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { doc, Firestore, getDoc, getFirestore } from 'firebase/firestore';
import { FirebasePerformance, getPerformance } from 'firebase/performance';

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

class Firebase {

  app: FirebaseApp
  db: Firestore
  analytics: Analytics
  performance: FirebasePerformance

  constructor() {
    this.app = initializeApp(firebaseConfig)
    this.db = getFirestore(this.app)
    this.analytics = getAnalytics(this.app)
    this.performance = getPerformance(this.app)

    // connectFirestoreEmulator(this.db, 'localhost', 8080);
  }

  async getDocSnapshot(collection: string, document: string) {
    return await getDoc(doc(this.db, collection, document))
  }

  logEvent(key: string, data?: object) {
    logEvent(this.analytics, key, data)
  }
}

const FirebaseInstance = new Firebase()

export {
  FirebaseInstance
};


