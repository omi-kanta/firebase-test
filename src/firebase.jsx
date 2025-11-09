import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC9pY2dmcxftOETr4d3NqyqQwr6rZHI64",
  authDomain: "fir-test-4b42a.firebaseapp.com",
  projectId: "fir-test-4b42a",
  storageBucket: "fir-test-4b42a.firebasestorage.app",
  messagingSenderId: "578829494675",
  appId: "1:578829494675:web:d2a92af0556335b219a066",
  measurementId: "G-KS2NQPNL7V"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
