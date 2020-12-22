import { useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  

  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
