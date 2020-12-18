import { useHistory, useLocation } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import { useAuth } from "../../contexts/AuthContext";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { useState } from "react";
import { SettingsBackupRestoreRounded } from "@material-ui/icons";

function Signup({ dialogValues, dialogFunctions }) {
  const { setIsShowDialog } = dialogFunctions;
  const { isShowDialog, dialogBackground } = dialogValues;
  const history = useHistory();
  const location = useLocation();
  const { signupAsync } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setIsShowDialog(false);
    history.push(dialogBackground.pathname);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cred = await signupAsync(email, password);
      if (cred) setEmail("");
      setPassword("");
      handleClose();
    } catch (err) {
      console.error(err);
      setError(err);
    }
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
      {error ? <div style={{ color: "red" }}>{error.message}</div> : null}
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
