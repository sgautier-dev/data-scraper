import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDWk1hr7SWi2rFMAgwy_DlHStLFqO9iR34',
  authDomain: 'data-scraper-8a73c.firebaseapp.com',
  projectId: 'data-scraper-8a73c',
  storageBucket: 'data-scraper-8a73c.appspot.com',
  messagingSenderId: '231056784157',
  appId: '1:231056784157:web:4626511e495eb404acfff4',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
