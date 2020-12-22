import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { AuthProvider } from "src/contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider></AuthProvider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
