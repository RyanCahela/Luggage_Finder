import { useContext, createContext, useState, useEffect } from "react";
import { firebaseAuth } from "src/services/firebase";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //mount auth listener on first load.
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log("user logged in");
      } else {
        setUser(null);
        console.log("user logged out");
      }
    });

    return unsubscribe;
  }, []);

  const value = { user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
export default AuthContext;
