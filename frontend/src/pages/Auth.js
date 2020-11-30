import { useHistory } from "react-router-dom";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const firebaseConfig = {
  apiKey: "AIzaSyA-kK7IQDdZ6dDg8EzSCbj0C23QzhD9tk0",
  authDomain: "luggage-finder-cd749.firebaseapp.com",
  databaseURL: "https://luggage-finder-cd749.firebaseio.com",
  projectId: "luggage-finder-cd749",
  storageBucket: "luggage-finder-cd749.appspot.com",
  messagingSenderId: "332804440276",
  appId: "1:332804440276:web:ae6c51fd59e6e6acc1fb41",
  measurementId: "G-NPPDW2CGKR",
};

firebase.initializeApp(firebaseConfig);

function Auth() {
  const history = useHistory();
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/signedIn",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: (success) => {
        console.log("success", success);
        history.push("/signedIn");
      },
    },
  };
  return (
    <div>
      <h1>Sign In</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default Auth;
