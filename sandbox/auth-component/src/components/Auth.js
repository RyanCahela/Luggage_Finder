import Login from "src/components/Login";
import Logout from "src/components/Logout";
import CreateAccount from "src/components/CreateAccount";
import Header from "src/parts/Header";
import { useAuth } from "src/contexts/AuthContext";

const Auth = () => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      {user ? (
        <Logout />
      ) : (
        <>
          <Login />
          <CreateAccount />
        </>
      )}
    </>
  );
};

export default Auth;
