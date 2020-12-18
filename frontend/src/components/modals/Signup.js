import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@material-ui/core";

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
    sessionStorage.removeItem("dialogBackground");
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
    <>
      <DialogTitle>Create Account</DialogTitle>
      <DialogContent></DialogContent>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <DialogActions></DialogActions>
        <Button type="submit" color="primary">
          Signup
        </Button>
        <Button color="secondary" onClick={handleClose}>
          Close
        </Button>
        {error ? <div style={{ color: "red" }}>{error.message}</div> : null}
      </form>
    </>
  );

  return (
    <Dialog open={isShowDialog} onClose={handleClose}>
      <DialogTitle>Signup</DialogTitle>
      <DialogContent></DialogContent>
      {signupForm}
    </Dialog>
  );
}

export default Signup;
