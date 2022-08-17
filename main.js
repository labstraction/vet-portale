
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";



const firebaseConfig = {

  apiKey: "AIzaSyCDZ4ZuQkGo8IjOttmHDPpUMBENPfAj8Ss",

  authDomain: "veterinariotest.firebaseapp.com",

  projectId: "veterinariotest",

  storageBucket: "veterinariotest.appspot.com",

  messagingSenderId: "469626034675",

  appId: "1:469626034675:web:002c0a1e43ec286d011a86"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log(app);
const db = getFirestore(app);
console.log(db);
// const querySnapshot = await getDocs(collection(db, "links"));
// const querySnapshot = await getDoc();

// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
const searchString = window.location.search;
console.log(searchString);

const urlParams = new URLSearchParams(searchString);
const id = urlParams.get('id');
if (id) {
  const docRef = doc(db, "links", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const myObj = docSnap.data();
    document.getElementById('text_id').textContent +=  myObj.hidden_link;

  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}





// const searchString = window.location.search;
// console.log(searchString);

// const urlParams = new URLSearchParams(searchString);
// const id = urlParams.get('id');
// console.log(id);

// document.getElementById('text_id').textContent += id;


