import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebaseSetup";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signupAsync = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  useEffect(() => {
    const unsubscibeFunc = auth.onAuthStateChanged((user) => {
      if (user) {
        //user signed in
        console.log("user signed in", user);
        setCurrentUser(user);
      } else {
        //user not signed in
        console.log("user signed out");
        setCurrentUser(null);
      }
    });

    return unsubscibeFunc;
  }, []);

  const authValues = { signupAsync, currentUser };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
