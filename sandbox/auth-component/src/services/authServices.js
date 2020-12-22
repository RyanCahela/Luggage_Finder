import { firebaseAuth } from "src/services/firebase";

console.log("firebaseAuth", firebaseAuth);

const authServices = {
  createAccount: (email, password) => {
    //triggers firebaseAuth.onAuthStateChaged() in AuthContext.js
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  },
  login: (email, password) => {
    //triggers firebaseAuth.onAuthStateChaged() in AuthContext.js
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  },
  logout: () => {
    //triggers firebaseAuth.onAuthStateChaged() in AuthContext.js
    return firebaseAuth.signOut();
  },
};

export default authServices;
