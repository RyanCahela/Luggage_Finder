import { useHistory, useLocation } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";

function Signup({ dialogValues, dialogFunctions }) {
  console.log("dialogValues", dialogValues);
  console.log("dialog vuncitons", dialogFunctions);
  const { setIsShowDialog } = dialogFunctions;
  const { isShowDialog, dialogBackground } = dialogValues;
  const history = useHistory();
  const location = useLocation();

  const handleClose = () => {
    console.log("location inside Signup", location);
    console.log("dialogBackground", dialogBackground);
    setIsShowDialog(false);
    history.push(dialogBackground.pathname);
  };

  const signupForm = (
    <form>
      <label>Email</label>
      <input type="email"></input>
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
