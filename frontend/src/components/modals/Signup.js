import { useHistory, useLocation } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import { useAuth } from "../../contexts/AuthContext";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { useState } from "react";

function Signup({ dialogValues, dialogFunctions }) {
  const { setIsShowDialog } = dialogFunctions;
  const { isShowDialog, dialogBackground } = dialogValues;
  const history = useHistory();
  const location = useLocation();
  const { signupAsync } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setIsShowDialog(false);
    history.push(dialogBackground.pathname);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupAsync(email, password).then((cred) => console.log("cred", cred));
  };

  const signupForm = (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
      <button type="submit">Signup</button>
    </form>
  );

  return (
    <Dialog open={isShowDialog} onClose={handleClose}>
      <h3>Signup</h3>
      {signupForm}
    </Dialog>
  );
}

export default Signup;
