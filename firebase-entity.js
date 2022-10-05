import { initializeApp } from "firebase/app";

import { getFirestore, getDoc, doc } from "firebase/firestore";


export class FirebaseEntity{

  FIREBASE_KEYS = {

    apiKey: "AIzaSyCDZ4ZuQkGo8IjOttmHDPpUMBENPfAj8Ss",
  
    authDomain: "veterinariotest.firebaseapp.com",
  
    projectId: "veterinariotest",
  
    storageBucket: "veterinariotest.appspot.com",
  
    messagingSenderId: "469626034675",
  
    appId: "1:469626034675:web:002c0a1e43ec286d011a86"
  
  };

  constructor(){
    this.app = initializeApp(this.FIREBASE_KEYS);
    this.db = getFirestore(this.app);
  }

  async getLinkById(id){
    if (id) {
      const docRef = doc(this.db, "links", id);
      return getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          return null;
        }
      });
    
    }
  }

  async getUserById(id){
    if (id) {
      const docRef = doc(this.db, "users", id);
      return getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          return null;
        }
      });
    
    }
  }
}