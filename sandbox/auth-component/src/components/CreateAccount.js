import { useState } from "react";
import styled from "styled-components";

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
  };

  return (
    <>
      <h1>Create Account</h1>
      <Form onSubmit={handleSubmit}>
        <label for="email_input">Email:</label>
        <input
          id="email_input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password_input">Password:</label>
        <input
          id="password_input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label for="confirm_password">Confirm Password</label>
        <input
          id="confirm_password"
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
