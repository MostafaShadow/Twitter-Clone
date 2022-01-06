import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA3Vq67KW7aQ59tcADw-o1UiaOgT95W9Oc",
  authDomain: "twiiter-b6c7c.firebaseapp.com",
  projectId: "twiiter-b6c7c",
  storageBucket: "twiiter-b6c7c.appspot.com",
  messagingSenderId: "693641172478",
  appId: "1:693641172478:web:cbf645fed3ffb6c0611caf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
