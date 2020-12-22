import { useState } from "react";
import styled from "styled-components";

import Auth from "src/services/authServices";
import { useAuth } from "src/contexts/AuthContext";

const Form = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit fired!");
    Auth.createAccount(email, password)
      .then(() => {
        //reset form
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((err) => setError(err.message ? err.message : err));
  };

  return (
    <>
      <h1>Create Account</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="create_account_email">Email:</label>
        <input
          id="create_account_email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="create_account_password">Password:</label>
        <input
          id="create_account_password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="create_account_confirm_password">
          Confirm Password
        </label>
        <input
          id="create_account_confirm_password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Create Account</button>
      </Form>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
    </>
  );
};

export default CreateAccount;
