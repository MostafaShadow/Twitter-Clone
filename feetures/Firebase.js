import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDbOL7z6mT7u64WMB1kgiVl0B3RgXDl3DQ",
  authDomain: "twitter-c-e04f9.firebaseapp.com",
  projectId: "twitter-c-e04f9",
  storageBucket: "twitter-c-e04f9.appspot.com",
  messagingSenderId: "357679910030",
  appId: "1:357679910030:web:24af51ae0e124c9efa0ddf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
