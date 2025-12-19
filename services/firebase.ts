
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// O usuário deve preencher com suas credenciais do Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyPlaceholder",
  authDomain: "shiftflow-gol.firebaseapp.com",
  projectId: "shiftflow-gol",
  storageBucket: "shiftflow-gol.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
