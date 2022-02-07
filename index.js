// Import stylesheets
//import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Cloud Firestore through Firebase
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"; 
import { collection, addDoc } from "firebase/firestore"; 
import { collection, query, where } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS5DEp1211y96IZ2vr-e_p_vrwzWD1tzY",
  authDomain: "villamariaweb-2f399.firebaseapp.com",
  projectId: "villamariaweb-2f399",
  storageBucket: "villamariaweb-2f399.appspot.com",
  messagingSenderId: "1074313712213",
  appId: "1:1074313712213:web:86298a9a46f1efc83f7adc",
  measurementId: "G-33V9KFX5R0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);


// Get a list of cities from your database
async function getCities(db) {

  console.log("step getCities");

  const citiesCol = collection(db, 'racc');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

async function main() {
  // Add Firebase project configuration object here
  //const firebaseConfig = {};

  console.log("step 1");

  

  /*try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }*/

  // Add a second document with a generated ID.


/*try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}*/

  const q = query(collection(db, "users"), where("first", "==", 'Alan'));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data().born, ".", doc.data().first, ".", doc.data().last, ".", );
  });

  console.log("first query executed");

  const querySnapshot2 = await getDocs(collection(db, "users"));
  querySnapshot2.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

  const querySnapshot3 = await getDocs(collection(db, "cities"));
  querySnapshot3.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data().born, " ", doc.data().first);
  });
  


  //getCities(db);
  
  console.log("step 3");



}
main();



