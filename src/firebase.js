// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzz5RwNRy-zdLRDnyN-qmlaJR4L6EScpw",
  authDomain: "react-udemy-twitter-ad5b0.firebaseapp.com",
  projectId: "react-udemy-twitter-ad5b0",
  storageBucket: "react-udemy-twitter-ad5b0.appspot.com",
  messagingSenderId: "692681960272",
  appId: "1:692681960272:web:d5bfe81a5b89bd9a925a55"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

// // Get a list of cities from your database
// async function getCities (db) {
//   const citiesCol = collection(db, 'cities')
//   const citySnapshot = await getDocs(citiesCol)
//   const cityList = citySnapshot.docs.map(doc => doc.data())
//   return cityList
// }

// console.log(getCities(db))
