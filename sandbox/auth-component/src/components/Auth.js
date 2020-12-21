import Login from "./Login";
import Logout from "./Logout";
import CreateAccount from "./CreateAccount";

const Auth = () => {
  return (
    <div>
      <Login />
      <hr />
      <Logout />
      <hr />
      <CreateAccount />
    </div>
  );
};

export default Auth;
